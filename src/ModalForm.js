import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { useState } from 'react';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalForm() {  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [username,setUsername] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [dob,setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const inputDate = new Date(dob);
    const emailFormat = /\S+@\S+\.\S+/;
    const phoneFormat = /^\d{10}$/;

    if (inputDate > currentDate) {
      alert("Invalid date of birth. Please enter a valid date.");
    } else if (!emailFormat.test(email)) {
      alert("Invalid email. Please check your email address.");
    } else if (!phoneFormat.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else{
      setUsername('');
      setEmail('');
      setPhone('');
      setDob('');
    } 
  }

  return (  
    <div>
      <h1>User Details Modal</h1>
      <button onClick={handleOpen}>Open Form</button>
      {open && <div className="modal">
        <div className="modal-content">  
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>        
              <h2>Fill Details</h2>
              <form onSubmit={handleSubmit}>
                <h3>Username:</h3>
                <input type='text' id='username' value={username} required onInput={(e) => setUsername(e.target.value)}/>
                <h3>Email Address:</h3>
                <input type='email' id='email' value={email} required onInput={(e) => setEmail(e.target.value)}/>
                <h3>Phone Number:</h3>
                <input type='number' id='phone' value={phone} required onInput={(e) => setPhone(e.target.value)}/>
                <h3>Date of Birth:</h3>
                <input type='date' id='dob' value={dob} required  onInput={(e) => setDob(e.target.value)}/>
                <button type='submit' className='submit-button'>Submit</button>
              </form>          
            </Box>
          </Modal>
        </div>
      </div>}
    </div>
  )
}
