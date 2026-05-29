import './About.css'

const aboutList = [
    {
        "id":"1",
        "name":"Facilities of blood sugar"
    },
    {
        "id":"2",
        "name":"B.P.  Measurement"
    },
    {
        "id":"3",
        "name":"Spo2 Measurement"
    },
    {
        "id":"4",
        "name":"Ryle's tube insertion"
    },
    {
        "id":"5",
        "name":"Catheterisation"
    },
    {
        "id":"6",
        "name":"Dressing facilities are available 24*7"
    },
]

function About (){
    return (
        <div className="about">
            <div className="about-img-div">
                <img src="/about-photo.svg" alt="about" />
            </div>
            <div className="about-description">
                <div className='title-div'>
                    <h2 className='title'>
                        What we do?
                    </h2>
                    <img src="/about-line.png" alt="green-line" />
                </div>
                <p className='p-main'>
                    Covid 19 positive or Pneumonitis 
                    patient will be treated at home as per doctor 
                    order by GNC certified nursing staff.
                </p>
                <div className='list-cover'>
                    {
                        aboutList.map((value)=>(
                            
                            <div key={value.id} className='list-div'>
                                <img src="/virus-about.png" alt="virus" />
                                <p className="p-main">
                                    {value.name}
                                </p>
                            </div>
                            
                        ))
                    }
                </div>
                <div className='contact-div'>
                    <img src="/ellipse.png" alt="ellipse" className='ellipse-abs'/>
                    Contact us
                    <img src="/arrow.png" alt="arrow" className='arrowImg'/>
                </div>
            </div>

        </div>
    )
}

export default About