"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Vendors",
      [
        {
          name: "Zeta Mart",
          logo_url:
            "https://ik.imagekit.io/6v306xm58/picture_TRPOPC8IS?updatedAt=1691630445857",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fit Mart",
          logo_url:
            "https://ik.imagekit.io/6v306xm58/picture_TRPOPC8IS?updatedAt=1691630445857",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Adios",
          logo_url:
            "https://ik.imagekit.io/6v306xm58/picture_TRPOPC8IS?updatedAt=1691630445857",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Naikis",
          logo_url:
            "https://ik.imagekit.io/6v306xm58/picture_TRPOPC8IS?updatedAt=1691630445857",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "DonCafe",
          logo_url:
            "https://ik.imagekit.io/6v306xm58/picture_TRPOPC8IS?updatedAt=1691630445857",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Vendors", null, {});
  },
};
