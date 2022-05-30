import { Route, Routes } from "react-router-dom";
import Header from "./components/HomePage/Header/Header";
import Home from "./components/HomePage/Home/Home";
import Services from "./components/HomePage/Services/Services";
import NotFound from "./components/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/Login/Register/Register";
import Login from "./components/Login/Login/Login";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
// import CheckOut from "./CheckOut/CheckOut";
// import RequireAuth from "./Login/RequireAuth/RequireAuth";
import ForgotPassword from "./components/Login/ForgotPassword/ForgotPassword";
import Checkout from "./components/Checkout/Checkout";
import Dashboard from "./components/Dashboard/Dashboard";
import MyOrders from "./components/Dashboard/MyOrders";
import AddReview from "./components/Dashboard/AddReview";
import Blog from "./components/Blog/Blog";
import MyProfile from "./components/Dashboard/MyProfile";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
import Users from "./components/Users/Users";
import ManageOrders from "./components/Dashboard/ManageOrders";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "./hooks/useAdmin";
import auth from "./firebase.init";

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/myPortfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>

        <Route path="/services" element={<Services></Services>}></Route>
        <Route
          path="/forgotPassword"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
        <Route
          path="/checkout/:productId"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          {!admin && (
            <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
          )}
          {!admin && (
            <Route path="addReview" element={<AddReview></AddReview>}></Route>
          )}

          {admin && <Route path="users" element={<Users></Users>}></Route>}
          {admin && (
            <Route
              path="manageOrders"
              element={<ManageOrders></ManageOrders>}
            ></Route>
          )}
        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
