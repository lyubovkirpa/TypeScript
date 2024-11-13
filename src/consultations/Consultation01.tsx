import { useState } from "react";
import MyButton from "../components/myButton/MyButton";
import "./consultation01.css";

export default function Consultation01() {
  const [joke, setJoke] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

 

  return (
    <div className="consultation01Wrapper">
      <div className="card">
        <div className="jokesContainer">
          <p className="text"></p>
          <p className="text"></p>
        </div>
        {/* <MyButton text="Get random Joke" type="button" /> */}
      </div>
    </div>
  );
}
