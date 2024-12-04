import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Textarea } from "./ui/textarea";
import { PlusIcon } from "@heroicons/react/24/outline";

interface AddNoteFormProps {
  onAddNote: (note: { title: string; body: string }) => void;
}

export default function AddNoteForm({ onAddNote }: AddNoteFormProps) {
  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
    id: +new Date(),
  });
  const maxTitleLength = 50;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "title" && value.length <= maxTitleLength) {
      setNewNote({
        ...newNote,
        [name]: value,
      });
    } else if (name === "body") {
      setNewNote({
        ...newNote,
        [name]: value,
      });
    }
  };

  const handleAddNote = () => {
    onAddNote(newNote);
    setNewNote({ title: "", body: "", id: +new Date() });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Add New Note
          <PlusIcon className="w-5 h-5 ml-3 text-violet-500 animate-pulse" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Note</DialogTitle>
          <DialogDescription>
            Create a new note by filling out the form below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              type="text"
              name="title"
              placeholder="Note Title"
              value={newNote.title}
              onChange={handleInputChange}
              className="border mb-2 p-1 col-span-5"
            />
            <p className="text-gray-500 col-span-5">
              {maxTitleLength - newNote.title.length} characters remaining
            </p>{" "}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Textarea
              name="body"
              placeholder="Note Body"
              value={newNote.body}
              onChange={handleInputChange}
              className="border mb-2 p-1 col-span-5"
            />
          </div>
        </div>
        <DialogFooter>
          <button
            onClick={handleAddNote}
            className="bg-violet-500 text-white p-2 rounded"
          >
            Add Note
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
