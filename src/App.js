// import './App.css';
// import ModalForm from './ModalForm';

// function App() {
  

//   return (
//     <div className="App">
//       <ModalForm />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import ModalForm from './ModalForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOpenBackground, setModalOpenBackground] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
    setModalOpenBackground(true);
  };
return (
    <div className="modalBackground">
      <h1 >User Details Modal</h1>
      <button onClick={handleClick} className="modalTrigger">
        Open Form
      </button>
      {isModalOpen && (
        <ModalForm
          setIsModalOpen={setIsModalOpen}
          setModalOpenBackground={setModalOpenBackground}
        />
      )}
    </div>
  );
}

export default App;