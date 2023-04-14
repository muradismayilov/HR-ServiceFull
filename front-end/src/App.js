import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./layouts/HomePage";
import Login from "./layouts/Login";
import PrivateRoute from "./layouts/PrivateRoute";

function App() {
  

  return (
    <Routes>
      <Route
        path="*"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
