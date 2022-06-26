import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { postEtudiant, remouveEtudiant } from "../../js/actions/classe";

const ModelAjoutEtud = ({ cll, userId }) => {
  const classes = useSelector((state) => state.classeReducer.classe);
  const currentCll = classes.find((p) => p._id == cll.cll);

  const [etudiants, setEtudiants] = useState(
    Array.isArray(currentCll.etudiant)
      ? currentCll.etudiant
      : [currentCll.etudiant]
  );

  const { etudiant } = userId;
  const liked = !!etudiants.find((item) => {
    return item._id == etudiant;
  });

  const dispatch = useDispatch();

  const like = () => {
    dispatch(postEtudiant(cll.cll, userId.etudiant));
    setEtudiants([...etudiants, userId]);
    window.location.reload();
  };

  const unlike = () => {
    dispatch(remouveEtudiant(cll.cll, userId.etudiant));
    setEtudiants(etudiants.filter((e) => e._id != etudiant));
    window.location.reload();
  };

  console.log({ userId, etudiants });
  return (
    <div className='like-container'>
      {!liked && (
        <Button
          disabled={!userId}
          variant='contained'
          onClick={like}
          style={{ marginLeft: "77%" }}
        >
          ajouter
        </Button>
      )}
      {liked && (
        <Button
          disabled={!userId}
          variant='contained'
          onClick={unlike}
          style={{ marginLeft: "77%" }}
        >
          suuprimer
        </Button>
      )}
    </div>
  );
};

export default ModelAjoutEtud;
