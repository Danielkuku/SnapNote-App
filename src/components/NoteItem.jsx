import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (
    <Link to={`/edit-note/${note.id}`} className="note">
      <h4>
        {note.tittle.length > 40
          ? note.tittle.substr(0, 40) + "..."
          : note.tittle}
      </h4>
      <p>{note.date}</p>
    </Link>
  );
};

export default NoteItem;
