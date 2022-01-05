import "./Book.css";
const Book = (props) => {
  return (
    <>
      <div className="container">
        <div className="block">
          <h1>{props.title}</h1>
          {/* <div className="text">
            <p>{props.description}</p>
          </div> */}

          <img className="imageBook" src={props.image} alt="" width="" />
          <p className="text">{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Book;
