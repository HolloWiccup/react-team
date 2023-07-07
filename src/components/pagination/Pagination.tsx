import classes from "./Pagination.module.scss"
import Button from "../button/Button.tsx";
const Pagination = () => {
  console.log(classes.buttonsBlock)
  return (
    <div className={classes.pagination}>
      <div className={classes.buttonsBlock}>
        <Button>Next</Button>
        <Button>Prev</Button>
      </div>
      <p>1 из хуевы тучи страниц</p>
    </div>
  );
};

export default Pagination;