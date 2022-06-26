import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllClasses } from "../js/actions/classe";
import { Table } from "react-bootstrap";
import Modal from "./admin/ModalClasseEt";
import Model from "./admin/ModelListCours";
import Acceil from "./loyout/acceil";
const Classeset = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllClasses());
  }, [getAllClasses]);
  const classes = useSelector((state) => state.classeReducer.classe);
  const user = useSelector((state) => state.userReducer.user);


  let forms = [];
  for (let i = 0; i < classes.length; i++) {
    for (let j = 0; j < classes[i].proffeseur.length; j++) {
      if (classes[i].proffeseur[j]._id === user._id) {
        forms.push(classes[i]);
      }
    }
  }


  

  

  return (
    <div>
      <div>
        <Acceil />
      </div>
      <div style={{ marginLeft: "20%", marginTop: "5%" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>nom</th>
              <th>formation</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((form) => (
              <tr>
                <td>{form.nom}</td>
                <td>
                  <div>{form.formation.nom}</div>
                </td>
                <td style={{display:"flex"}}>
                 
                    <div style={{marginRight:"5%" ,marginLeft:"5%"}}>
                      <Modal id={form._id} />
                    </div>
                
                  <div>
                    <Model form={form} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Classeset;
