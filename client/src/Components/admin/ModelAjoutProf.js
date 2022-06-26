import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { postProf, remouveProf } from "../../js/actions/classe";

const ModelAjoutProf = ({ cll, userId }) => {
  const classes = useSelector((state) => state.classeReducer.classe);
  const currentCll = classes.find((p) => p._id == cll.cll);

const [proffeseurs, setProffeseurs] = useState(
    Array.isArray(currentCll.proffeseur)
      ? currentCll.proffeseur
      : [currentCll.proffeseur]
  );

  const { proffeseur } = userId;
  const liked = !!proffeseurs.find((item) => {
    return item._id == proffeseur;
  });

  const dispatch = useDispatch();

  const like = () => {
    dispatch(postProf(cll.cll, userId.proffeseur));
    setProffeseurs([...proffeseurs, userId]);
    window.location.reload();
  };

  const unlike = () => {
    dispatch(remouveProf(cll.cll, userId.proffeseur));
    setProffeseurs(proffeseurs.filter((e) => e._id != proffeseur));
    window.location.reload();
  };

  
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

export default ModelAjoutProf;


