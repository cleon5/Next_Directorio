import React from "react";

function Perfil() {
    const data = {
        title:"",
        descripcion:"",
        image:"",
        actitudes:[],
        
    }
  return (
     <div>
        <div className='topPerfil'>
            <div  className="ImageBack" style={{'background-image': 'url("./images/FocoBack.jpg")'}}>
                <div className="SectionImage">
                    <img className="PortadaImg" src="./Images/74253.jpg"/>
                </div>
                <div className="SectionInfo">
                    <h1>first name and last name</h1>
                    <p>Programer front-end</p>
                    <p>descripcion rapida de los </p>
                </div>
            </div>
            
        </div>
        
        <div className="Proyects">
          Proyector
        </div>
     </div>
  )
 
}

export default Perfil;
