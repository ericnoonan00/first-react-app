import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const MainNavigation = () => {

	const hamburgerHelper = () => {
		const NL = document.getElementsByTagName("ul").item(0);
		if (NL.style.display === 'flex') NL.style.display = "none";
		else NL.style.display = "flex";
	}

	return (
		<header className={classes.header}>
			<section className={classes.logo}>
				<h1>To Do App</h1>
			</section>
			<nav className={classes.nav}>
				<ul className={classes.navList} inputid="navList">
					<li>
						<Link
							to="/"
							inputid={classes.allTodosLink}
							className={[classes.navLink, "btn"].join(" ")}
							onClick={hamburgerHelper}
						>
							All Todos
						</Link>
					</li>
					<li>
						<Link
							to="/new-todo"
							inputid={classes.newTodoLink}
							className={[classes.navLink, "btn"].join(" ")}
							onClick={hamburgerHelper}
						>
							New Todo
						</Link>
					</li>
				</ul>
			</nav>
			<div className={classes.hamburgerMenu} onClick={hamburgerHelper}>
				<HamburgerMenu />
			</div>
		</header>
	);
};

export default MainNavigation;
