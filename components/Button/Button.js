import styles from './Button.module.scss';

export default function Button({label}) {
  return (
    <button
        className={styles['button']}
    >
      <a href="/">{label}</a>
    </button>
  );
};
