import { useHistory } from "react-router";
import NewTodoForm from "../todos/NewTodoForm";
const NewTodoPage = () => {
  const hist = useHistory();
	const NewTodoHandler = (todoData) => {
		fetch(
			"https://first-react-project-371a6-default-rtdb.firebaseio.com/todos.json",
			{
				method: "POST",
				body: JSON.stringify(todoData),
				headers: {
					"Content-Type": "application/json",
				},
			}
		).then(() => {
			hist.replace("/");
		});
	};
	return (
		<div>
			<NewTodoForm onAddNewTodo={NewTodoHandler} />
		</div>
	);
};

export default NewTodoPage;
