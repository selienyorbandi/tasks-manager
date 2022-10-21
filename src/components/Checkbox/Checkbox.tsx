import styles from "./Checkbox.module.css";

function Checkbox() {
  return (
    <label className={styles.CompletedCheckbox}>
      <input type="checkbox" name="completedCheckbox"/>
    </label>
  );
}

export default Checkbox;
