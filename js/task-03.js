const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

const makeGalleryElements = ({ url, alt }) => {

  return `
  <li class="gallery__item">
    <img src=${url} alt=${alt} width="370">
  </li>
  `;
};

const galleryImages = images.map(makeGalleryElements).join('');
console.log(galleryImages)

galleryList.insertAdjacentHTML('afterbegin', galleryImages);

galleryList.style.display = 'flex';
galleryList.style.flexDirection = 'column';
galleryList.style.listStyle = 'none';
