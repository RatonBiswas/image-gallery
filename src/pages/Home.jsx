import CanvasGallery from "../components/canvas/CanvasGallery";
import Header from "../components/header/Header";
// import '../App.css'
const Home = () => {
  return (
    <main className="bg-white transition-all duration-300 min-h-screen text-black flex flex-col items-center justify-center">
      <section
        className="text-2xl shadow-xl p-4 mt-10 top-[-0.5rem] font-semibold flex flex-col rounded-lg  mx-10 my-5 w-fit h-full"
      >
        <Header />
        <CanvasGallery />
      </section>
    </main>
  );
};

export default Home;
