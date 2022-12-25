import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [allNote, addToArray] = React.useState([]);

  function addNoteToArray(note) {
    addToArray((prevValue) => {
      return [...prevValue, note];
    });
  }
  function handleDelete(uniqueId) {
    addToArray((prevValue) => {
      return prevValue.filter((item, index) => index !== uniqueId);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNoteToArray} />
      {allNote.map((noteItem, index) => (
        <Note
          key={index}
          uniqueId={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={handleDelete}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
