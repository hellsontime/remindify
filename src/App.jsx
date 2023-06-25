import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/styles/sass/main.scss';

import {
  LOGIN_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
  RESTORE_PAGE_ROUTE,
  TODO_PAGE_ROUTE
} from './routes/PageRoutes';

import UserContext from './context/UserContext';

import NotFoundComponent from './components/NotFoundComponent';
import LoginComponent from './components/authorization/LoginComponent';
import RegisterComponent from './components/authorization/RegisterComponent';
import RestoreComponent from './components/authorization/RestoreComponent';
import ReminderComponent from './components/ReminderComponent';

function App() {
  return (
    <UserContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path={TODO_PAGE_ROUTE} element={<ReminderComponent />} />
          <Route path={LOGIN_PAGE_ROUTE} element={<LoginComponent />} />
          <Route path={REGISTER_PAGE_ROUTE} element={<RegisterComponent />} />
          <Route path={RESTORE_PAGE_ROUTE} element={<RestoreComponent />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
