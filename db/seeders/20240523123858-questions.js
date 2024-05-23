'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Questions', [
      {
       name: 'Question-1',
       category_id: 1,
      },
      {
        name: 'Question-2',
        category_id: 2,
       },
       

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Questions', null, {});
     
  }
};
