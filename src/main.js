// image gallery handling
// select by clicking on thumbnails
let galleryItems = document.querySelectorAll('.gallery li');
for (let item of galleryItems) item.addEventListener('click', onClickGalleryItem);
function onClickGalleryItem(event) {
  let clickedListItem = event.target.closest('li');
  selectGalleryItem(clickedListItem);
}

// select by clicking on main image (next)
let galleryList = document.getElementsByClassName('gallery__main');
for (let gallery of galleryList) gallery.addEventListener('click', onClickGalleryMainImage);

function onClickGalleryMainImage(event) {
  let galleryEl = event.target.closest('.gallery');
  let currentlySelectedEl = galleryEl.querySelector('li[data-selected]');
  let nextElement;
  if (currentlySelectedEl.nextElementSibling) nextElement = currentlySelectedEl.nextElementSibling;
  else nextElement = galleryEl.querySelector('li:first-child');

  selectGalleryItem(nextElement);
}

// select by list element
function selectGalleryItem(listElement) {
  const attributeName = 'data-selected';
  const targetImageEl = listElement.querySelector('img');
  const galleryEl = listElement.closest('.gallery');
  const mainImageEl = galleryEl.querySelector('.gallery__main img');

  mainImageEl.src = targetImageEl.src; // set new image

  // remove selected states
  let galleryItems = galleryEl.querySelectorAll('li');
  for (let item of galleryItems) item.removeAttribute(attributeName);

  listElement.setAttribute(attributeName, ''); // mark image as selected

  // scroll current item into view
  listElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
}

// season handling
let toggleButtons = document.querySelectorAll('#season-toggle label');

for (let button of toggleButtons) button.addEventListener('click', onClickSeasonToggle);

function onClickSeasonToggle(event) {
  let seasonName = event.target.closest('label').getAttribute('for');
  let teaserSectionEl = document.getElementById('section-teaser');
  let seasonImage = {
    winter: 'teaser-winter.webp',
    summer: 'teaser-summer.webp',
  };

  // set background image
  teaserSectionEl.style.backgroundImage = `url(src/media/${seasonImage[seasonName]})`;
}
