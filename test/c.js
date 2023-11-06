const container = document.getElementById('container');
const createGridBtn = document.getElementById('create-grid-btn');

function createGrid(size) {
  // Remove existing grid
  container.innerHTML = '';

  // Create a new grid with the specified size
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      container.appendChild(gridItem);
    }
  }

  // Set grid item size based on the new size
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

createGridBtn.addEventListener('click', function() {
  const gridSize = parseInt(document.getElementById('grid-size').value);
  
  // Validate user input
  if (gridSize >= 1 && gridSize <= 100) {
    createGrid(gridSize);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});
