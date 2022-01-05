const Book = ({ book }) => {
  return (
    <div className="container">
      {
        book.map((book, index) => {
          return (
            <div className="book" key={index}>
              <div className="book-img">
                <img src={book.image} alt={book.title} />
              </div>
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};
export default Book;