import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Navigation from './Pages/Shared/Navigation';
import './fonts/Inter-Medium.ttf';
import './fonts/Inter-Regular.ttf';
import './fonts/Inter-SemiBold.ttf';
import './fonts/Mulish-Bold.ttf';
import './fonts/Mulish-ExtraBold.ttf';
import './App.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import RequireAuth from './Pages/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReview from './Pages/Dashboard/MyReview';
import History from './Pages/Dashboard/History';
import { ToastContainer } from 'react-toastify';
import OrderList from './Pages/Dashboard/OrderList';
import Users from './Pages/Dashboard/Users';
import Admin from './Pages/Admin/Admin';
import AddService from './Pages/Admin/AddService';
import ManageService from './Pages/Admin/ManageService';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/home" element={<Home />} /> */}
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/dashboard" element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } >
            <Route path='/dashboard/:planID' index element={<MyOrders></MyOrders>}></Route>
            <Route path='review' element={<MyReview></MyReview>}></Route>
            <Route path='history' element={<History></History>}></Route>
          </Route>
          <Route exact path="/admin" element={<Admin />} >
            <Route path='orderlist' index element={<OrderList></OrderList>}></Route>
            <Route path='users' element={<Users></Users>}></Route>
            <Route path='addservice' element={<AddService></AddService>}></Route>
            <Route path='manageservice' element={<ManageService></ManageService>}></Route>
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
        <Footer></Footer>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
