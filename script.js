document.addEventListener('DOMContentLoaded', function () {
    const glide = new Glide('.glide', {
        type: 'carousel',
        perView: 3,
        autoplay: 3000,
    });

    glide.mount();

    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');

    // Event listener for opening the modal on image click
    document.querySelectorAll('.glide__slide img').forEach((img) => {
        img.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImage.src = this.getAttribute('data-image');
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