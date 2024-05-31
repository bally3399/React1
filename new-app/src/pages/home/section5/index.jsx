import { Member } from "./data";

const Section5 = () => {
    return (
        <div style={{ width: "100%" }}>
            <div style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
                padding: "29px",
                color: "#595959"
            }}>
                <p style={{ fontSize: "58px", textAlign: "center" }}>Caring is the new marketing<br /></p>
                <p style={{ marginTop: "-25px", fontSize: "26px", textAlign: "center" }}>
                    The Nexcent blog is the best place to read about the latest membership insights, <br />
                    trends and more. See who's joining the community, read about how our community<br />
                    are increasing their membership income and lot's more.
                </p>
            </div>
            <div>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    {Member.map((value, index) =>
                        <div key={index} style={{marginBottom: "70px", position: "relative", width: "30%", textAlign: "center" }}>
                            <img src={value.image} alt={""} style={{ width: "100%", height: "auto", borderRadius: "10px" }} />
                            <div style={{
                                position: "absolute",
                                bottom: "-80px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                background: "#ffffff",
                                color: "black",
                                borderRadius: "5px",
                                width: "350px",
                                marginBottom: "10px"
                            }}>
                                <h1 style={{
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    padding: "30px",
                                    fontFamily: "inter, sans-serif",
                                }}>{value.text}</h1>
                                <h4 style={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    fontFamily: "inter, sans-serif",
                                    color: "#4caf4f"
                                }}>{value.link} →</h4>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Section5;
