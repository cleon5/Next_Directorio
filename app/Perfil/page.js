"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { getUser } from "../services";

function Perfil() {
  const [Data, setData] = useState([]);
  const GetData = () => {
    axios.get("http://localhost:3000/api").then((data) => {
      console.log(data.data);
      setData(data.data[0]);
    });
  };
  const getUsers = async ()=>{
    let x = await getUser("64c72c67d73671f261de3958")
    console.log(x)
    setData(x);
  }

  useEffect( () => {
    GetData();
    //getUsers()
  }, []);

  const data = {
    name: "cleon",
    username: "cleon4",
    descripcion:
      "descripcion rapida de los, descripcion rapida de los, descripcion rapida de los",
    image: "./images/74253.jpg",
    skills: {
      hard: ["trabajo en equipo", "trabajo en equipo"],
      soft: ["html", "css", "react", "html", "css", "react"],
    },
    proyects: [],
    icons: ["fa-brands fa-java", "fa-brands fa-square-js"],
    bange: [
      "badge rounded-pill text-bg-primary",
      "badge rounded-pill text-bg-secondary",
      "badge rounded-pill text-bg-success",
      "badge rounded-pill text-bg-danger",
      "badge rounded-pill text-bg-warning",
      "badge rounded-pill text-bg-info",
      "badge rounded-pill text-bg-light",
      "badge rounded-pill text-bg-dark",
    ],
  };
  let num = 2;

  const sliced = () => {
    let x = data.skills.soft.slice((num - 1) * 5, num * 5);
    console.log(x);
  };
  sliced();

  return (
    <div className="Perfil">
      <div className="About">
        <div
          className="photo"
          style={{ backgroundImage: `url(${data.image})` }}
        ></div>
        <div className="information">
          <h3>{Data.username}</h3>
          <div className="linksSocila">
            <i
              className="fa-brands fa-facebook fa-2xl"
              style={{ color: "#ffffff" }}
            ></i>
            <i
              className="fa-brands fa-facebook fa-2xl"
              style={{ color: "#ffffff" }}
            ></i>
            <i
              className="fa-brands fa-facebook fa-2xl"
              style={{ color: "#ffffff" }}
            ></i>
          </div>

          <hr />
          <div className="section_info">
            <label>About me</label>

            <p>{Data.descripcion}das</p>
          </div>
          <hr />
        </div>
      </div>

      <div className="Proyects">
        <div className="techStack">
          <div className="d-flex justify-content-between">
            <h3>Tech Stack</h3>
            <button data-bs-toggle="modal" data-bs-target="#modalStacks" className="btn btn-light" onClick={() => console.log("s")}>
              <i className="fa-solid fa-pen-to-square fa-2xl"></i>
            </button>
          </div>

          <hr />
          {Data?.skills?.soft?.map((skill, index) => (
            <span className={Data.bange[index] + " skillbadge"}>
              <div className="stack">
                <i className="fa-brands fa-square-js fa-2xl"></i> {skill}
              </div>
            </span>
          ))}
        </div>

        <div className="techStack">
          <h3>Proyects</h3>
          <hr />
          <div className="">
            {Data?.proyects?.map((proyect, index) => (
              <div className="card mb-3" style={{ width: "95%" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <a href="">
                      <img
                        src={data.image}
                        style={{ backgroundSize: "cover", height: "100%" }}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{proyect.title}</h5>
                      <hr />
                      <p className="card-text">{proyect.description}</p>
                      <p className="card-text">
                        {proyect?.tecnologias?.map((skill, index) => (
                          <span className={Data.bange[index] + " skillbadge"}>
                            <div className="stack">
                              <i className="fa-brands fa-square-js fa-2xl"></i>{" "}
                              {skill}
                            </div>
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="techStack">
          <h3>Work</h3>
          <hr />
          <div className="proyectsList">
            {Data?.skills?.hard?.map((skill, index) => (
              <div
                className="card mb-3"
                style={{ width: "48%", backgroundColor: "" }}
              >
                <div className="row g-0">
                  <div className="col-md-4 p-3">
                    <p className="card-text text-end">
                      Junio 2022 a Julio 2023{" "}
                    </p>
                    <p className="card-text text-end">
                      <small className="text-body-secondary">Cenedic</small>
                    </p>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Programador jr </h5>
                      <hr />
                      <p className="card-text">
                        Se creo una web en react para la gestion de tareas y el
                        despliege de varios cursos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="modal fade" id="modalStacks" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal stacks</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Perfil;
