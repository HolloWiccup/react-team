import './modal.css'

const Modal = () => {
  return (
    <div className="modal">
      <form className="content">
        <h2>Login form</h2>
        <input type="text" />
        <input type="text" />
        <button type="submit" >Login</button>
      </form>
    </div>
  );
};

export default Modal;