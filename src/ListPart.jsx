export const ListPart = ({ images, setBody }) => {
  //   console.log("ListPart");
  const handClick = (e) => {
    console.log(e.target.src);
    setBody(e.target.src);
  };
  return (
    <div className="list-part">
      {images.map((image) => {
        return <img onClick={handClick} src={image} alt="" />;
      })}
    </div>
  );
};
