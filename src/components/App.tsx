import Modal from "./modal/Modal.tsx";
import { Login } from "./modal/login/Login.tsx";

function App() {
  return (
    <div className="app">
      <Modal>
        <Login />
      </Modal>
    </div>
  );
}

export default App;
