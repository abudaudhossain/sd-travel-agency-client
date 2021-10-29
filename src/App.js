import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
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
          <Route  path='/myOrders'>
            <MyOrders></MyOrders>
          </Route>
          <Route  path='/manageOrders'>
            <ManageOrders></ManageOrders>
          </Route>
          <Route  path='/addService'>
            <AddService></AddService>
          </Route>
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
