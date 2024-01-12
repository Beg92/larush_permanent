document.addEventListener('DOMContentLoaded', function () {
    // Initialize Glide.js with default perView value (3 images)
    const glide = new Glide('.glide', {
        type: 'carousel',
        perView: 3,
        autoplay: 3000,
    });

    glide.mount();

    // Update perView option based on screen width
    function updatePerView() {
        glide.update({
            perView: window.innerWidth < 768 ? 2 : 3, // Adjust the breakpoint (768px) as needed
        });
    }

    // Call the function initially and on window resize
    updatePerView();
    window.addEventListener('resize', updatePerView);

    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');

    // Event listener for opening the modal on image click
    document.querySelectorAll('.glide__slide img').forEach((img) => {
        img.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImage.src = this.src;
        });
    });

    // Event listener for closing the modal
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the modal if clicked outside the image
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});