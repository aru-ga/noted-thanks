import { render, screen, fireEvent } from "@testing-library/react";
import AddNoteForm from "./AddNoteForm";

describe("AddNoteForm", () => {
  const mockOnAddNote = jest.fn();

  beforeEach(() => {
    render(<AddNoteForm onAddNote={mockOnAddNote} />);
  });

  test("renders correctly", () => {
    fireEvent.click(screen.getByRole("button", { name: /add new note/i }));

    expect(
      screen.getByRole("heading", { name: /add new note/i })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/note title/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/note body/i)).toBeInTheDocument();
    expect(screen.getByText(/characters remaining/i)).toBeInTheDocument();
  });

  test("allows user to type in title and body", () => {
    fireEvent.click(screen.getByRole("button", { name: /add new note/i }));

    const titleInput = screen.getByPlaceholderText(/note title/i);
    const bodyInput = screen.getByPlaceholderText(/note body/i);

    fireEvent.change(titleInput, { target: { value: "My Note Title" } });
    fireEvent.change(bodyInput, {
      target: { value: "This is the body of my note." },
    });

    expect(titleInput).toHaveValue("My Note Title");
    expect(bodyInput).toHaveValue("This is the body of my note.");
  });

  test("calls onAddNote with correct parameters when Add Note button is clicked", () => {
    fireEvent.click(screen.getByRole("button", { name: /add new note/i }));

    const titleInput = screen.getByPlaceholderText(/note title/i);
    const bodyInput = screen.getByPlaceholderText(/note body/i);

    fireEvent.change(titleInput, { target: { value: "My Note Title" } });
    fireEvent.change(bodyInput, {
      target: { value: "This is the body of my note." },
    });

    fireEvent.click(screen.getByRole("button", { name: /add note/i }));

    expect(mockOnAddNote).toHaveBeenCalledWith({
      title: "My Note Title",
      body: "This is the body of my note.",
      id: expect.any(Number),
    });

    expect(titleInput).toHaveValue("");
    expect(bodyInput).toHaveValue("");
  });
});
