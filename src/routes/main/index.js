import { Route } from 'react-router-dom';
import { Home } from '../../pages/home';

const routes = [
  <Route key={'/'} exact path={'/'} element={<Home/>} />,
  <Route key={'/main'} exact path={'/main'} element={<>Screen main</>} />,
];

export default routes;
