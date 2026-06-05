import './Contact.css'
import Form from './form/Form'

function Contact (){
    return (
        <div className='contact'>
            <div className='title-div'>
                <h1 className="title">Need Help!</h1>
                <img src="/prevention-line.png" alt="green-line" />
            </div>
            <p className="p-main">
                Protect yourself and others around you by knowing the facts and taking appropriate<br></br>
                 precautions. Follow advice provided by your local health authority.
            </p>
            <img src="/contact.png" alt="health" className='contact-img'/>
            <Form/>
        </div>
    )
}


export default Contact