import { useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";
import "./fetchFactAboutCats.css";
import Loader from "../loader/Loader";

export default function FetchFactAboutCats(): JSX.Element {
  const [fact, setFact] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchFactAboutCats = async (): Promise<void> => {
    interface IFactData {
      fact: string;
      length: number;
    }

    const res = await fetch("https://catfact.ninja/fact");
    const data: IFactData = await res.json();
    setFact(data.fact);
    setLoading(false);
  };

  const handleGetFact = () => {
    setLoading(true);
    setTimeout(() => {
      fetchFactAboutCats();
    }, 1500);
  };

  useEffect(() => {
    fetchFactAboutCats();
  }, []);

  return (
    <div className="lesson-container">
      <h2>Fetch Fact About Cats</h2>
      <MyButton func={handleGetFact} text="GET MORE INFO" />
      <MyButton text="DELETE ALL DATA" />

      {loading ? (
        <Loader />
      ) : (
        <section className="box-info">
          <article className="text-info">{fact}</article>
        </section>
      )}

    </div>
  );
}
