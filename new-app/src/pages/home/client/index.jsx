import Logo from "../../../asset/Logo(0).png"
import logo from "../../../asset/Logo (1).png"
import logo1 from "../../../asset/Logo (2).png"
import logo2 from "../../../asset/Logo (3).png"
import logo3 from "../../../asset/Logo (4).png"
import logo4 from "../../../asset/Logo (5).png"
import logo5 from "../../../asset/Logo (6).png"
import style from "./index.module.css"
import {Members} from "./data";

const Client =() =>{
    return(
        <>
            <div className={style.clientSection}>
                <p style={{color: "#4d4d4d", fontWeight: "bold", fontSize: "25px", marginBottom: "0"}}>Our Clients</p>
                <p style={{color: "#4d4d4d"}}>We have been working with some Fortune 500+ clients</p>
                <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
                    <img src={Logo} alt="Logo"/>
                    <img src={logo} alt="Logo"/>
                    <img src={logo1} alt="Logo"/>
                    <img src={logo2} alt="Logo"/>
                    <img src={logo3} alt="Logo"/>
                    <img src={logo4} alt="Logo"/>
                    <img src={logo5} alt="Logo"/>
                </div>
            </div>
            <div className={style.midClientSection}>
                <div>
                    <h1>Manage your entire community <span style={{color: "black", display: "block"}}> In a single system</span>
                    </h1>
                    <p style={{fontSize: "11px", color: "#263238"}}>Who is Nextcent suitable for?</p>
                </div>
            </div>
            <div className={style.section}>
                {
                    Members.map((value, index) => (
                        <div key={index}>
                            <img src={value.image}/>
                            <h2>{value.title}</h2>
                            <p>{value.text}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Client;