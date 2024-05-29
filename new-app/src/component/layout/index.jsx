import Navbar from "../navbar";
import {Outlet} from "react-router-dom";
import Footer from "../footer";

const Layout = () =>{
    return(
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
export default Layout