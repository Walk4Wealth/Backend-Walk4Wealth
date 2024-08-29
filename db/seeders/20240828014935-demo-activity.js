"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Activities",
      [
        {
          name: "Walking",
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jogging",
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Running",
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Activities", null, {});
  },
};
