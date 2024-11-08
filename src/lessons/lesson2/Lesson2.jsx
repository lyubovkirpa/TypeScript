import reactImg from "../../assets/reactImg.jpg";
import MyButton from "../../components/myButton/MyButton";
import "./lesson2.css";

function Lesson2() {
  const element = <li>Element in variable</li>;
  const text = "Text for JSX tag";
  const company = "Facebook";

  const user = {
    firstName: "Brendan",
    lastName: "Eich",
  };

  function formatUser(name) {
    return name.firstName + " " + name.lastName;
  }

  const isLoggedIn = true;

  return (
    <div className="lesson-container">
      <h3>Lesson2</h3>
      <p>React JSX components</p>
      <img className="react-img" src={reactImg} alt="" />
      <ul>
        <li>Simple text</li>
        {element}
        <li>{text}</li>
        <li>REact was created by {company}</li>
        <li>{formatUser(user)} is creator of JS</li>
        <li>User {isLoggedIn ? 'is': 'is Not'} in the system</li>
      </ul>
      <MyButton/>
    </div>
  );
}

export default Lesson2;
