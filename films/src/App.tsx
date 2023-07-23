import './App.css';
import Main from './components/mainBlock';
import {Routes, Route} from "react-router-dom"
import FilmDetailsCard from './components/filmDetailsCard';
import { PATH } from './utils/defaultValues';
import AuthProvider from './provider/authProvider';
import FavouriteProvider from './provider/favouriteProvider';
import FilterProvider from './provider/filterProvider';
import PaginationProvider from './provider/paginationProvider';

function App(): JSX.Element {
  return (
    <div className="App">
      <AuthProvider>
        <FavouriteProvider>
          <FilterProvider>
            <PaginationProvider>
              <Routes>
                  <Route path={PATH.MAIN} element={<Main/>}/>
                  <Route path={PATH.FILM} element={<FilmDetailsCard actorsPerPage={3}/>}/>
              </Routes>
            </PaginationProvider>
          </FilterProvider>
        </FavouriteProvider>
      </AuthProvider>
    </div>
  )
}

export default App;
