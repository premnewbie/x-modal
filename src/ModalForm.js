// import Modal from '@mui/material/Modal';
// import { Box } from '@mui/material';
// import { useState } from 'react';


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function ModalForm() {  
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const [username,setUsername] = useState('');
//   const [phone,setPhone] = useState('');
//   const [email,setEmail] = useState('');
//   const [dob,setDob] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const currentDate = new Date();
//     const emailFormat = /\S+@\S+\.\S+/;
//     const phoneFormat = /^\d{10}$/;

//     if (!emailFormat.test(email)) {
//       alert("Invalid email");
//     } else if (!phoneFormat.test(phone)) {
//       alert("Invalid phone number");
//     } else if (new Date(dob) > currentDate || dob==='') {
//       alert("Invalid date of birth");
//     } else{
//       setUsername('');
//       setEmail('');
//       setPhone('');
//       setDob('');
//     } 
//   }

//   return (  
//     <div>
//       <h1>User Details Modal</h1>
//       <button onClick={handleOpen}>Open Form</button>
//       {open && <div className="modal">
//         <div className="modalBody">  
//         <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//           >
//             <Box sx={style}>        
//               <h2>Fill Details</h2>
//               <form onSubmit={handleSubmit}>
//                 <h3>Username:</h3>
//                 <input type='text' id='username' value={username} onInput={(e) => setUsername(e.target.value)}/>
//                 <h3>Email Address:</h3>
//                 <input type='text' id='email' value={email} onInput={(e) => setEmail(e.target.value)}/>
//                 <h3>Phone Number:</h3>
//                 <input type='number' id='phone' value={phone} onInput={(e) => setPhone(e.target.value)}/>
//                 <h3>Date of Birth:</h3>
//                 <input type='date' id='dob' value={dob} onInput={(e) => setDob(e.target.value)}/>
//                 <button type='submit' className='submit-button'>Submit</button>
//               </form>          
//             </Box>
//           </Modal>
//         </div>
//       </div>}
//     </div>
//   )
// }

import React, { useState } from "react";

const ModalForm = ({ setIsModalOpen, setModalOpenBackground }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleBackgroundClick = () => {
    setIsModalOpen(false);
    setModalOpenBackground(false);
    setFormData((prevData) => ({
      ...prevData,
      username: "",
      email: "",
      phone: "",
      dob: "",
    }));
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  const validationCheck = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      window.alert(
        "Invalid email. Your email address should be in the format:- text@text.com"
      );
      return;
    }

    if (formData.phone.length < 10) {
      window.alert(
        "Invalid phone number. Please enter"
      );
      return;
    }
    if (formData.phone.length < 10) {
      window.alert(
        "Invalid phone number. Please enter a 10-digit phone number."
      );
      return;
    }

    const inputDate = new Date(formData.dob);
    const currentDate = new Date();
    if (currentDate < inputDate) {
      window.alert(
        "Invalid date of birth. Date of birth cannot be in the future."
      );
      return;
    }
  };
  return (
    <div className="modalBackground" onClick={handleBackgroundClick}>
      <div
        className="modalContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modalHeader">
          <h1>Fill Details</h1>
        </div>
          <div className="modalBody">
          <form onSubmit={validationCheck}>
            <label htmlFor="username">
              <h3>Username:</h3>
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">
              <h3>Email Address:</h3>
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="phone">
              <h3>Phone Number:</h3>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label htmlFor="dob">
              <h3>Date of Birth:</h3>
            </label>
            <input
              type="Date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
            <br />
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;