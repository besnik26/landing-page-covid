import "./Hero.css"


function Hero() {
    return (
        <div className="hero">
            <div className="hero-description">
                <div className="alert-div">
                    <img src="/alert.svg" alt="alert" />
                    <div className="alert">COVID-19 ALERT</div>
                </div>

                <h1>Together we fight<br></br>COVID-19</h1>
                <p className="p-hero">
                    Seque empowers you to get more done with intense focus and zero interruptions.
                    Seque empowers you to get more done with intense focus and zero interruptions.
                </p>
                <button className="hero-btn">Let us help</button>
            </div>

            <div className="hero-img">
                <img src="/hero-img.svg" alt="hero-doctor-image" />
            </div>
        </div>
    )
}

export default Hero