// карточки с вопросами и ответами + кнопка на след вопрос (кнопка возможно отдельно)
// Заголовок приветсвия или че тут забыли]
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CardQuest() {
  const { categoryId, questId } = useParams();
  const [quest, setQuestId] = useState();
  const [answer, setAnswer] = useState();

  useEffect(() => {
    fetch(`/api/categories/${categoryId}/questions/${questId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setQuestId(data);
      });
    fetch(`/api/categories/${categoryId}/questions/${questId}/answers`)
      .then((res) => res.json())
      .then((data) => {
        setAnswer(data);
      });
  }, [questId]);
  // const [count, setCount] = useState(0)
  console.log(answer);

  const handle = (e) => {
    console.log(e.target);
  };
  return (
    <>
        <h2>{quest?.name}</h2>
        {answer?.map((el) => (
          <button
            onClick={(e) => {
              if (el.correct) {
                e.target.style.color = "green";
              } else e.target.style.color = "red";
            }}
            key={el.id}
          >
            {el?.name}
          </button>
        ))}
        <Link 
          to={`/category/${categoryId}/question/${(+questId + 1)< 7 ? +questId + 1 : 'end'}`}
          className="btn btn-primary"
        >{(+questId + 1)< 7 ? 'Далее' : 'Конец' }
        </Link>
    </>
  );
}

export default CardQuest;
