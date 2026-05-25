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
        "title":"Doses Administered",
        "value":"1,837,446",
        "subtitle":"Vaccines"
    },
    {
        "id":4,
        "title":"People receiving at least 1 dose",
        "value":"906,858",
        "subtitle":"Vaccines"
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
            </div>
        </div>
    )
}

export default Stats