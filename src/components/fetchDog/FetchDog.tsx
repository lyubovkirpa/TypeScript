import React, { useState } from "react";

export default function FetchDog(): JSX.Element {
  const [dogImg, setDogImg] = useState<string>("");

  const fetchDog = (): void => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDogImg(data.message));
  };

  fetchDog();

  return <div>FetchDog</div>;
}
