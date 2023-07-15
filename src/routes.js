import { BrowserRouter, Routes as Route } from 'react-router-dom';
import Main from './routes/main';

const Routes = () => {

    return (
        <BrowserRouter>
          <Route>
            {/* Define route files for having scopes: eg. admin, public, user, etc. */}
            {Main}
          </Route>
        </BrowserRouter>
    );
  };
  

export default Routes;