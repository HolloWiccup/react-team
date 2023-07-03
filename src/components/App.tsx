import Modal from "./modal/Modal.tsx";
import {Login} from "./modal/login/Login.tsx";
import {Pagination} from "./pagination/Pagination.tsx";

const openModal = false;

function App() {
  return (
    <div className="app">
      {openModal &&
				<Modal>
					<Login/>
				</Modal>}
      <Pagination />
    </div>
  );
}

export default App;
