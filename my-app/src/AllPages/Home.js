import { useNavigate } from "react-router-dom";

const Home=()=>{
    const navigate=useNavigate();
    return <>
    <div>Home</div>
    <button onClick={()=>navigate('products')}>Go to Products</button>
    </>
}
export default Home;