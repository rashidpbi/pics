import ImageShow from "./ImageShow";
import './ImageList.css'
function ImageList({ images }) {
  console.log(images)
  const renderedElements = images.map((image, index) => {
    console.log(image)
    return (
      <div key={index}>
        <ImageShow
          type={image.id}
          src={image.urls.full}
          alt={image.alt_description}
        />
      </div>
    );
  });
  return (
    <div className="grid-container">
      <div className="">{renderedElements}</div>
    </div>
  );
}

export default ImageList;
