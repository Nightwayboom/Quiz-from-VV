'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Answers', [
      {
        name: 'Answ-1(corr)',
        correct: true,
        question_id: 1
      },
      {
        name: 'Answ-2(necorr)',
        correct: false,
        question_id: 1
      },
      {
        name: 'Answ-3(corr)',
        correct: true,
        question_id: 2
      },
      {
        name: 'Answ-4(necorr)',
        correct: false,
        question_id: 2
      },

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('Answers', null, {});
     
  }
};
