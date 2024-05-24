// Начальная страница с категориями (при выборе категории открывается карточка с вопросами)
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function MainPage({ categoryId, setCategoryId }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [categoryId]);

  return (
    <div className="row">
      {categories.map((category) => (
        <div key={category.id} className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{category.name}</h5>
              <Link
                to={`category/${category.id}/question/1`}
                className="btn btn-primary"
              >
                Стартуем
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainPage;
