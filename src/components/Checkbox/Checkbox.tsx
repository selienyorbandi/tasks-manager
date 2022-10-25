import styles from "./Checkbox.module.css";

function Checkbox({ isChecked }: { isChecked: boolean }) {
  return (
    <label className={styles.CompletedCheckbox}>
      <input type="checkbox" name="completedCheckbox" defaultChecked={isChecked} />
    </label>
  );
}

export default Checkbox;
