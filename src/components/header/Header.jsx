import DeleteButton from "../canvas/DeleteButton";
const Header = () => {
  return (
    <div className="transition-all duration-300 flex justify-between items-center relative mt-4 bottom-2">
      <h1 className="flex sm:ml-4 justify-start gap-2 text-3xl items-center ">
        <span className="hidden sm:block text-black"> Gallery </span>
      </h1>
          <DeleteButton />
    </div>
  );
};

export default Header;
