import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import PetsState from './context/Pets/PetsState'

import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Auth from "./routes/Auth";
import UsersState from './context/UsersState';
import Public from './routes/Public';

function Router() {
  return (
    <>

      <PetsState>
        <UsersState>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={ <Layout /> }>
                <Route
                  index
                  element={
                    <Public component={Home} />
                  }
                />

                <Route
                  path='registro'
                  element={
                    <Auth component={ Register } />
                  }
                />

                <Route
                  path='login'
                  element={
                    <Auth component={ Login } />
                  }
                />

              </Route>
            </Routes>
          </BrowserRouter>
        </UsersState>


      </PetsState>

    </>
  );
}

export default Router;
