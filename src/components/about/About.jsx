import './About.css'

function About (){
    return (
        <div className="about">
            <div className="about-img-div">
                <img src="/about-photo.svg" alt="about" />
            </div>
            <div className="about-description">
                <h2 className='title'>
                    What we do?
                </h2>
                <p>
                    Covid 19 positive or Pneumonitis 
                    patient will be treated at home as per doctor 
                    order by GNC certified nursing staff.
                </p>
            </div>

        </div>
    )
}

export default About