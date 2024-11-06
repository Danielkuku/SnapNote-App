import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import useCreateDate from "../components/UseCreateDate";

const CreateNote = ({ setNotes }) => {
  const [tittle, setTittle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tittle && details) {
      const note = {
        id: uuid(),
        tittle,
        details,
        date,
      };
      //add this note to the note array
      setNotes((prevNotes) => [note, ...prevNotes]);

      //after creating lets redirect to the note page
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>
          Save
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tittle"
          value={tittle}
          onChange={(e) => setTittle(e.target.value)}
          autoFocus
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

export default CreateNote;
