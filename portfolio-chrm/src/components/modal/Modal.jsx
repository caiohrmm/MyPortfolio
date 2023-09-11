import styles from './Modal.module.css'

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, title, description, setOpen }) => {
  if (isOpen) {
    return (
      <div className={styles.background}>
        <div className={styles.modal}>
          <h2>{title}</h2>
          <p>{description}</p>
          <button onClick={() => setOpen(!isOpen)} className={styles.button}>Fechar</button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Modal;
