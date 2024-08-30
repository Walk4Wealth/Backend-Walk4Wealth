const { User } = require("../../models");
const ApiError = require("../../helpers/errorHandler");
const { getHash, checkHash } = require("../../helpers/passwordHash");
const Validator = require("fastest-validator");
const v = new Validator();
const jwt = require("jsonwebtoken");
const { ROLE, LEVEL } = require("../../utils/constanta");
const { JWT_SECRET_KEY } = process.env;

const checkDuplicate = async (email, username) => {
  const resultEmail = await User.findOne({ where: { email } });

  if (resultEmail) {
    throw ApiError.badRequest("Email sudah terfaftar!");
  }

  const resultUsername = await User.findOne({ where: { username } });
  if (resultUsername) {
    throw ApiError.badRequest("Username sudah terdaftar!");
  }

  return {
    resultEmail: resultEmail?.dataValues ?? null,
    resultUsername: resultUsername?.dataValues ?? null,
  };
};

const create = async (req) => {
  const { email, password, username } = req.body;

  await checkDuplicate(email, username);

  const schemaEmail = {
    email: { type: "email", label: "Email Address" },
  };

  const schemaPassword = {
    password: { type: "string", min: 6 },
  };

  const checkEmail = await v.compile(schemaEmail);
  const checkPassword = await v.compile(schemaPassword);

  const validateEmail = checkEmail({
    email: `${email}`,
  });

  const validatePassword = checkPassword({
    password: `${password}`,
  });

  // Email Validation
  if (validateEmail.length > 0) {
    throw ApiError.badRequest("Email tidak valid");
  }

  // Password Validation
  if (validatePassword.length > 0) {
    throw ApiError.badRequest("Password minimal 6 karakter");
  }

  const passwordHashed = getHash(password);
  req.body.password = passwordHashed;
  req.body.total_points = 0;
  req.body.role = ROLE.USER_BASIC;
  req.body.level = LEVEL.BEGINNER;

  const result = await User.create(req.body);

  let payload = {
    id: result.id,
    nama: result.nama,
    email: result.email,
    weight: result.weight,
    role: result.role,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY);

  const resultWithoutPassword = { ...result.toJSON(), password: undefined };

  return { user_created: resultWithoutPassword, token: token };
};

const login = async (req) => {
  const { email, password } = req.body;

  if (!email) {
    throw ApiError.badRequest("Email harus diisi");
  }

  const schemaPassword = {
    password: { type: "string", min: 6 },
  };

  const checkPassword = await v.compile(schemaPassword);

  const validatePassword = checkPassword({
    password: `${password}`,
  });

  // Password Validation
  if (validatePassword.length > 0) {
    throw ApiError.badRequest("Password minimal 6 karakter");
  }

  let userExist = await User.findOne({ where: { email } });

  if (!userExist) {
    throw ApiError.badRequest("Email tidak ditemukan");
  }

  const match = checkHash(password, userExist.password);
  if (!match) {
    throw ApiError.badRequest("Password/Email salah");
  }

  let payload = {
    id: userExist.id,
    nama: userExist.nama,
    email: userExist.email,
    weight: userExist.weight,
    role: userExist.role,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY);

  return { token };
};

const whoami = async (req) => {
  const user = req.user;

  const result = await User.findOne({
    where: { id: user.id },
    attributes: { exclude: ["password"] },
  });
  return result;
};

const resetPassword = async (req) => {
  const { old_password, new_password } = req.body;

  const user = req.user;

  const schemaPassword = {
    new_password: { type: "string", min: 6 },
  };

  const checkPassword = await v.compile(schemaPassword);

  const validatePassword = checkPassword({
    new_password: `${new_password}`,
  });

  // Password Validation
  if (validatePassword.length > 0) {
    throw ApiError.badRequest("Password minimal 6 karakter");
  }

  const userExist = await User.findOne({ where: { id: user.id } });
  const match = checkHash(old_password, userExist.password);

  if (!match) {
    throw ApiError.badRequest("Password lama salah");
  }

  const passwordHashed = getHash(new_password);

  req.body.password = passwordHashed;

  const result = await User.update(req.body, {
    where: { id: user.id },
  });
  return result;
};

module.exports = {
  create,
  login,
  whoami,
  resetPassword,
};
