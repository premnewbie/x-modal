import './App.css';
import { useState } from 'react';
import ModalForm from './ModalForm';

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={handleOpen}>Open Form</button>
      <ModalForm open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
