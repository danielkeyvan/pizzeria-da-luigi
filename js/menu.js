// Menu Filter Functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const menuCategories = document.querySelectorAll('.menu-category');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get filter value
        const filter = btn.getAttribute('data-filter');
        
        // Show/hide categories
        menuCategories.forEach(category => {
            if (filter === 'all') {
                category.style.display = 'block';
            } else {
                const categoryFilter = category.getAttribute('data-category');
                if (categoryFilter === filter) {
                    category.style.display = 'block';
                } else {
                    category.style.display = 'none';
                }
            }
        });
    });
});

console.log('Menu filter script loaded');