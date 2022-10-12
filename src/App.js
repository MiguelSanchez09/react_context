import React, { useState } from "react";
import UserContext from "./context/UserContext";
import Form from "./components/Home";
import "./App.css";

function App() {
  const [user, updateUser] = useState(null);
  const userData = {
    user: [user, updateUser],
  };

  return (
    <UserContext.Provider value={userData}>
    <Form />
    </UserContext.Provider>
  );
}

export default App;
