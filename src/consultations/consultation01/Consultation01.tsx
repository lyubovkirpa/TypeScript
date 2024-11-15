import { useState } from "react";
import MyButton from "../../components/myButton/MyButton";
import "./consultation01.css";

export default function Consultation01() {
  const RANDOM_JOKE_URL: string =
    "https://official-joke-api.appspot.com/random_joke";

  const [joke, setJoke] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const getRandomJoke = async () => {
    setJoke(undefined);
    setError(undefined);
    const response = await fetch(RANDOM_JOKE_URL, {
      //оп умолч GET, можно не прописывать
      method: "GET",
      // GET, POST, PUT, DELETE - осн методы HTTP-запросов
    });
    const result = await response.json();
    if (response.ok) {
      setJoke(`${result.setup}, ${result.punchline}`);
    } else {
      setError("Some network error");
    }

    console.log(response);
  };

  return (
    <div className="consultation01Wrapper">
      <div className="card">
        <div className="jokesContainer">
          {joke && <p className="text">{joke}</p>}
          {joke && <p className="text">{error}</p>}
        </div>
        <MyButton text="Get random Joke" myType="button" func={getRandomJoke} />
      </div>
    </div>
  );
}
