// pages
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4">
      <Home />;
      <ToastContainer position="top-center" autoClose={500} />
    </div>
  );
};

export default App;
