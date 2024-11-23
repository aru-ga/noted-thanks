import { useState } from "react";
import Nav from "./Nav";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";
import { getInitialData } from "@/lib/initData";

export default function NoteSpace() {
  const [notecards, setNotecards] = useState(getInitialData());
  const [searchResults, setSearchResults] = useState(notecards);

  const activeNotes = searchResults.filter((note) => !note.archived);
  const archivedNotes = searchResults.filter((note) => note.archived);

  const handleArchiveToggle = (id: number) => {
    const updatedNotes = notecards.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotecards(updatedNotes);
    setSearchResults(updatedNotes);
  };

  const handleDeleteNote = (id: number) => {
    const updatedNotes = notecards.filter((note) => note.id !== id);
    setNotecards(updatedNotes);
    setSearchResults(updatedNotes);
  };

  const handleAddNote = (note: { title: string; body: string }) => {
    const newNoteObj = {
      id: notecards.length + 1,
      title: note.title,
      body: note.body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    const updatedNotes = [...notecards, newNoteObj];
    setNotecards(updatedNotes);
    setSearchResults(updatedNotes);
  };

  const handleSearch = (query: string) => {
    if (query === "") {
      setSearchResults(notecards);
    } else {
      const filteredNotes = notecards.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredNotes);
    }
  };

  return (
    <>
      <Nav onSearch={handleSearch} />
      <main className="flex flex-col">
        <AddNoteForm onAddNote={handleAddNote} />
        <NoteList
          notes={activeNotes}
          onArchiveToggle={handleArchiveToggle}
          onDelete={handleDeleteNote}
          listTitle="Active Notes"
          noNotesMessage="Currently no active notes"
        />
        <NoteList
          notes={archivedNotes}
          onArchiveToggle={handleArchiveToggle}
          onDelete={handleDeleteNote}
          listTitle="Archived Notes"
          noNotesMessage="Currently no archived notes"
        />
      </main>
    </>
  );
}
