import { BiImageAlt } from "react-icons/bi";

const AddImageButton = () => {
  return (
    <div className="flex flex-col justify-center relative items-center border-4 border-gray-300 border-dashed rounded-lg cursor-pointer m-auto p-12 sm:p-14 min-[375px]:w-52 min-[375px]:h-52 lg:p-10 sm:w-full sm:h-full w-fit h-full">
      <span className="text-3xl">
        <BiImageAlt />
      </span>
      <p className="font-semibold text-sm">Add Images</p>
    </div>
  );
};

export default AddImageButton;