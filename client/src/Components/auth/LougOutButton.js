import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../js/actions/user";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Button
     
      color='error'
      onClick={() => {
        dispatch(logout());
        navigate("/");
      }}
    >
      deconnecter
    </Button>
  );
};
