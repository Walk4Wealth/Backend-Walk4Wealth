"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Vendor_product_details",
      [
        {
          vendor_product_id: 1,
          number: 1,
          description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 1,
          number: 2,
          description: "Pellentesque habitant morbi tristique senectus.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 1,
          number: 3,
          description: "Nullam accumsan lorem in dui.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 1,
          number: 4,
          description: "Phasellus viverra nulla ut metus varius laoreet.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 1,
          number: 5,
          description: "Curabitur suscipit suscipit tellus.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 2,
          number: 1,
          description: "Vestibulum ante ipsum primis in faucibus.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 2,
          number: 2,
          description: "In hac habitasse platea dictumst.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 2,
          number: 3,
          description: "Curabitur a felis in nunc fringilla tristique.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 2,
          number: 4,
          description: "Nulla facilisi. Cras non dolor.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 2,
          number: 5,
          description: "Sed mollis, eros et ultrices tempus.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 3,
          number: 1,
          description: "Etiam ultricies nisi vel augue.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 3,
          number: 2,
          description: "Curabitur ullamcorper ultricies nisi.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 3,
          number: 3,
          description: "Nam adipiscing. Vestibulum eu odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 3,
          number: 4,
          description: "Cras sagittis. Vivamus aliquet elit ac nisl.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 3,
          number: 5,
          description: "Praesent blandit laoreet nibh.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 4,
          number: 1,
          description: "Etiam ultricies nisi vel augue.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 4,
          number: 2,
          description: "Curabitur ullamcorper ultricies nisi.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 4,
          number: 3,
          description: "Nam adipiscing. Vestibulum eu odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 4,
          number: 4,
          description: "Cras sagittis. Vivamus aliquet elit ac nisl.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 4,
          number: 5,
          description: "Praesent blandit laoreet nibh.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 5,
          number: 1,
          description: "Etiam ultricies nisi vel augue.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 5,
          number: 2,
          description: "Curabitur ullamcorper ultricies nisi.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 5,
          number: 3,
          description: "Nam adipiscing. Vestibulum eu odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 5,
          number: 4,
          description: "Cras sagittis. Vivamus aliquet elit ac nisl.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 5,
          number: 5,
          description: "Praesent blandit laoreet nibh.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 6,
          number: 1,
          description: "Etiam ultricies nisi vel augue.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 6,
          number: 2,
          description: "Curabitur ullamcorper ultricies nisi.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 6,
          number: 3,
          description: "Nam adipiscing. Vestibulum eu odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 6,
          number: 4,
          description: "Cras sagittis. Vivamus aliquet elit ac nisl.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 6,
          number: 5,
          description: "Praesent blandit laoreet nibh.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 7,
          number: 1,
          description: "Etiam ultricies nisi vel augue.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 7,
          number: 2,
          description: "Curabitur ullamcorper ultricies nisi.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 7,
          number: 3,
          description: "Nam adipiscing. Vestibulum eu odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 7,
          number: 4,
          description: "Cras sagittis. Vivamus aliquet elit ac nisl.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 7,
          number: 5,
          description: "Praesent blandit laoreet nibh.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 8,
          number: 1,
          description: "Etiam ultricies nisi vel augue.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 8,
          number: 2,
          description: "Curabitur ullamcorper ultricies nisi.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 8,
          number: 3,
          description: "Nam adipiscing. Vestibulum eu odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 8,
          number: 4,
          description: "Cras sagittis. Vivamus aliquet elit ac nisl.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 8,
          number: 5,
          description: "Praesent blandit laoreet nibh.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 9,
          number: 1,
          description: "Etiam ultricies nisi vel augue.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 9,
          number: 2,
          description: "Curabitur ullamcorper ultricies nisi.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 9,
          number: 3,
          description: "Nam adipiscing. Vestibulum eu odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 9,
          number: 4,
          description: "Cras sagittis. Vivamus aliquet elit ac nisl.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 9,
          number: 5,
          description: "Praesent blandit laoreet nibh.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 10,
          number: 1,
          description: "Etiam ultricies nisi vel augue.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 10,
          number: 2,
          description: "Curabitur ullamcorper ultricies nisi.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 10,
          number: 3,
          description: "Nam adipiscing. Vestibulum eu odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 10,
          number: 4,
          description: "Cras sagittis. Vivamus aliquet elit ac nisl.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 10,
          number: 5,
          description: "Praesent blandit laoreet nibh.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 11,
          number: 1,
          description: "Etiam ultricies nisi vel augue.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 11,
          number: 2,
          description: "Curabitur ullamcorper ultricies nisi.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 11,
          number: 3,
          description: "Nam adipiscing. Vestibulum eu odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 11,
          number: 4,
          description: "Cras sagittis. Vivamus aliquet elit ac nisl.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 11,
          number: 5,
          description: "Praesent blandit laoreet nibh.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 12,
          number: 1,
          description: "Etiam ultricies nisi vel augue.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 12,
          number: 2,
          description: "Curabitur ullamcorper ultricies nisi.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 12,
          number: 3,
          description: "Nam adipiscing. Vestibulum eu odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 12,
          number: 4,
          description: "Cras sagittis. Vivamus aliquet elit ac nisl.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 12,
          number: 5,
          description: "Praesent blandit laoreet nibh.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 13,
          number: 1,
          description: "Etiam ultricies nisi vel augue.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 13,
          number: 2,
          description: "Curabitur ullamcorper ultricies nisi.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 13,
          number: 3,
          description: "Nam adipiscing. Vestibulum eu odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 13,
          number: 4,
          description: "Cras sagittis. Vivamus aliquet elit ac nisl.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 13,
          number: 5,
          description: "Praesent blandit laoreet nibh.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 14,
          number: 1,
          description: "Etiam ultricies nisi vel augue.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 14,
          number: 2,
          description: "Curabitur ullamcorper ultricies nisi.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 14,
          number: 3,
          description: "Nam adipiscing. Vestibulum eu odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 14,
          number: 4,
          description: "Cras sagittis. Vivamus aliquet elit ac nisl.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 14,
          number: 5,
          description: "Praesent blandit laoreet nibh.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 15,
          number: 1,
          description: "Etiam ultricies nisi vel augue.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 15,
          number: 2,
          description: "Curabitur ullamcorper ultricies nisi.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 15,
          number: 3,
          description: "Nam adipiscing. Vestibulum eu odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 15,
          number: 4,
          description: "Cras sagittis. Vivamus aliquet elit ac nisl.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          vendor_product_id: 15,
          number: 5,
          description: "Praesent blandit laoreet nibh.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Vendor_product_details", null, {});
  },
};
