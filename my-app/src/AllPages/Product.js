import { Link, Outlet, useNavigate } from "react-router-dom";

const Product=()=>{
    const navigate=useNavigate();
    return<>
    <div>
    <input type="Search" placeholder="Search for Products..."/>
    {/* <button onClick={()=>navigate(-1)}>Goback</button> */}
    </div>
    <nav>
        <Link to='feature'>Feature</Link>
        <Link to='new'>New</Link>
    </nav>
    
    <Outlet/>
    <button onClick={()=>navigate(-1)}>Go back to Home</button>

    </>
}
export default Product;