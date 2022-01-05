const Book = ({ book }) => {
  return (
    <div className="container">
      {
        book.map((book, index) => {
          return (
            <div className="book" key={index}>
              <div className="title">
                <h1>{book.title}</h1>
              </div>
              <div className="book-info">
                <div className="book-img">
                  <img src={book.image} alt={book.title} />
                </div>
                <div className="desc">
                  <p>{book.description}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};
export default Book;