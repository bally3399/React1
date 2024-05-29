import logo from "../../asset/logo.png"
import instar from "../../asset/insta.png"
import web from "../../asset/web.png"
import twitter from "../../asset/twitter.png"
import youtube from "../../asset/youtube.png"
import send from "../../asset/send.png"
import style from "./index.module.css"

const Footer = () =>{
    return(
        <>
            <div className={style.footer}>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={logo} alt="logo"/>
                        <h2 style={{color: "#ffffff", fontSize: "30px"}}>Nexcent</h2>
                    </div>
                    <p>Copyright © 2020 Nexcent ltd. <span style={{display: "block"}}>All rights reserved</span></p>
                <div>
                    <img src={instar} alt="icon"/>
                    <img src={web} alt="icon"/>
                    <img src={twitter} alt="icon"/>
                    <img src={youtube} alt="icon"/>
                </div>
            </div>
            <div className={style.footer1}>
                <div>
                    <div><h4>Company</h4></div>
                    <p>About us</p>
                    <p>Blog</p>
                    <p>Contact us</p>
                    <p>Pricing</p>
                    <p>Testimonials</p>
                </div>
                <div>
                    <div><h4>Support</h4></div>
                    <p>Help center</p>
                    <p>Terms of service</p>
                    <p>Legal</p>
                    <p>Privacy policy</p>
                    <p>Status</p>
                </div>
                <div>
                    <h4>Stay up to date</h4>
                    <label>
                        <input className={style.input} placeholder="Your email address" style={{background: 'transparent', border: 'none'}}/>
                        <img src={send}  alt="send"/>
                    </label>
                </div>
            </div>
            </div>
        </>
    )
}
export default Footer;