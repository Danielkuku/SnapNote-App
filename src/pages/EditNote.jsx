import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useState } from "react";
import useCreateDate from "../components/UseCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the current note by ID
  const note = notes.find((item) => item.id === id);
  const [tittle, setTittle] = useState(note?.tittle || "");
  const [details, setDetails] = useState(note?.details || "");
  const date = useCreateDate();

  const handleForm = (e) => {
    e.preventDefault();

    if (tittle && details) {
      const newNote = { ...note, tittle, details, date };

      // Update the note list with the edited note
      const newNotes = notes.map((item) => (item.id === id ? newNote : item));
      setNotes(newNotes);
    }

    // Redirect to homepage
    navigate("/");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      // Filter out the note with the current ID
      const newNotes = notes.filter((item) => item.id !== id);
      setNotes(newNotes);
      navigate("/"); // Redirect after deleting
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleForm}>
          Save
        </button>
        <button className="btn danger" onClick={handleDelete}>
          <RiDeleteBin5Line />
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Tittle"
          value={tittle}
          onChange={(e) => setTittle(e.target.value)}
        />
        <textarea
          rows="28"
          placeholder="Note Details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
