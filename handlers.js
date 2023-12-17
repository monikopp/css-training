let activiIndex = 0;
const groups = document.getElementsByClassName("card-group");

const handleLoveClick = () => {
  const nextIndex = activiIndex + 1 <= groups.length - 1 ? activiIndex + 1 : 0;
  const currentGroup = document.querySelector(`[data-index="${activiIndex}"]`);
  const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  currentGroup.dataset.status = "after";
  nextGroup.dataset.status = "becoming-active-from-before";
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activiIndex = nextIndex;
  });
};

const handleHateClick = () => {
  const nextIndex = activiIndex - 1 >= 0 ? activiIndex - 1 : groups.length - 1;
  const currentGroup = document.querySelector(`[data-index="${activiIndex}"]`);
  const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  currentGroup.dataset.status = "before";
  nextGroup.dataset.status = "becoming-active-from-after";
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activiIndex = nextIndex;
  });
};
