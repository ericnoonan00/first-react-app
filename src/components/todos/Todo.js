import { useState, useEffect } from "react";

import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";

const Todo = (props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [loadedData, setLoadedData] = useState([]);

	useEffect(() => {
		fetch(
			"https://first-react-project-371a6-default-rtdb.firebaseio.com/todos.json"
		)
			.then((repsonse) => {
				return repsonse.json();
			})
			.then((data) => {
				//CREATES AN ARRAY OF DATA INSTEAD OF JUST AN OBJECT
				// const todos = [];
				// for (const key in data) {
				// 	const todo = {
				// 		id: key,
				// 		...data[key],
				// 	};
				// 	todos.push(todo);
				//
				setLoadedData(data);
			});
	}, []);

	const getIDviaTitle = (obj, titleQuery) => {
		// console.log(obj)

		for (const key in obj) {
			var value = obj[key];
			// console.table(value);
			if (props.title === value.title) {
				return key;
			}
		}
	};

	const deleteButtonHandler = () => {
		setModalIsOpen(true);
	};

	const deleteTodoHandler = () => {
		const valueID = getIDviaTitle(loadedData, props.title);

		fetch(
			`https://first-react-project-371a6-default-rtdb.firebaseio.com/todos.json/${valueID}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/text",
				},
				mode: "no-cors",
			}
		)
			.then((response) => {
				if (!response.ok) throw new Error();
				return response.json();
			})
			.then((data) => {
				console.log("deleted");
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const closeModalHandler = () => {
		setModalIsOpen(false);
	};

	return (
		<li className="card">
			<h2>{props.title}</h2>
			<div className="actions">
				<button className="btn" onClick={deleteButtonHandler}>
					Delete
				</button>
			</div>
			{modalIsOpen ? (
				<Modal
					onCancel={closeModalHandler}
					onConfirm={deleteTodoHandler}
				/>
			) : null}
			{modalIsOpen ? <Backdrop onCancel={closeModalHandler} /> : null}
		</li>
	);
};

export default Todo;
