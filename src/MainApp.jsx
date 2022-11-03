import { Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import FunctionApp from "./FunctionApp";

const MainApp = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/function" element={<FunctionApp />} />
      </Routes>
    </>
  );
};
export default MainApp;
