import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.linkActive : "")}
        to={"/"}
      >
        Lessons
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.linkActive : "")}
        to={"home-works"}
      >
        Home works
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.linkActive : "")}
        to={"consultations"}
      >
        Consultations
      </NavLink>
    </header>
  );
}
