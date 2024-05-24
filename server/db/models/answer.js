'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Question}) {
      this.belongsTo(Question, {
        foreignKey: "question_id",
      })
    }
  }
  Answer.init({
    name: DataTypes.STRING,
    correct: DataTypes.BOOLEAN,
    question_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};