import TodoList from "../todos/TodoList";
import { useState, useEffect } from "react";

const AllTodosPage = (props) => {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedData, setLoadedData] = useState([]);

	useEffect(() => {
		fetch(
			"https://first-react-project-371a6-default-rtdb.firebaseio.com/todos.json"
		)
			.then((repsonse) => {
				return repsonse.json();
			})
			.then((data) => {
				const todos = [];
				for (const key in data) {
					const todo = {
						id: key,
						...data[key],
					};
					todos.push(todo);
				}
        setLoadedData(todos);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return (
			<div>
				<h2>Loading...</h2>
			</div>
		);
	}
	return (
		<div>
			<h1>To Do list</h1>
			<TodoList todos={loadedData} />
		</div>
	);
};

export default AllTodosPage;  
