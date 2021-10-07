import './App.css';
import ConfirmEmail from './pages/ConfirmEmail/ConfirmEmail';
import Connexion from './pages/Connexion/Connexion';
import Home from './pages/Home'
import DashboardHotel from './pages/hotel/Dashboard/DashboardHotel';
import GestionPersonnel from './pages/hotel/Dashboard/parameters/gestion_perso/GestionPersonnel';
import PrestaFav from './pages/hotel/Dashboard/parameters/gestion_perso/PrestaFav';
import InscriptionHotel from './pages/hotel/InscriptionHotel/InscriptionHotel';
import Test from './pages/TestComponent'
import TypeInscription from './pages/TypeInscription/TypeInscription';
import Welcome from './pages/Welcome/Welcome';
import NotFound from './pages/NotFound';
import Spa from './pages/Spa';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (

    <Router>
        <Switch>
          <Route path="/connexion">
            <Connexion />
          </Route>
          <Route path="/confirm-email">
            <ConfirmEmail />
          </Route>

          <Route path="/welcome">
            <Welcome />
          </Route>

          <Route path="/type-inscription">
            <TypeInscription />
          </Route>

          <Route exact path="/hotel/inscription">
            <InscriptionHotel />
          </Route>
          <Route exact path="/hotel/dashboard">
            <DashboardHotel />
          </Route>
          <Route exact path="/hotel/gestion-personnel">
            <GestionPersonnel />
          </Route>
          <Route exact path="/hotel/presta-fav">
            <PrestaFav />
          </Route>

          <Route path="/test">
            <Test />
          </Route>

          <Route path="/spa">
            <Spa />
          </Route>


          

          <Route exact path="/">
            <Home />
          </Route>

          <Route>
            <NotFound />
          </Route>
          
        </Switch>
    </Router>

  );
}

export default App;

