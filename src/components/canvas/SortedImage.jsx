/* eslint-disable react/prop-types */
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ImageContainer from "./ImageContainer";

const SortedImage = (props) => {
  const sortable = useSortable({ id: props.imageNum });

  const { attributes, listeners, setNodeRef, transform, transition } = sortable;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <ImageContainer
      index={props.index}
      imageNum={props.imageNum}
      ref={setNodeRef}
      style={style}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};

export default SortedImage;
