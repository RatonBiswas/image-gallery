const DeleteButton = () => {
  return (
    <button className="btn btn-sm sm:btn-md btn-primary hover:btn-error">
      <span className="hidden sm:block text-red-600"> Delete files</span>
    </button>
  );
};

export default DeleteButton;
