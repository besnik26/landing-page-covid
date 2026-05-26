import "./Stats.css"

const stats= [
    {
        "id":1,
        "title":"Total cases",
        "value":"273,312",
        "subtitle":"Confirmed"
    },
    {
        "id":2,
        "title":"Deaths",
        "value":"3,211",
        "subtitle":"Confirmed"
    },
    {
        "id":3,
        "title":"Vaccines",
        "value":"1,837,446",
        "subtitle":"Doses Administered"
    },
    {
        "id":4,
        "title":"Vaccines",
        "value":"906,858",
        "subtitle":"People receiving at least 1 dose"
    },

]

function Stats(){
    return (
        <div className="stats-div">
            <div className="stats">
                {
                    stats.map((stat)=>(
                       
                        <div className="stat" key={stat.id}>
                            <p className="p-main">{stat.title}</p>
                            <h2>{stat.value}</h2>
                            <p className="p-card">{stat.subtitle}</p>
                        </div>
                        
                    )) 
                }
            </div>
            <div className="location">
                <div className="location-img-div">
                    <img src="/kosovo.svg" alt="kosovo" className="kosovo-img"/>
                </div>
                <p className="p-card">Kosovo | Last update: November 2025</p>
            </div>
        </div>
    )
}

export default Stats