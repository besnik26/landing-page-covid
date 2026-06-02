import './prevention.css'

const cards = [
    {
        "id":"1",
        "imgSrc":"/masks.svg",
        "title":"Wear a mask",
        "description":"Masks can help prevent the spread of the virus from the person wearing the mask to others."
    },
    {
        "id":"2",
        "imgSrc":"/handwash.svg",
        "title":"Wash your hands often",
        "description":"Clean your hands with soap and water, or alcohol-based hand sanitizer."
    },
    {
        "id":"3",
        "imgSrc":"/distance.svg",
        "title":"Physical distancing",
        "description":"Maintain a safe distance especially from anyone who is coughing or sneezing."
    }
]

function Prevention(){
    return (
        <div className="prevention">
            <div className='title-div'>
                <h1 className="title">Prevention</h1>
                <img src="/prevention-line.png" alt="green-line" />
            </div>
            <p className="p-main">
                Protect yourself and others around you by knowing the facts and taking appropriate <br></br> 
                precautions. Follow advice provided by your local health authority.
            </p>

            <div className="prevention-cards">
                {
                    cards.map((card)=>(
                        <div className='card custom-card' key={card.id}>
                            <img src={card.imgSrc} alt="card-img" className='card-img'/>
                            <h3>{card.title}</h3>
                            <p className="p-mini">
                                {card.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Prevention;