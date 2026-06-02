import './symptoms.css'

function Symptoms (){
    return (
        <div className="symptoms">
            <div className='title-div'>
                <h1 className="title">Symptoms</h1>
                <img src="/prevention-line.png" alt="green-line" />
            </div>
            <p className="p-main">
                COVID-19 affects different people in different ways. Most infected people will <br></br>
                develop mild to moderate illness and recover without hospitalization.
            </p>
            <img src="/symptoms.png" alt="symptoms" className='main-img' />


        </div>
    )
}

export default Symptoms