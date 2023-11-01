import CanvasGallery from '../components/canvas/CanvasGallery'
const Home = () => {
    return (
        <div className="app-container">
      {/* selected image panel */}
      <div className="selected-images-panel">
        <h1>Gallery</h1>
        <CanvasGallery />
      </div>
    </div>
    );
};

export default Home;
