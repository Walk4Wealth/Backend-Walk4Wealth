"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Vendor_products",
      [
        {
          vendor_id: 1,
          name: "ABC Suplement",
          description:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          product_img:
            "https://ik.imagekit.io/6v306xm58/picture_M3bbSQX6w?updatedAt=1689391560279",
          points_required: 21,
          expiration: "2024-12-31",
          stock: 100,
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_id: 1,
          name: "DCA Protein",
          description:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          product_img:
            "https://ik.imagekit.io/6v306xm58/picture_M3bbSQX6w?updatedAt=1689391560279",
          points_required: 25,
          expiration: "2024-12-31",
          stock: 50,
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_id: 1,
          name: "TXX Arm Band",
          description:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          product_img:
            "https://ik.imagekit.io/6v306xm58/picture_M3bbSQX6w?updatedAt=1689391560279",
          points_required: 40,
          expiration: "2024-12-31",
          stock: 25,
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_id: 2,
          name: "GIA Oats",
          description:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          product_img:
            "https://ik.imagekit.io/6v306xm58/picture_M3bbSQX6w?updatedAt=1689391560279",
          points_required: 40,
          expiration: "2024-12-31",
          stock: 15,
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_id: 2,
          name: "LNI Whey Protein",
          description:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          product_img:
            "https://ik.imagekit.io/6v306xm58/picture_M3bbSQX6w?updatedAt=1689391560279",
          points_required: 40,
          expiration: "2024-12-31",
          stock: 20,
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_id: 2,
          name: "FRA Green Tea",
          description:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          product_img:
            "https://ik.imagekit.io/6v306xm58/picture_M3bbSQX6w?updatedAt=1689391560279",
          points_required: 15,
          expiration: "2024-12-31",
          stock: 100,
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_id: 3,
          name: "X3 Sunglasses",
          description:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          product_img:
            "https://ik.imagekit.io/6v306xm58/picture_M3bbSQX6w?updatedAt=1689391560279",
          points_required: 75,
          expiration: "2024-12-31",
          stock: 10,
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_id: 3,
          name: "RS2 Running Socks",
          description:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          product_img:
            "https://ik.imagekit.io/6v306xm58/picture_M3bbSQX6w?updatedAt=1689391560279",
          points_required: 20,
          expiration: "2024-12-31",
          stock: 100,
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_id: 3,
          name: "X-Cal Tumblr",
          description:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          product_img:
            "https://ik.imagekit.io/6v306xm58/picture_M3bbSQX6w?updatedAt=1689391560279",
          points_required: 50,
          expiration: "2024-12-31",
          stock: 50,
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_id: 4,
          name: "X-Boost Running Socks",
          description:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          product_img:
            "https://ik.imagekit.io/6v306xm58/picture_M3bbSQX6w?updatedAt=1689391560279",
          points_required: 22,
          expiration: "2024-12-31",
          stock: 100,
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_id: 4,
          name: "HB-2 Headband",
          description:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          product_img:
            "https://ik.imagekit.io/6v306xm58/picture_M3bbSQX6w?updatedAt=1689391560279",
          points_required: 15,
          expiration: "2024-12-31",
          stock: 100,
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_id: 4,
          name: "NS-2 Slipper",
          description:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          product_img:
            "https://ik.imagekit.io/6v306xm58/picture_M3bbSQX6w?updatedAt=1689391560279",
          points_required: 50,
          expiration: "2024-12-31",
          stock: 25,
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_id: 5,
          name: "D Matcha",
          description:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          product_img:
            "https://ik.imagekit.io/6v306xm58/picture_M3bbSQX6w?updatedAt=1689391560279",
          points_required: 30,
          expiration: "2024-12-31",
          stock: 20,
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_id: 5,
          name: "D Mocca",
          description:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          product_img:
            "https://ik.imagekit.io/6v306xm58/picture_M3bbSQX6w?updatedAt=1689391560279",
          points_required: 20,
          expiration: "2024-12-31",
          stock: 35,
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_id: 5,
          name: "D Tea",
          description:
            "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds",
          product_img:
            "https://ik.imagekit.io/6v306xm58/picture_M3bbSQX6w?updatedAt=1689391560279",
          points_required: 20,
          expiration: "2024-12-31",
          stock: 30,
          status: "ACTIVE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Vendor_products", null, {});
  },
};
