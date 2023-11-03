import { useContext } from "react";
import DeleteButton from "../canvas/DeleteButton";
import {ImageGalleryContext}  from "../../pages/Home";
const Header = () => {
  const { currentChecked } = useContext(ImageGalleryContext)
  const isAnyImageSelected = currentChecked.length > 0;
  return (
    <nav className="border-b-2 mb-8">
      <h1 className="my-8 ms-8 font-semibold text-xl">
        {isAnyImageSelected ? (
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={isAnyImageSelected}
              readOnly
              className="w-5 h-4 mr-2"
            />
            {currentChecked.length} Files Selected
          </label>
        ) : (
          "Gallery"
        )}
      </h1>
      {isAnyImageSelected && (
        <button
          className="md:absolute top-8 right-8 text-red-500 font-semibold text-xl ms-8 hover:underline"
          onClick={DeleteButton}
        >
          Delete files
        </button>
      )}
    </nav>
  );
};

export default Header;
