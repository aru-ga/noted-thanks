import Notecard from "./Notecard";

interface NoteListProps {
  notes: Array<{
    id: number;
    title: string;
    body: string;
    createdAt: string;
    archived: boolean;
  }>;
  onArchiveToggle: (id: number) => void;
  onDelete: (id: number) => void;
  listTitle: string;
  noNotesMessage: string;
}

export default function NoteList({
  notes,
  onArchiveToggle,
  onDelete,
  listTitle,
  noNotesMessage,
}: NoteListProps) {
  return (
    <div className="flex justify-center flex-col items-center border-b border-violet-500 py-5">
      <h1 className="py-3">{listTitle}</h1>
      <div className="flex flex-wrap gap-2 justify-center shadow-md">
        {notes.length > 0 ? (
          notes.map(({ id, title, body, createdAt, archived }) => (
            <Notecard
              key={id}
              id={id}
              title={title}
              body={body}
              createdAt={createdAt}
              archived={archived}
              onArchiveToggle={onArchiveToggle}
              onDelete={onDelete}
            />
          ))
        ) : (
          <p>{noNotesMessage}</p>
        )}
      </div>
    </div>
  );
}
