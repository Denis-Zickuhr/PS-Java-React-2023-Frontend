import { Route } from 'react-router-dom';
import { Home } from '../../pages/home';
import { Main } from '../../pages/main';

const routes = [
  <Route key={'/'} exact path={'/'} element={<Home/>} />,
  <Route key={'/main'} exact path={'/main'} element={<Main/>} />,
];

export default routes;
