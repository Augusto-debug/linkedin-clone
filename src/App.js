import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { selectUser } from "./features/userSlice";
import Login from "./pages/Login";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar avatar="../img/fotoMinha.jpg" />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
