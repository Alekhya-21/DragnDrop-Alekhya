// Get the containers and items
const draggableItems = document.querySelectorAll(".item");
const droppableArea = document.querySelector(".container:nth-child(2)");

// Add event listeners to draggable items
draggableItems.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
});

// Add event listeners to droppable area
droppableArea.addEventListener("dragover", dragOver);
droppableArea.addEventListener("dragenter", dragEnter);
droppableArea.addEventListener("dragleave", dragLeave);
droppableArea.addEventListener("drop", drop);

// Drag and Drop functions
let draggedItem = null;

function dragStart() {
  draggedItem = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.style.backgroundColor = "#e9e9e9";
}

function dragLeave() {
  this.style.backgroundColor = "initial";
}

function drop() {
  this.style.backgroundColor = "initial";
  this.appendChild(draggedItem);
  draggedItem.style.display = "block";
  showMessage("Item dropped successfully!");
}

// Reset function
function resetContainers() {
  const firstContainer = document.querySelector(".container:first-child");
  droppableArea.innerHTML = "";
  firstContainer.innerHTML = `
    <h2>Items</h2>
    <div class="item" draggable="true">Box</div>
    <div>
      <img
        class="item"
        draggable="true"
        src="iphone.png"
        alt="iphone"
        height="80"
        width="100"
      />
    </div>
    <div>
      <img
        class="item"
        draggable="true"
        src="gift.png"
        alt="gift box"
        height="80"
        width="100"
      />
    </div>
  `;
  showMessage("Drop Here");
}

// Display success message
function showMessage(message) {
  const messageContainer = document.querySelector(".container:nth-child(2)");
  messageContainer.innerHTML = `<p>${message}</p>`;
}
