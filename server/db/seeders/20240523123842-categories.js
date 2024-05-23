'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Categories', [
        {
        name: 'Настольный теннис',
      },
      {
        name: 'Category-2',
      },

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
 
     
      await queryInterface.bulkDelete('Categories', null, {});
    
  }
};
