import { useState, useEffect } from "react";
// import { useHistory } from "react-router";

import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";

const Todo = (props) => {
	const databaseURL =
		"https://first-react-project-371a6-default-rtdb.firebaseio.com/todos.json";
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
				setLoadedData(data);
			});
	}, []);

	const getIDviaTitle = (obj, titleQuery) => {
		for (const key in obj) {
			var value = obj[key];
			if (props.title === value.title) {
				// console.log(key);
				return key;
			}
		}
	};

	const deleteButtonHandler = () => {
		setModalIsOpen(true);
	};

	/**************************
	 * 1. loadedData is already set to the whole DB
	 * 2. delete the prop that you want to delete
	 * 3. delete the whole database
	 * 4. post the entire database back to firebase
	 **************************/
	const deleteTodoHandler = async () => {
		const valueID = getIDviaTitle(loadedData, props.title);

		delete loadedData[valueID];
		await deleteWholeDB();
		await postWholeDB(loadedData);
		await window.location.reload();
		
	};

	const deleteWholeDB = async () =>
		await fetch(databaseURL, {
			method: "DELETE",
		});

	const postWholeDB = async (LD) => {
		for (const key in LD) {
			await fetch(databaseURL, {
				method: "POST",
				body: JSON.stringify(LD[key]),
				header: {
					"Content-Type": "application/text",
				},
			});
		}
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
