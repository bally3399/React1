import image from "../../../asset/rafikiimg.png"
import style from "./index.module.css"

const Section1 =() =>{
    return(
        <>
            <div className={style.unseen} style={{backgroundColor: "#f5f7fa"}}>
                <div className={style.unseenimg} >
                    <img src={image} alt="Frame"/>
                </div>
                <div className={style.unseentext}>
                    <h2>The unseen of spending three years at Pixelgrade</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan
                        quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                        tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar,
                        aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <button>Learn More</button>
                </div>
            </div>

        </>
    )
}
export default Section1