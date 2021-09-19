import { Route, Switch } from 'react-router-dom' 
import AllTodosPage from "./components/pages/AllTodosPage";
import NewTodoPage from "./components/pages/NewTodoPage";
import MainNavigation from './components/ui/MainNavigation';

function App() {
	return (
		<div>
			<MainNavigation />
			<Switch>
				<Route path='/' exact={true}>
					<AllTodosPage />
				</Route>				
				<Route path='/new-todo'>
					<NewTodoPage />
				</Route>				
			</Switch>
		</div>
	);
}

export default App;