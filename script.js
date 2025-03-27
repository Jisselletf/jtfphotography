// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    
    // Function to open the lightbox with the clicked image
    function openLightbox(imageElement) {
        // Get the lightbox element and the image element inside it
        var lightbox = document.getElementById("lightbox");
        var lightboxImg = document.getElementById("lightboxImg");

        // Set the source of the lightbox image to the clicked image's source
        lightboxImg.src = imageElement.src;

        // Show the lightbox
        lightbox.style.display = "flex";
    }

    // Function to close the lightbox when clicked outside the image
    document.getElementById("lightbox").addEventListener("click", function(e) {
        // If the user clicks anywhere outside the image, close the lightbox
        if (e.target === this) {
            this.style.display = "none";
        }
    });

    // Attach the openLightbox function to all images in the gallery
    var galleryImages = document.querySelectorAll(".gallery-item img");
    galleryImages.forEach(function(img) {
        img.addEventListener("click", function() {
            openLightbox(img);
        });
    });

});
