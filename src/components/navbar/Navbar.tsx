import classes from "./Navbar.module.scss";
import Button from "../button/Button.tsx";

const isAuth = true;
const Navbar = () => {
  const btn = isAuth
    ? (<Button className={''}>Logout</Button>)
    : (<Button className={''}>Login</Button>)
  return (
    <div className={classes.navbar}>
      <a href='#'>Home</a>
      {btn}
    </div>
  );
};

export default Navbar;