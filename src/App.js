import ImageList from "./components/ImageList";
import Search from "./Search";
import { useState } from "react";
function App() {
  const [term, setTerm] = useState("");
  const [images, setImages] = useState([]);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await Search(term);
    setImages(result);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={term} />
      </form>
      <div> <ImageList images={images} /></div>
    </div>
  );
}

export default App;
