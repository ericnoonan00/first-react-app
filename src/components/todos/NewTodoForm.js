import { useRef } from "react";
import classes from './NewTodoForm.module.css';

const NewTodoForm = (props) => {

	const titleInputRef = useRef();

	const submitHandler = (event) => {
		//prevents the browser from reloading the page
		event.preventDefault();

		//grabs the entered data using the useRef() hook
		const enteredTitle = titleInputRef.current.value;

		//creates a new todo object with the data from useRef()
		const newTodo = {
			title: enteredTitle,
		}

		//passes the new Todo object back to the newTodo page to be posted to the database
		props.onAddNewTodo(newTodo);
	}

	return (
		<section className={classes.formSection}>
			<form onSubmit={submitHandler} className={classes.formContent}>
				<label htmlFor="title" className={classes.formLabel}>Title</label>
				<input id="title" type="text" ref={titleInputRef} required className={classes.formInput} />
				<button className={classes.formSubmit}>Add Todo</button>
			</form>
		</section>
	);
};

export default NewTodoForm;