import "./App.css";
import React, { useState } from "react";
import { Button, Img, MessageModal } from "./lib";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => {
      return !prev;
    });
  };
  return (
    <div className="App">
      <div>
        <h2>Bottone</h2>
        <Button>label</Button>
      </div>
      <div>
        <h2>Immagine</h2>
        <h4>type</h4>
        <div className="esempi">
          <label>icon</label>
          <div>
            <Img src="/logo192.png" type="icon" />
          </div>
          <label>button</label>
          <div>
            <Img src="/logo192.png" type="button" />
          </div>
        </div>
      </div>
      <div>
        <h2>MessageModal</h2>
        <div className="esempi">
          <Button onClick={openModal}>apri</Button>
          {showModal && (
            <MessageModal title="titolo del messaggio" onOut={openModal}>
              <label>Testo del messaggio</label>
            </MessageModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
