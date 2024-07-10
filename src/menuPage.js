import myImage from './images/placeholder1.png';

// Utility Function
const createElement = (type, classNames = [], text = '', attributes = {}) => {
  const element = document.createElement(type);

  element.classList.add(...classNames);

  if (text) element.textContent = text;

  Object.keys(attributes).forEach((attr) =>
    element.setAttribute(attr, attributes[attr]),
  );

  return element;
};

const createSubtitle = (subtitle) => {
  return createElement('h2', ['content__subtitle'], subtitle);
};

const createCardContainer = () => {
  return createElement('div', ['card-container']);
};

const createCardWrapper = () => {
  return createElement('div', ['card', 'wrapper', 'col']);
};

const createCardImage = (imageSource, altText) => {
  const imageWrapper = createElement('div', ['card__image']);

  const imageElement = new Image();
  imageElement.src = imageSource;
  imageElement.alt = altText;

  imageWrapper.appendChild(imageElement);

  return imageWrapper;
};

const loadMenuPage = () => {};