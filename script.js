document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('closeButton');
    const clickSound = document.getElementById('clickSound');
    const popupImage = document.getElementById('popupImage');
    
    // Function to show popup with effects
    function showPopup(event) {
        // Only trigger if clicking directly on the container (not on the popup)
        if (event.target === container) {
            clickSound.currentTime = 0;
            clickSound.play();
            
            popupImage.src = './assets/aizen.jpg';
            
            // Show popup with animation
            popup.classList.remove('hidden');
            popup.classList.remove('fade-out');
            popup.classList.add('fade-in');
        }
    }
    
    // Function to hide popup with effects
    function hidePopup() {
        popup.classList.remove('fade-in');
        popup.classList.add('fade-out');
        
        // Wait for animation to complete before hiding
        setTimeout(function() {
            popup.classList.add('hidden');
        }, 500);
    }
    
    // Event listeners
    container.addEventListener('click', showPopup);
    closeButton.addEventListener('click', hidePopup);
    
    // Optional: Click outside to close
    window.addEventListener('click', function(event) {
        if (event.target !== popup && 
            !popup.contains(event.target) && 
            event.target !== container) {
            if (!popup.classList.contains('hidden')) {
                hidePopup();
            }
        }
    });
});