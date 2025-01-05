import styles from './Button.module.scss';

export default function Button({label}) {
  return (
      <a href="/">
        <button className={styles['button']}>{label}</button>
      </a>
  );
};
