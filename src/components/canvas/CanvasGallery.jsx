import { useContext, useState } from "react";
import AddImageButton from "./AddImageButton";
import GridLayout from "./GridLayout";
import SortedImage from './SortedImage'
import ImageContainer from "./ImageContainer";
import { ImageGalleryContext } from "../../pages/Home";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

const CanvasGallery = () => {
  const { imageIndex, setImageIndex } = useContext(ImageGalleryContext);
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        // Adding the delay will allow the user to scroll the screen and prevent them from accidentally initiate a drag event
        delay: 100,
        // the drag operation will only be aborted if the touch input is moved by more than 5 pixels during the delay
        tolerance: 5,
      },
    }),
  );
  // this sets which image is being dropped
  const [activeId, setActiveId] = useState(null);

  // DND KIT DRAG EVENTS
  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    // if the dragged image id and the image under it does not match, change their index to change the position
    if (active.id !== over.id) {
      setImageIndex((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        // the index of the array moves when the drag ends so the images change position
        return arrayMove(items, oldIndex, newIndex);
      });
    }
    // after drag ends no image is active
    setActiveId(null);
  };

  const handleDragCancel = () => {
    // if user cancels the drag then no image is active
    setActiveId(null);
  };
  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={imageIndex} strategy={rectSortingStrategy}>
          <GridLayout>
            {imageIndex.map((imageNum, i) => {
              return (
                <SortedImage key={imageNum} imageNum={imageNum} index={i} />
              );
            })}
            <AddImageButton />
          </GridLayout>
        </SortableContext>
        <DragOverlay adjustScale={true}>
          {activeId ? (
            <ImageContainer imageNum={activeId} index={imageIndex.indexOf(activeId)} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </>
  );
};

export default CanvasGallery;
