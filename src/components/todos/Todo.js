import { useState, useEffect } from "react";
// import { useHistory } from "react-router";

import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";

const Todo = (props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [loadedData, setLoadedData] = useState([]);
	// const hist = useHistory();

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
		// console.log(obj)

		for (const key in obj) {
			var value = obj[key];
			// console.table(value);
			if (props.title === value.title) {
				console.log(key);
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
			"https://first-react-project-371a6-default-rtdb.firebaseio.com/todos.json"
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setLoadedData(data);
				delete loadedData[valueID];

				fetch(
					"https://first-react-project-371a6-default-rtdb.firebaseio.com/todos.json",
					{
						method: "DELETE",
					}
				).then(() => {
					for (const key in loadedData) {
						// console.log(JSON.stringify(loadedData[key]));

						fetch(
							"https://first-react-project-371a6-default-rtdb.firebaseio.com/todos.json",
							{
								method: "POST",
								body: JSON.stringify(loadedData[key]),
								header: {
									"Content-Type": "application/text",
								},
							}
						).then(() => {
							window.location.reload(true);
							setModalIsOpen(false);
						});
					}
				});
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
