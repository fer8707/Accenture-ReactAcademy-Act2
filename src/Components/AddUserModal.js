import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function AddUserModal({ addUser }) {
  const [name, setName] = useState("")
  const [lastName, setlastName] = useState("")
  const [email, setemail] = useState("")
  const [image, setImage] = useState("")
  const [isActive, setisActive] = useState(false)
  const [userId, setUserId] = useState("")

  const [open, setOpen] = React.useState(false);
  

  const modalOpen = () => {
    setOpen(true);
  };

  const modalClose = () => {
    setOpen(false);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  }
  const onChangelastName = (e) => {
    setlastName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setemail(e.target.value);
  };
  const onChangeImage = (e) => {
    setImage(e.target.value);
  };
  const onChangeActive = (e) => {
    console.log(e)
    setisActive(e.target.checked);
  };
  const onUserId =()=>{
    const newId = new Date().getTime().toString();
    setUserId(newId)
    console.log(newId)
  }

  const createUser = ()=>{
    const userInformation={
      name, 
      lastName,
      email,
      image,
      isActive,
      userId
    }
    addUser(userInformation);

  }


  return (
    <div>
      <Button variant="contained" color="primary" onClick={modalOpen}>
        Agregar
      </Button>
      <Dialog
        open={open}
        onClose={modalClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Agregar Usuario</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Inserta la información del nuevo usuario
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="nombre"
            id="nombre"
            label="Nombre"
            type="text"
            fullWidth
            onChange={onChangeName}
          />
          <TextField
            autoFocus
            margin="dense"
            name="apellido"
            id="apellido"
            label="Apellido"
            type="text"
            fullWidth
            onChange={onChangelastName}
          />
          <TextField
            autoFocus
            margin="dense"
            name="email"
            id="email"
            label="Email"
            type="email"
            fullWidth
            onChange={onChangeEmail}
          />
          <TextField
            autoFocus
            margin="dense"
            name="imagen"
            id="imagen"
            label="Imagen URL"
            type="text"
            fullWidth
            onChange={onChangeImage}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isActive}
                onChange={onChangeActive}
                name="activo"
              />
            }
            label="Activo"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={modalClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={() => {
              onUserId()
              createUser()
              modalClose()

            }}
            color="primary"
          >
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
