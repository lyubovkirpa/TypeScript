
//* без деструктуризации
// import './myButton.css'

// function MyButton(props) {
//   console.log(props);  
//   return <button onClick={props.func} className='my-button'>{props.text}</button>;
// }
// export default MyButton;



//* с деструктуризацией
// import './myButton.css'

// function MyButton({func, isDanger=false, text='Click', type= }) {
//   console.log(isDanger);
  
//   return <button onClick={func} className={`my-button ${isDanger ? 'btn-danger': ''}`}>{text}</button>;
// }

// export default MyButton;




import styles from "./myButton.module.css";
import cn from 'classnames'


interface IMyButtonProps {
  text?: string
  isDanger?: boolean
  myType?: "button" | "submit" | "reset"
  func?: () => void
}
const handleDefaultClick = () => {
  console.log("default click!");
};
function MyButton({
  func = handleDefaultClick,
  isDanger = true,
  text = "Click",
  myType = 'button' }:IMyButtonProps) {
  return (
    // <button type={myType} onClick={func}
    // className={`my-button ${isDanger ? "btn-danger" : "btn-primary"}`}>
    //   {text}
    // </button>
    <button type={myType} onClick={func}
    className={cn(styles.myButton, {
      // если isDanger будет true
      // мы добавим styles.btnDanger
      // если false - класс добавлен не будет
      [styles.btnDanger]:isDanger,
      // каждое следующее условие мы указываем через запятую
      [styles.btnPrimary]:!isDanger
    })}>
      {text}
    </button>
  );
}
export default MyButton;
