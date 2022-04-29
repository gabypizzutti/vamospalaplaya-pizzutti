import { Link } from "react-router-dom";

const Checkout = () => {
    return(
       <Link to="/Cart"><button className="btnCheckout">Checkout</button></Link>
    )
}

export default Checkout;