import Navbar from "./navbar/Navbar.tsx";
import Sidebar from "./sidebar/Sidebar.tsx";


function App() {
  return (
    <div className='app' >
      <Navbar />
      <div className='content-page'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
