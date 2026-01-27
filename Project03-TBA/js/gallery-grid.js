// ============================================
// GALLERY - Dynamic Image Loading
// ============================================

// Array of image paths
const galleryImages = [
    './images/menu/dish1.jpg',
    './images/menu/dish2.jpg',
    './images/menu/dish3.jpg',
    './images/menu/dish4.jpg',
    './images/menu/dish5.jpg',
    './images/menu/dish6.jpg',
    './images/menu/dish7.jpg',
    './images/menu/dish8.jpg'

];

// Get gallery container
const galleryGrid = document.querySelector('.gallery-grid');

// Generate gallery items
galleryImages.forEach((imagePath, index) => {
    // Create gallery item
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    
    // Create image
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = `Gallery image ${index + 1}`;
    img.loading = 'lazy';  // Lazy loading for performance
    
    // Add image to item
    galleryItem.appendChild(img);
    
    // Add item to grid
    galleryGrid.appendChild(galleryItem);
});