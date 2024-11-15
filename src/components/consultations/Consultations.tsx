import { Link } from "react-router-dom";
import styles from "./consultations.module.css";

export default function Consultations() {
  return (
    <div className={styles.gridLessonContainer}>
      <Link to="consultation-1">
        <div>Consultation 1</div>
      </Link>
    </div>
  );
}
