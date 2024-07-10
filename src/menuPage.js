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

const createSection = (
  sectionClassName,
  sectionSubtitle,
  cardTitles = [],
  cardTexts = [],
  imageSources = [],
  altTexts = [],
) => {
  const section = createElement('div', [sectionClassName]);

  const sectionSub = createSubtitle(sectionSubtitle);

  const cardContainer = createCardContainer();

  cardTitles.forEach((title, index) => {
    cardContainer.appendChild(
      createCard([title], [cardTexts], imageSources[index], altTexts[index]),
    );
  });

  section.appendChild(sectionSub);
  section.appendChild(cardContainer);

  return section;
};

export const loadMenuPage = () => {
  const menuContainer = createElement('div', ['menu-container']);

  const starter = createSection(
    'starters',
    'Starter',
    ['Minimalist Miso Soup', 'Ambient Amuse-Bouche', 'Echoed Edamame'],
    [
      'A delicate miso broth with tofu, wakame seaweed, and spring onions.',
      'A trio of small bites, featuring seasonal ingredients that set the tone for your dining experience.',
      'Steamed edamame with a touch of sea salt and a hint of lime zest.',
    ],
    [myImage, myImage, myImage],
    ['Placeholder image'],
  );

  const mainCourse = createSection(
    'main-course',
    'Main Course',
    ['Dubbed Duck Breast', 'Sonic Mushroom Risotto', 'Subdued Sea Bass'],
    [
      'Seared duck breast with a honey-soy glaze, served with sautéed bokchoy and jasmine rice.',
      'Creamy risotto with wild mushrooms, truffle oil, and Parmesan cheese.',
      'Pan-seared sea bass with a citrus beurre blanc, accompanied by asparagus spears and fingerling potatoes.',
    ],
    [myImage, myImage, myImage],
    ['Placeholder image'],
  );

  menuContainer.append(starter, mainCourse);

  return menuContainer;
};
