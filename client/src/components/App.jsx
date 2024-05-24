import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header/Header";
import Final from "./Final/Final";
import CardQuest from "./CardQuest/CardQuest";
import MainPage from "./MainPage/MainPage";
import { Link, Route, Routes, Outlet } from "react-router-dom";

function App() {
  const [categoryId, setCategoryId] = useState(1);
  useEffect(() => {
    console.log("4. USE EFFECT");
    // loadData();
    // return () => {
    //   console.log("5. UNMOUNT");
    // };
  }, [categoryId]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage categoryId={categoryId} setCategoryId={setCategoryId} />
          }
        />
        <Route
          path="/category/:categoryId/question/:questId"
          element={<CardQuest />}
        />
         <Route
          path="/category/:categoryId/question/end"
          element={<Final />}
        />
      </Routes>

      <Outlet />
    </>
  );
}

export default App;
