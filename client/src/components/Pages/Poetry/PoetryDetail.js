import React from "react";
import { Link } from "react-router-dom";
import PoetryService from "../../../service/PoetryService";

import "./PoetryDetail.css";
import Button from 'react-bootstrap/Button'


const PoetryDetail = (props) => {

  console.log(props.loggedInUser)

  const poetryService = new PoetryService()
  const { _id, title, body, tags, handleClose } = props

  const deletePoetry = e => {

    e.preventDefault()

    poetryService
      .deleteOnePoetry(_id)
      // .then(() => props.history.push("/poesias"))
      .then(()=> handleClose())
      .catch((err) => console.log(err));
  }

  return (
    <div className="detail-container">
      <h1>{title}</h1>
      <h2>{body}</h2>
      <p className="property">~Dioni</p>
      <div className="btn-details" onClick={handleClose}>
        <Button className="card-btn">Cerrar</Button>
      </div>

      {props.loggedInUser ? (
        <>
          <Button className="admin-btn">
            <Link to={{ pathname: `/perfil/${_id}`, state: { titletomodify: title, bodytomodify: body, idtomodify: _id, tagstomodify: tags }}}>Editar</Link>
          </Button>
          <Button className="admin-btn" onClick={deletePoetry}>
            Borrar
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default PoetryDetail;