import classes from "./HamburgerMenu.module.css";

const HamburgerMenu = (props) => {
	return (
		<div className={classes.hamburgerMenu} onClick={props.onBurger}>
			<div className={classes.hamBar1}></div>
			<div className={classes.hamBar2}></div>
			<div className={classes.hamBar3}></div>
		</div>
	);
};

export default HamburgerMenu;
