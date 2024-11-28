// Array of new image URLs and their alt text
const newImages = [
    "https://images.unsplash.com/photo-1577660002965-04865592fc60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsdWUlMjBkZW5pbSUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D", // Example image 1
    "https://images.unsplash.com/photo-1604136172384-b2e9c43271ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D", // Example image 2
    "https://images.unsplash.com/photo-1553545985-1e0d8781d5db?q=80&w=2494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example image 3
    "https://images.unsplash.com/photo-1553545985-1e0d8781d5db?q=80&w=2494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example image 4
    "https://images.unsplash.com/photo-1577660002965-04865592fc60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsdWUlMjBkZW5pbSUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D", // Example image 5
    "https://images.unsplash.com/photo-1604136172384-b2e9c43271ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D", // Example image 6
    "https://images.unsplash.com/photo-1577660002965-04865592fc60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsdWUlMjBkZW5pbSUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D", // Example image 7
    "https://images.unsplash.com/photo-1553545985-1e0d8781d5db?q=80&w=2494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example image 8
    "https://images.unsplash.com/photo-1577660002965-04865592fc60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsdWUlMjBkZW5pbSUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D", // Example image 9
    "https://images.unsplash.com/photo-1604136172384-b2e9c43271ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D", // Example image 10
    "https://images.unsplash.com/photo-1553545985-1e0d8781d5db?q=80&w=2494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example image 11
    "https://images.unsplash.com/photo-1577660002965-04865592fc60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsdWUlMjBkZW5pbSUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D", // Example image 12
    "https://images.unsplash.com/photo-1604136172384-b2e9c43271ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D", // Example image 13
  ];
  
  // Get the container where images will be added
  const scrollContainer = document.getElementById("scrollContainer");
  
  // Loop through the array and add each new image to the container
  newImages.forEach(url => {
    const img = document.createElement("img");
    img.classList.add("carousel-image");
    img.src = url;
    img.alt = "New Item";  // Optionally, change alt text for each image
    scrollContainer.appendChild(img);
  });
  
  
  // Loading Screen Timeout (to simulate content loading)
  window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(function () {
      loadingScreen.style.display = 'none';
    }, 2000); // 2 seconds delay for loading screen
  });
  
  // Add New Item Modal Toggle
  const addNewItemBtn = document.getElementById('addNewItemBtn');
  const addItemModal = document.getElementById('addItemModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  
  addNewItemBtn.addEventListener('click', function() {
    addItemModal.style.display = 'block';
  });
  
  closeModalBtn.addEventListener('click', function() {
    addItemModal.style.display = 'none';
  });
  
  // Close the modal if the user clicks outside of the modal
  window.addEventListener('click', function(event) {
    if (event.target === addItemModal) {
      addItemModal.style.display = 'none';
    }
  });
  
  // Form Submission to Add Item
  const newItemForm = document.getElementById('newItemForm');
  newItemForm.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const itemName = document.getElementById('itemName').value;
    const itemImage = document.getElementById('itemImage').value;
  
    // You can add logic here to store the item in localStorage or backend (not implemented here)
      // Close the modal
    addItemModal.style.display = 'none';
    alert(`Added ${itemName} with image: ${itemImage}`);
    addItemModal.style.display = 'none';
    newItemForm.reset();
  });
  