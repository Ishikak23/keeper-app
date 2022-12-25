import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpand] = React.useState(false);

  const [note, addNote] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    addNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded === true ? (
          <input
            autoComplete="off"
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        ) : null}

        <textarea
          autoComplete="off"
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded === true ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={(event) => {
              props.onAdd(note);
              addNote({
                title: "",
                content: ""
              });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
