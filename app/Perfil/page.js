import React from "react";

function Perfil() {
    const data = {
        name:"cleon",
        username:"cleon4",
        descripcion:"descripcion rapida de los, descripcion rapida de los, descripcion rapida de los",
        image:"./images/74253.jpg",
        skills:{
            hard:["trabajo en equipo","trabajo en equipo",],
            soft:["html","css", "react", "html","css", "react"]
        },
        proyects:[

        ],
        icons:[
            "fa-brands fa-java", 
            "fa-brands fa-square-js"
        ],
        bange:[
            "badge rounded-pill text-bg-primary",
            "badge rounded-pill text-bg-secondary",
            "badge rounded-pill text-bg-success",
            "badge rounded-pill text-bg-danger",
            "badge rounded-pill text-bg-warning",
            "badge rounded-pill text-bg-info",
            "badge rounded-pill text-bg-light",
            "badge rounded-pill text-bg-dark",
        ],
    }
  return (
     <div className="Perfil">
        <div className="About">
            <div className="photo" style={{"background-image":`url(${data.image})`}}>
                
            </div>
            <div className="information">
                <h3>{data.username}</h3>
                <div className="linksSocila">
                    <i className="fa-brands fa-facebook fa-2xl" style={{color: "#ffffff"}}></i>
                    <i className="fa-brands fa-facebook fa-2xl" style={{color: "#ffffff"}}></i>
                    <i className="fa-brands fa-facebook fa-2xl" style={{color: "#ffffff"}}></i>
                </div>
                
                <hr/>
                <div className="section_info">
                    <label>About me</label>
                    
                    <p>
                        {data.descripcion}
                    </p>
                </div>
                <hr/>
            </div>
        </div>

        <div className="Proyects">
            <div className="techStack">
                <h3>Tech Stack</h3>
                <hr/>
                {data.skills.soft.map((skill, index) => (
                        <span className={data.bange[index] + " skillbadge"}>
                           <div className="stack">
                            <i className="fa-brands fa-square-js fa-2xl"></i> {skill}
                            </div> 
                        </span>
                    ))
                }
            </div>

            <div className="techStack">
                <h3>Proyects</h3>
                <hr/>
                <div className="proyectsList">
                     {data.skills.soft.map((skill, index) => (
                        <div className="card mb-3" style={{"width": "48%"}}>
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={data.image} className="img-fluid rounded-start" alt="..."/>
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">Se creo una web en react para la </p>
                              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                    }
                </div>
               
            </div>

            <div className="techStack">
                <h3>Work</h3>
                <hr/>
                {data.skills.hard.map((skill, index) => (
                        <div className="card mb-3" style={{"width": "95%"}}>
                        <div className="row g-0">
                          <div className="col-md-4">
                              <p className="card-text">Se creo una web en react para la </p>
                              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Programador jr</h5>
                              <p className="card-text"><small className="">Last updated 3 mins ago</small></p>
                              <hr />
                              <p className="card-text">Se creo una web en react para la </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                }
            </div>
        </div>

     </div>
  )
 
}

export default Perfil;
