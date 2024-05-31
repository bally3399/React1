import image from "../../../asset/image 9.png"
import Logo from "../../../asset/Logo(0).png"
import Logo1 from "../../../asset/Logo (1).png"
import Logo2 from "../../../asset/Logo (2).png"
import Logo3 from "../../../asset/Logo (3).png"
import Logo4 from "../../../asset/Logo (4).png"
import Logo5 from "../../../asset/Logo (5).png"
import image1 from "../../../asset/Vector.png"
import style from "./index.module.css"

const Section4 = () =>{
    return(
        <>
            <div className={style.customerspace} style={{display: "flex", gap: "50px", backgroundColor: "#f5f7fa"}}>
                <div className={style.space}>
                    <img src={image} alt="image"/>
                </div>
                <div className={style.space1}>
                    <p style={{fontSize: "11px", color: "#263238"}}>Maecenas dignissim justo eget nulla rutrum molestie.
                        Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus
                        sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit.
                        Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed
                        augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                        pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
                        Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
                        dignissim finibus ac sit amet magna.</p>
                    <div>
                        <h2>Tim Smith</h2>
                        <p style={{fontSize: "11px", color: "#263238"}}>British Dragon Boat Racing Association</p>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "space-between"}}>
                        <div style={{gap: "60px", display: "flex"}}>
                            <img style={{height:"30px", marginTop: "10px"}} src={Logo} alt="Logo"/>
                            <img style={{height:"30px", marginTop: "10px"}} src={Logo1} alt="Logo"/>
                            <img style={{height:"30px", marginTop: "10px"}} src={Logo2} alt="Logo"/>
                            <img style={{height:"30px", marginTop: "10px"}} src={Logo3} alt="Logo"/>
                            <img style={{height:"30px", marginTop: "10px"}} src={Logo4} alt="Logo"/>
                            <img style={{height:"30px", marginTop: "10px"}} src={Logo5} alt="Logo"/>
                        </div>
                        <div style={{display: "flex", gap: "30px"}}>
                            <p>Meet all customers</p>
                            <img style={{height:"10px",marginTop: "20px"}} src={image1} alt="Vector"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Section4