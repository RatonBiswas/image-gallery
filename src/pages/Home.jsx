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
      <main className="bg-white">
        <section className="text-2xl shadow-xl p-4 mt-10 top-[-0.5rem] font-semibold flex flex-col rounded-lg  mx-10 my-5 w-fit h-full">
          <Header />
          <CanvasGallery />
        </section>
      </main>
    </ImageGalleryContext.Provider>
  );
};

export default Home;
