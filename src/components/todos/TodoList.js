import classes from './TodoList.module.css'
import Todo from './Todo';


const TodoList = (props) => {
  return (
    <ul className={classes.todoList}>
      {props.todos.map((todo) => {
        return <Todo    //hey dumbass make sure you give map a return
          key={todo.id}
          title={todo.title}
        />
      })}
    </ul>
  );
}

export default TodoList;