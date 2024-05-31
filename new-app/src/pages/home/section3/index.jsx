import image from "../../../asset/pana.png"
import style from "./index.module.css"

const Section3 = () =>{
    return(
        <>
            <div className={style.unseen1}>
                <div className={style.image}>
                    <img src={image} alt="mobile-login"/>
                </div>
                <div style={{gap: "16px", padding: "16px 48px"}}>
                    <h2>How to design your site footer like <span style={{color: "black", display: "block"}}>we did</span>
                    </h2>
                    <p style={{fontSize: "11px", color: "#263238"}}>Donec a eros justo. Fusce egestas tristique ultrices. Nam
                        tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna.
                        Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula
                        leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
                        urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis
                        est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id
                        gravida.</p>
                    <button style={{backgroundColor: "#4caf4f", color: "white", border: "none", padding: "8px"}}>Learn More
                    </button>
                </div>
            </div>
        </>
    )
}
export default Section3