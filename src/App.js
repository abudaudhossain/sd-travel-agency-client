import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddOffer from './Pages/AddOffer/AddOffer';
import Details from './Pages/Details/Details';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageBooking from './Pages/ManageBooking/ManageBooking/ManageBooking';
import MyBookings from './Pages/MyBookings/MyBookings/MyBookings';
import SearchPackages from './Pages/SearchPackages/SearchPackages';

import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/packages/:location'>
            <SearchPackages />
          </Route>
          <PrivateRoute path='/myOrders'>
            <MyBookings></MyBookings>
          </PrivateRoute>
          <PrivateRoute path='/manageBooking'>
            <ManageBooking></ManageBooking>
          </PrivateRoute>
          <PrivateRoute path='/addOffer'>
            <AddOffer></AddOffer>
          </PrivateRoute>
          <PrivateRoute path='/offerDetails/:id'>
            <Details></Details>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
