import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import NoteItem from "../components/NoteItem";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) =>
        note.tittle.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  useEffect(() => {
    handleSearch();
  }, [text, notes]);

  return (
    <>
      <section>
        <header className="notes__header">
          {!showSearch && <h2>My Notes</h2>}
          {showSearch && (
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                handleSearch();
              }}
              autoFocus
              placeholder="Keyword..."
            />
          )}
          <button
            className="btn"
            onClick={() => setShowSearch((prevState) => !prevState)}
          >
            {showSearch ? <IoClose /> : <CiSearch />}
          </button>
        </header>
        <div className="notes__container">
          {filteredNotes.length === 0 && (
            <p className="empty__notes">Note not found.</p>
          )}
          {filteredNotes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </div>

        <Link to="/create-note" className="btn add__btn">
          <FaPlus />
        </Link>
      </section>
    </>
  );
};

export default Notes;
