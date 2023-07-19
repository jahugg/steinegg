let galleryItems = document.querySelectorAll('#gallery li:not(:first-child)');

for (let item of galleryItems) item.addEventListener('click', onClickGalleryItem);

function onClickGalleryItem(event) {
    const attributeName = "data-selected";
    let clickedImageEl = event.target;
    let mainImageEl = document.querySelector('#gallery li:first-child img');

    // set new main image source
    mainImageEl.src = clickedImageEl.src;

    // remove selected states
    let galleryItems = document.querySelectorAll('#gallery li');
    for (let item of galleryItems) item.removeAttribute(attributeName);

    // mark image as selected
    clickedImageEl.closest("li").setAttribute(attributeName, '');
}
