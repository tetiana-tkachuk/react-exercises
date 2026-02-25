interface BookProps {
  books: Book[];
}

interface Book {
  id: string;
  name: string;
}

export default function Book({ books }: BookProps) {
  return (
    <>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </>
  );
}
