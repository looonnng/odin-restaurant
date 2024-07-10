import myImage from './images/placeholder.png';

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

const createCardTitle = (cardTitle) => {
  return createElement('h3', ['card__title'], cardTitle);
};

const createCardText = (cardText) => {
  return createElement('p', ['card__text'], cardText);
};

const createCardInfo = (cardTitles = [], cardTexts = []) => {
  const cardInfo = createElement('div', ['card__info']);

  cardTitles.forEach((title, index) => {
    cardInfo.appendChild(createCardTitle(title));
    cardInfo.appendChild(createCardText(cardTexts[index]));
  });

  return cardInfo;
};

const createCard = (
  cardTitles = [],
  cardTexts = [],
  imageSource = '',
  altText = '',
) => {
  const cardWrapper = createCardWrapper();

  cardTitles.forEach((_, index) => {
    const cardInfo = createCardInfo(cardTitles, cardTexts);
    const cardImage = createCardImage(imageSource, altText);

    cardWrapper.appendChild(cardImage);
    cardWrapper.appendChild(cardInfo);
  });

  return cardWrapper;
};
const loadMenuPage = () => {};
