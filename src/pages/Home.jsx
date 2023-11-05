import CanvasGallery from "../components/canvas/CanvasGallery";
import Header from "../components/header/Header";
import { useState, createContext } from "react";
import INITIAL_IMAGE from "../utils/InitialImage";
// import ImageGalleryContext from "../utils/ImageGalleryContext";

export const ImageGalleryContext = createContext(null);

// import '../App.css'
const Home = () => {
  const [imageIndex, setImageIndex] = useState(INITIAL_IMAGE);
  const [currentChecked, setCurrentChecked] = useState([]);
  const [currentHover, setCurrentHover] = useState(-1);
  const [currentImage, setCurrentImage] = useState(1);

  // Context values
  const value = {
    imageIndex,
    setImageIndex,
    currentChecked,
    setCurrentChecked,
    currentHover,
    setCurrentHover,
    currentImage,
    setCurrentImage,
  };

  return (
    <ImageGalleryContext.Provider value={value}>
        <section className="bg-white border border-gray-150 rounded-lg shadow my-10 space-y-2">
          <Header />
          <CanvasGallery />
        </section>
    </ImageGalleryContext.Provider>
  );
};

export default Home;
