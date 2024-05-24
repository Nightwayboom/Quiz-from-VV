'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Answers', [
      {
        name: 'Закрывает глаза и крепко дергает ракетку.',
        correct: true,
        question_id: 1
      },
      {
        name: 'Понимает, что настольный теннис не для него и идет кодить.',
        correct: false,
        question_id: 1
      },
      {
        name: 'Потому что они знают, что в Эльбрусе их никогда не забросят в угол игровой.',
        correct: true,
        question_id: 2
      },
      {
        name: 'Потому что они знают, что это их судьба - быть ракеткой и мячом, и они принимают это с легкостью и радостью.',
        correct: false,
        question_id: 2
      },
      {
        name: '"Блицкриг" на теннисном столе.',
        correct: true,
        question_id: 3
      },
      {
        name: 'Ашалеееть.',
        correct: false,
        question_id: 3
      },
      {
        name: 'Быстрые ноги, острые рефлексы и энергичные выражения лица при каждом ударе.',
        correct: false,
        question_id: 4
      },
      {
        name: 'Умение совмещать игры в теннис с учебой в Эльбрусе.',
        correct: true,
        question_id: 4
      },
      {
        name: 'Проведя еще один сет.',
        correct: false,
        question_id: 5
      },
      {
        name: 'Сходив в кафе-бар "у Ларисы".',
        correct: true,
        question_id: 5
      },
      {
        name: 'Че стало, `${имя соперника}?`',
        correct: true,
        question_id: 6
      },
      {
        name: 'Поверь мне, мяч, это только начало!',
        correct: false,
        question_id: 6
      },
      {
        name: 'bug',
        correct: true,
        question_id: 7
      },
      {
        name: 'error',
        correct: false,
        question_id: 7
      },
      {
        name: ' 12 сентября ',
        correct: true,
        question_id: 8
      },
      {
        name: '4 декабря',
        correct: false,
        question_id: 8
      },
      {
        name: 'Восьмеричной',
        correct: true,
        question_id: 9
      },
      {
        name: 'Десятичной',
        correct: false,
        question_id: 9
      },
      {
        name: 'Биточки',
        correct: true,
        question_id: 10
      },
      {
        name: 'Отбивнушки',
        correct: false,
        question_id: 10
      },
      {
        name: 'О всплывающей Интернет-рекламе',
        correct: true,
        question_id: 11
      },
      {
        name: 'О назойливых продавцах пылесосов',
        correct: false,
        question_id: 11
      },
      {
        name: '418 I m a teapot',
        correct: true,
        question_id: 12
      },
      {
        name: '418 Friday',
        correct: false,
        question_id: 12
      },

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('Answers', null, {});
     
  }
};
