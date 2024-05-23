'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Questions', [
      {
       name: 'Что часто делает начинающий игрок в настольный теннис, когда мячик летит прямо на него?',
       category_id: 1,
      },
      {
        name: 'Почему ракетки и мячи для настольного тенниса всегда счастливы?',
        category_id: 1,
       },
       {
        name: 'Как игроки настольного тенниса называют момент, когда они побеждают соперника всего за несколько ударов?',
        category_id: 1,
       },
       {
        name: 'Какие качества делают игрока настольного тенниса настоящей звездой?',
        category_id: 1,
       },
       {
        name: 'Как игроки настольного тенниса могут решить разногласия после матча?',
        category_id: 1,
       },
       {
        name: 'Какая характерная фраза исходит от игрока в настольный теннис, когда он хорошо ударяет по мячу?',
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
