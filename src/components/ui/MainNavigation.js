import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<section className={classes.logo}>
				<h1>To Do App</h1>
			</section>
			<nav className={classes.nav}>
				<ul className={classes.navList}>
					<li>
						<Link to="/" className={classes.navLink}>
							All Todos
						</Link>
					</li>
					<li>
						<Link to="/new-todo" className={classes.navLink}>
							New Todo
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
