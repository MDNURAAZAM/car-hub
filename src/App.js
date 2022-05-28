import { Route, Routes } from "react-router-dom";
import Header from "./components/HomePage/Header/Header";
import Home from "./components/HomePage/Home/Home";
import Services from "./components/HomePage/Services/Services";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        {/* <Route path="/login" element={<Login></Login>}></Route>
  <Route path="/register" element={<Register></Register>}></Route>
  <Route path="/blog" element={<Blog></Blog>}></Route>
  <Route path="/about" element={<About></About>}></Route> */}
        <Route path="/services" element={<Services></Services>}></Route>
        {/* <Route
    path="/forgotPassword"
    element={<ForgotPassword></ForgotPassword>}
  ></Route>
  <Route
    path="/checkout/:productId"
    element={
      <RequireAuth>
        <CheckOut></CheckOut>
      </RequireAuth>
    }
  ></Route> */}

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
