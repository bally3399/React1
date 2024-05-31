import Icon from "../../../asset/icon.png"
import Icon1 from "../../../asset/icon (3).png"
import Icon2 from "../../../asset/icon (4).png"
import Icon3 from "../../../asset/icon (5).png"
import style from "./index.module.css"

const Section2 =() =>{
    return(
        <>
            <div className={style.helper} style={{display: "flex", gap: "16px"}}>
                <div className={style.left}>
                    <h2>Helping a local <span style={{color: "#4caf4f", display: "block"}}>business reinvent itself</span>
                    </h2>
                    <p style={{fontSize: "11px", color: "#263238"}}>We reached here with our hard work and dedication</p>
                </div>
                <div className={style.right}>
                    <div className={style.up} style={{display: "flex", gap: "115px"}}>
                        <div style={{display: "flex", gap: "10px"}}>
                            <img style={{height: "50px", marginTop: "15px"}} src={Icon} alt="icon"/>
                            <div>
                                <h2>2,245,341 <span style={{fontSize: "14px", color: "#263238",display: "flex", flexDirection: "column"}}>Members</span></h2>
                            </div>
                        </div>
                        <div style={{display: "flex", gap: "10px"}}>
                            <img style={{height: "50px", marginTop: "15px"}} src={Icon1} alt="icon"/>
                            <div>
                                <h2>46,328 <span style={{fontSize: "14px", color: "#263238",display: "flex", flexDirection: "column"}}>Clubs</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className={style.down} style={{display: "flex", gap: "120px"}}>
                        <div style={{display: "flex", gap: "10px"}}>
                            <img style={{height: "50px", marginTop: "15px"}} src={Icon2} alt="icon"/>
                            <div>
                                <h2>828,867 <span style={{fontSize: "14px", color: "#263238",display: "flex", flexDirection: "column"}}>Event Bookings</span></h2>
                            </div>
                        </div>
                        <div style={{display: "flex", gap: "10px"}}>
                            <img style={{height: "50px", marginTop: "15px"}} src={Icon3} alt="icon"/>
                            <div>
                                <h2>1,926,436 <span style={{fontSize: "14px", color: "#263238",display: "flex", flexDirection: "column"}}>Payments</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Section2