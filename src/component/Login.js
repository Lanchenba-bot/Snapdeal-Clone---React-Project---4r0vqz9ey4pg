import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ContextData from "../context/product-data";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";

const style = {
  display: 'grid',
  placeItems: 'center',
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  borderRadius:'6px',
  boxShadow: 24,
  p: 4,
  borderTop: '10px solid #E40046'
};

export default function Login() {

  const [log, setLog] = React.useState(true);
  const { open, setOpen, setIsUserLogin } = React.useContext(ContextData);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navo = useNavigate();

  //   signup
  const emailRef = React.useRef();
  const passRef = React.useRef();
  const nameRef = React.useRef();
  const useridRef = React.useRef();
  const userpassRef = React.useRef();
  const [error, setError] = React.useState("");

//  if user is Already login before with same device use Local storage


if(localStorage.getItem("logincred")){
    console.log("getting data from local storage");
    // setIsUserLogin(true);
    navo("/cart");
}
// 


  function handleUser(e) {
    e.preventDefault();
    const obj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      pass: passRef.current.value,
    };
    console.log(obj);
    async function storeIntoServer() {
      await fetch("https://snapdeal-clone-6c80a-default-rtdb.firebaseio.com/login.json", {
        method: "POST",
        body: JSON.stringify(obj),
      });
    }
    storeIntoServer();
    setLog(true);
  }
  //

  function handleLogin(e) {
    e.preventDefault();
    const userId = useridRef.current.value;
    const userPass = userpassRef.current.value;
    async function getter() {
      const feth = await fetch(
        "https://snapdeal-clone-6c80a-default-rtdb.firebaseio.com/login.json"
      );
      const convertjson = await feth.json();
      const Arr = [];
      for (const data in convertjson) {
        Arr.push(convertjson[data]);
      }
      const detail=Arr.find((data) => data.email === userId && data.pass === userPass);
      if (detail) {
        localStorage.setItem("logincred",JSON.stringify(detail.name));
        navo("/cart");
      }
    }
    getter();
    setIsUserLogin(true);
    handleClose();
    navo("/");
  }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          {log ? (
            <form onSubmit={handleLogin}>
              <p>Login Id</p>
              <input
                type="email"
                placeholder="Yourname@gmail.com"
                ref={useridRef}
                required
              />
              <p>Password</p>
              <input
                type="password"
                placeholder="abcd@1234#"
                ref={userpassRef}
                required
              />
              <button style={{width:'100%'}} type="submit">Login</button>
              <button style={{width:'100%'}} onClick={() => setLog(false)}>Sign In</button>
            </form>
          ) : (
            <form onSubmit={handleUser}>
              <input
                type="text"
                placeholder="User Name"
                ref={nameRef}
                required
              />
              <input type="text" placeholder="Email" ref={emailRef} required />
              <input
                type="password"
                placeholder="Password"
                ref={passRef}
                required
              />
              <button type="submit">Submit</button>
              <button onClick={() => setLog(true)}>Login</button>
            </form>
          )}
        </Box>
      </Modal>
    </div>
  );
}
