import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { participe, unParticipe } from "../../../js/actions/evenement";
import Button from "@mui/material/Button";
const Participe = ({ eve, userId }) => {
  const evenements = useSelector((state) => state.evenementReducer.evenement);

  const currentEve = evenements.find((p) => p._id == eve);

  const [participed, setParticiped] = useState(false);
  const [participess, setParticipes] = useState(currentEve.participant);
  const dispatch = useDispatch();
  const sync = () => {
    const byId = id => id === userId;
      const exist = participes.find( byId );
    const newParticipes = !exist  ? [...participess,userId] : participess.filter(id=>id!=userId)
    setParticipes(newParticipes)
    }
  const participes = () => {
    
    dispatch(participe(eve, userId));
    setParticiped(true);
  };
 
  const unParticipes = () => {
    
    dispatch(unParticipe(eve, userId));
    setParticiped(false);
  };
  useEffect(() => {
    if (currentEve.participant.includes(userId)) setParticiped(true);
    else setParticiped(false);
  }, [currentEve.participant]);
  
  return (
    <div className='like-container'>
      {userId && participed == false && (
        <Button variant='contained' onClick={participes} color='error'>
          participer
        </Button>

      )}
      {userId && participed && (
        <Button variant='contained' onClick={unParticipes} color='primary'>
          ignore
        </Button>
      )}
    </div>
  );
};

export default Participe;