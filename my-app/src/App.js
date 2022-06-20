import {Routes,Router, Route} from 'react-router-dom';
import './index.css'
// import About from './Components/About';
// import Home from './Components/Home';
// import Navbar from './Components/Navbar';
// import Contact  from './Components/Contact';
// import Login from './Components/Login';
// import OrderSummery from './Components/OrderSummery';

// return(
  //   <>
  //   <Navbar/>
  //   {/* <Contact/> */}
  //   <Routes>
  //     <Route path='/' element={<Home/>}></Route>
  //     <Route path='about' element={<About/>}></Route>
  //     <Route path='contact' element={<Contact/>}></Route>
  //     <Route path='login' element={<Login/>}></Route>
  //     <Route path='ordersummery' element={<OrderSummery/>}></Route>
  //   </Routes>
  //   </>

  // )
import Home from './AllPages/Home';
import About from './AllPages/About';
import Login from './AllPages/Login';
import Contact from './AllPages/Contact';
import Navbar from './AllPages/Navbar';
import Product from './AllPages/Product';
import Feature from './AllPages/Feature';
import New from './AllPages/New';
import Users from './AllPages/Users';
import UserDetails from './AllPages/UserDetails';
import Data from './AllPages/Data';
import Logout from './AllPages/Logout';
// import NoMatch from './react-router-dom';
function App(){
  
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='data' element={<Data/>}></Route>
      <Route path='logout' element={<Logout/>}></Route>
      <Route path='products' element={<Product/>}>
        <Route path='feature' element={<Feature/>}></Route>
        <Route path='new' element={<New/>}></Route>
      </Route>
      <Route path='users' element={<Users/>}></Route>
      <Route path='users/:userId' element={<UserDetails/>}></Route>
    </Routes>
    </>

  )
};
// import Home from './Form.js/Home';
// import Login from './Form.js/Login';
// import Navbar from './Form.js/Navbar';

// const App=()=>{
//   return(
//     <>
//     <Navbar/>
//     {/* <Home/> */}
//     <Routes>
//       <Route path='/' element={<Home/>}></Route>
//       <Route path='login' element={<Login/>}></Route>
//     </Routes>
//     </>
//   )
// }
export default App;