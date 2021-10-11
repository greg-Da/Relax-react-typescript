import './App.css';
import ConfirmEmail from './pages/InscriptionConnexion/ConfirmEmail/ConfirmEmail';
import Connexion from './pages/InscriptionConnexion/Connexion/Connexion';
import Home from './pages/Home'
import DashboardHotel from './pages/hotel/Dashboard/DashboardHotel';
import GestionPersonnel from './pages/hotel/Dashboard/parameters/gestion_perso/GestionPersonnel';
import PrestaFav from './pages/hotel/Dashboard/parameters/gestion_perso/PrestaFav';
import InscriptionHotel from './pages/hotel/InscriptionHotel/InscriptionHotel';
import Test from './pages/TestComponent'
import TypeInscription from './pages/InscriptionConnexion/TypeInscription/TypeInscription';
import Welcome from './pages/InscriptionConnexion/Welcome/Welcome';
import NotFound from './pages/NotFound';
import Spa from './pages/static/Spa';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GeneralParamsHotel from './pages/hotel/Dashboard/parameters/compte/GeneralParamsHotel';
import HomeHotel from './pages/hotel/HomeHotel/HomeHotel';

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
          <Route exact path="/hotel/general">
            <GeneralParamsHotel />
          </Route>
          <Route exact path="/hotel">
            <HomeHotel />
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

