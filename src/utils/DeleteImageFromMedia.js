const DeleteImageFromMedia = (
  imageIndex,
  currentChecked,
  setImageIndex,
  setCurrentChecked,
) => {
  let copyOfImageIndex = [...imageIndex];
  console.log("Before Filtering Selected Image Number : ", currentChecked);
  copyOfImageIndex = copyOfImageIndex.filter((value) => {
    return !currentChecked.includes(Number(value));
  });
  // console.log("After Filtering : ", copyOfImageIndex);
  setImageIndex(copyOfImageIndex);

  setCurrentChecked([]);
};

export default DeleteImageFromMedia;
