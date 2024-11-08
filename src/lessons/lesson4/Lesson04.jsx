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
// let count = srate[0];
// let setCount = state[1]

// * функция useState принимает начальное значение
  // * возвращает массив из двух элементов, которые мы забираем через деструктуризацию
  // 1. - переменная состояния с текущим значением
  // 2. - функция для изменения этой переменной

  // * пример с счетчиком (числовое значение)
const [count, setCount] = useState(0)

  // * пример со строкой
  const [name, setName] = useState('John');

const handleMinus = () => {
     setCount(prev => prev -1)
 }

 const handlePlus = () => {
    setCount (prev => prev +1)
 }



 const handleUpperCase = () => {
    setName(prev => prev.toUpperCase())
 }

    return (
        <div className="lesson-container">
            <h2>Lesson 4</h2>
            <p>React hook useState()</p>
            <div className="counter">
                <MyButton func={handleMinus} text={"-"}/>
                {/* <button onClick={handleMinus}>-</button> */}
                <span> {count}</span>
                {/* <button onClick={handlePlus}>+</button> */}
                <MyButton func={handlePlus} text={"+"} isDanger={true}/>
            </div>
            <div className="state-practice">
            <p>UseState practice:</p>
            <p>Изменение строки</p>
             <div>
                <span >{name}</span>
                <MyButton func={handleUpperCase} text={"Change name"}/>
             </div>
             </div>
        </div>
    )
}

export default Lesson04;