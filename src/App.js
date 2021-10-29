import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddOffer from './Pages/AddOffer/AddOffer';
import Details from './Pages/Details/Details';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageOrders from './Pages/ManageOrders/ManageOrders/ManageOrders';
import MyOrders from './Pages/MyOrder/MyOrders/MyOrders';
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
          <Route  path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute  path='/myOrders'>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute  path='/manageOrders'>
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute  path='/addOffer'>
            <AddOffer></AddOffer>
          </PrivateRoute>
          <PrivateRoute  path='/offerDetails/:id'>
            <Details></Details>
          </PrivateRoute>
          <Route  path='/login'>
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
