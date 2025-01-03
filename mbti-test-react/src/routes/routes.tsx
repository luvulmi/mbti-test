import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Question from "../pages/Question";
import Result from "../pages/Result";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qna" element={<Question />} />
        <Route path="/res" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;