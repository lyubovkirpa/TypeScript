import { useFormik } from "formik";
import MyButton from "../../components/myButton/MyButton";
import styles from "./lesson12.module.css";

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export default function Lesson12() {
  //
  const formik = useFormik({
    //начальные значения для формы
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    } as IFormValues,
    //действие в форме по нажатию на кнопку с типом submit, вместо values придут значения с формы
    onSubmit: (values) => {
      console.log(values);
    },
  });

//   console.log(formik);
  

  return (
    <div className="lesson-container">
      <h2>Formik</h2>
      <form className={styles.form}>
        <input type="text" placeholder="имя" name="firstName" />
        <input type="text" placeholder="фамилия" name="lastName" />
        <input type="email" placeholder="email" name="email" />
        <MyButton myType="submit" text="отправить" />
      </form>
    </div>
  );
}
