import { useRef } from "react";
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
		<div>
			<form onSubmit={submitHandler}>
				<label htmlFor="">Title</label>
				<input id="title" type="text" ref={titleInputRef} required />
				<button>Add Todo</button>
			</form>
		</div>
	);
};

export default NewTodoForm;