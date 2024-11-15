import MyButton from "../../components/myButton/MyButton";

function Lesson3() {

   // эти функции мы передаем в props компоненту MyButton
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
    <div className="lesson-container">
      <h2>Lesson3</h2>
      <p>React props</p>
      <p>
        Это способ передачи данных от компонента родителя к компоненту ребенка
      </p>
      {/* имя для ключей props (text, func) мы придумываем самостоятельно */}
      {/* важно использовать эти же имена ключей в самом компоненте, когда вы встречаете данные */}
      <div>
        <MyButton text={"Нажми меня!"} func={handlerClick} isDanger={true} />
        <MyButton text={"Submit"} func={handlerSubmit} isDanger={false} />
        <MyButton text={"Reset"} func={handlerReset} isDanger={true} />
        {/* за счет значений props по умолчанию это кнопка имеет текст 'Click' и стилизацию danger и функцию handleDefaultClick */}
        <MyButton />
      </div>
    </div>
  );
}

export default Lesson3;
