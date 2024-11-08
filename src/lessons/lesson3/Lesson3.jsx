import MyButton from "../../components/myButton/MyButton";

function Lesson3() {
  const handlerClick = () => {
    console.log("click!");
  };

  const handlerSubmit = () => {
    console.log("submit!");
  };

  const handlerReset = () => {
    console.log("reset!");
  };

  return (
    <div>
      <h2>Lesson3</h2>
      <p>React props</p>
      <p>
        Это способ передачи данных от компонента родителя к компоненту ребенка
      </p>
      <div>
        <MyButton text={"Click"} func={handlerClick} isDanger={true} />
        <MyButton text={"Submit"} func={handlerSubmit} isDanger={false} />
        <MyButton text={"Reset"} func={handlerReset} isDanger={true} />
        <MyButton />
      </div>
    </div>
  );
}

export default Lesson3;
