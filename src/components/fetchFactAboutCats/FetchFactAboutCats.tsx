import { useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";
import "./fetchFactAboutCats.css";
import Loader from "../loader/Loader";

export default function FetchFactAboutCats(): JSX.Element {
  const [facts, setFacts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchFactAboutCats = async (): Promise<void> => {
    interface IFactData {
      fact: string;
      length: number;
    }

    const res = await fetch("https://catfact.ninja/fact");
    const data: IFactData = await res.json();
    setFacts((prevFacts) => [...prevFacts, data.fact]);
    setLoading(false);
  };

  const handleGetFact = () => {
    setLoading(true);
    setTimeout(() => {
      fetchFactAboutCats();
    }, 500);
  };

  const handleDeleteFacts = () => {
    setFacts([])
  }

  useEffect(() => {
    fetchFactAboutCats();
  }, []);

  return (
    <div className="lesson-container">
      <h2>Fetch Fact About Cats</h2>
      <MyButton text="GET MORE INFO" func={handleGetFact}/>
      {facts.length > 0 && <MyButton text="DELETE ALL DATA" func={handleDeleteFacts} />}

      {loading ? (
        <Loader />
      ) : (
        <section className="box-info">
          {facts.map((fact, index) => (
            <article key={index} className="text-info">
              {fact}
            </article>
          ))}
        </section>
      )}
    </div>
  );
}
