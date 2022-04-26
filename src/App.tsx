import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./Page/RequireAuth";
import AuthPage from "./Page/AuthPage/AuthPage";

import Homepage from "./Page/HomePage/Homepage";
import Login from "./Page/AuthPage/Login";

import "./App.css";

function App() {
  return (
    <Routes>
      {/* <Route element={<RequireAuth />}> */}
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
