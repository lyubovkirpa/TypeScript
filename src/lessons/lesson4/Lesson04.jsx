// import { useState } from "react";

// function Lesson4() {
// // let count = 0;
// // const handleMinus = () => {
// //     count = count - 1;
// // }

// // const handlePlus = () => {
// //     count = count + 1;
// // }

// let state = useState('hook')
// console.log(state);

//     return (
//         <div className="Lesson-container">
//             <h2>Lesson4</h2>
//             <p>React hook useState()</p>
//             <div>
//                 <button onClick={handleMinus}>-</button>
//                 <span>{count}</span>
//                 <button onClick={handlePlus}>+</button>
//             </div>
//         </div>
//     )
// }

// export default Lesson4;

import { useState } from "react";
import MyButton from "../../components/myButton/MyButton";

function Lesson04() {
  // let state = useState(0);
  // let count = state[0];
  // let setCount = state[1]

  // * функция useState принимает начальное значение
  // * возвращает массив из двух элементов, которые мы забираем через деструктуризацию
  // 1. - переменная состояния с текущим значением
  // 2. - функция для изменения этой переменной

  // * пример с счетчиком (числовое значение)
  const [count, setCount] = useState(0);

  // * пример со строкой
  const [name, setName] = useState("John");

  // * пример с булевым значением
  // const [toggle, setToggle] = useState(true)

  // * пример с массивом
  const [items, setItems] = useState([1, 2, 3]);

  const handleMinus = () => {
    setCount((prev) => prev - 1);
  };

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  // * обработчики для практики useState()

  // изменение строки
  const handleUpperCase = () => {
    setName((prev) => prev.toUpperCase());
  };

  // изменение массива
  // * состояние нельзя мутировать
  // поэтому мы передаем в функцию сеттер новое значение
  // в случаем с массивом мы используем spread оператор для копии текущего значения массива

  const handleChangeArray = () => {
    // удалили элемент по индексу
    setItems(items.filter((_, index) => index !== 0));
    // дописали элемент в начало
    setItems((items) => [4, ...items]);
  };

  console.log(items);

  return (
    <div className="lesson-container">
      <h2>Lesson 4</h2>
      <p>React hook useState()</p>
      <div className="counter">
        <MyButton func={handleMinus} text={"-"} />
        {/* <button onClick={handleMinus}>-</button> */}
        <span> {count}</span>
        {/* <button onClick={handlePlus}>+</button> */}
        <MyButton func={handlePlus} text={"+"} isDanger={true} />
      </div>
      <p>
        Чтобы хранить и отображать на странице изменяющиеся данные в React мы
        используем 'состояние' (state) - это особая переменная в React, которая
        приходит в результате выполнения функции useState(). Если это переменная
        изменится - это будет сигнал к обновлению страницы.
      </p>
      <p>
        Чтобы изменить значения состояния мы используем функцию, которая
        приходит вторым элементом в массиве из useState() - она перезаписывает
        состояние. Изменение состояния вызывает ререндр с новыми данными
      </p>
      <div className="state-practice">
        <h4>UseState practice:</h4>
        <p>Изменение строки:</p>
        <div>
          <span>{name}</span>
          <MyButton func={handleUpperCase} text={"Change name"} />
        </div>
        <p>Изменение массива:</p>
        <div>
          <span>
            {items[0]},{items[1]},{items[2]}
          </span>
          <MyButton func={handleChangeArray} text={"Change first number"} />
        </div>
      </div>
    </div>
  );
}

export default Lesson04;
