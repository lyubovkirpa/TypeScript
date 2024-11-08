
//* без деструктуризации
// import './myButton.css'

// function MyButton(props) {
//   console.log(props);  
//   return <button onClick={props.func} className='my-button'>{props.text}</button>;
// }
// export default MyButton;



//* с деструктуризацией
import './myButton.css'

function MyButton({func, isDanger=false, text='Click' }) {
  console.log(isDanger);
  
  return <button onClick={func} className={`my-button ${isDanger ? 'btn-danger': ''}`}>{text}</button>;
}

export default MyButton;
