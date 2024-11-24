import "./GraphicDesigning.css";

const ImageDescription = () => {
  return (
    <div className="image-description-container">
      <header className="header">
        <h1>Graphic Designing</h1>
      </header>
      
      <div className="images">
        <img
          src="https://i.ibb.co/z5P2JN2/task-4.png"
          alt="Graphic design showcasing task 4"
          className="image"
        />
        <img
          src="https://i.ibb.co/dcM1j2T/Woman-violation-3.png"
          alt="Woman violation graphic design"
          className="image"
        />
        <img
          src="https://i.ibb.co/fMzPfz6/Task1-4.png"
          alt="Task 1 graphic design"
          className="image"
        />
        <img
          src="https://i.ibb.co/yP6NdZL/National-Press-Day-8.jpg"
          alt="National Press Day design"
          className="image"
        />
      </div>
    </div>
  );
};

export default ImageDescription;
