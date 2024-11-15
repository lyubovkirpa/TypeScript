import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Lesson1 from "./lessons/lesson1/Lesson1";
import Lesson2 from "./lessons/lesson2/Lesson2";
import Lesson3 from "./lessons/lesson3/Lesson3";
import Lesson04 from "./lessons/lesson4/Lesson04";
import Lesson5 from "./lessons/lesson5/Lesson5";
import Lesson06 from "./lessons/lesson06/Lesson06";
import Lesson07 from "./lessons/lesson07/Lesson07";
import Lesson08 from "./lessons/lesson08/Lesson08";
import Lesson09 from "./lessons/lesson09/Lesson09";
import Lesson10 from "./lessons/lesson10/Lesson10";
import Lesson11 from "./lessons/lesson11/Lesson11";
import Lessons from "./components/lessons/Lessons";
import Consultations from "./components/consultations/Consultations";
import Consultation01 from "./consultations/consultation01/Consultation01";
import Lesson12 from "./lessons/lesson12/Lesson12";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Lessons />}></Route>
        <Route path="lesson-1" element={<Lesson1 />}></Route>
        <Route path="lesson-2" element={<Lesson2 />}></Route>
        <Route path="lesson-3" element={<Lesson3 />}></Route>
        <Route path="lesson-4" element={<Lesson04 />}></Route>
        <Route path="lesson-5" element={<Lesson5 />}></Route>
        <Route path="lesson-6" element={<Lesson06 />}></Route>
        <Route path="lesson-7" element={<Lesson07 />}></Route>
        <Route path="lesson-8" element={<Lesson08 />}></Route>
        <Route path="lesson-9" element={<Lesson09 />}></Route>
        <Route path="lesson-10" element={<Lesson10 />}></Route>
        <Route path="lesson-11" element={<Lesson11 />}></Route>
        <Route path="lesson-12" element={<Lesson12 />}></Route>
        <Route path="consultations" element={<Consultations />}></Route>
        <Route path="consultations/consultation-1" element={<Consultation01 />}></Route>
      </Route>
    </Routes>
  </HashRouter>
);
