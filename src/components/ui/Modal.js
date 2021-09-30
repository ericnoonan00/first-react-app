import classes from './Modal.module.css';

const Modal = (props) => {
	const cancelHandler = () => {
		props.onCancel();
	};
	const confirmHandler = () => {
		props.onConfirm();
	};

	return (
		<div className={classes.modal}>
			<p className={classes.modalText}>Are You Sure?</p>
			<button
				className={[classes.cancel, classes.modalBtn].join(" ")}
				onClick={cancelHandler}
			>
				Cancel
			</button>
			<button
				className={[classes.confirm, classes.modalBtn].join(" ")}
				onClick={confirmHandler}
			>
				Confirm
			</button>
		</div>
	);
};

export default Modal;
