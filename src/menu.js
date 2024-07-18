import myImage from './images/placeholder.png';

// Utility Function
export const createMyElement = (type, classNames = [], text = '', attributes = {}) => {
  const element = document.createElement(type);

  element.classList.add(...classNames);

  if (text) element.textContent = text;

  Object.keys(attributes).forEach((attr) =>
    element.setAttribute(attr, attributes[attr]),
  );

  return element;
};

const createSubtitle = (subtitle) => {
  return createMyElement('h2', ['content__subtitle'], subtitle);
};

const createCardContainer = () => {
  return createMyElement('div', ['card-container']);
};

const createCardWrapper = () => {
  return createMyElement('div', ['card', 'wrapper', 'col']);
};

export const createImage = (imageSource, altText) => {
  const imageWrapper = createMyElement('div', ['card__image']);

  const imageElement = new Image();
  imageElement.src = imageSource;
  imageElement.alt = altText;

  imageWrapper.appendChild(imageElement);

  return imageWrapper;
};

const createCardTitle = (cardTitle) => {
  return createMyElement('h3', ['card__title'], cardTitle);
};

const createCardText = (cardText) => {
  return createMyElement('p', ['card__text'], cardText);
};

const createCardInfo = (cardTitles = [], cardTexts = []) => {
  const cardInfo = createMyElement('div', ['card__info']);

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

  const cardInfo = createCardInfo(cardTitles, cardTexts);
  const cardImage = createImage(imageSource, altText);

  cardWrapper.appendChild(cardImage);
  cardWrapper.appendChild(cardInfo);

  return cardWrapper;
};

const createSection = (
  sectionClassNames = [],
  sectionSubtitle,
  cardTitles = [],
  cardTexts = [],
  imageSources = [],
  altTexts = [],
) => {
  const section = createMyElement('div', [...sectionClassNames]);

  const sectionSub = createSubtitle(sectionSubtitle);

  const cardContainer = createCardContainer();

  cardTitles.forEach((title, index) => {
    cardContainer.appendChild(
      createCard(
        [title],
        [cardTexts[index]],
        imageSources[index],
        altTexts[index],
      ),
    );
  });

  section.appendChild(sectionSub);
  section.appendChild(cardContainer);

  return section;
};

export const loadMenuPage = () => {
  const menuWrapper = createMyElement('div', ['menu-wrapper', 'col']);

  const starter = createSection(
    ['starters', 'col'],
    'Starter',
    ['Minimalist Miso Soup', 'Ambient Amuse-Bouche', 'Echoed Edamame'],
    [
      'A delicate miso broth with tofu, wakame seaweed, and spring onions.',
      'A trio of small bites, featuring seasonal ingredients that set the tone for your dining experience.',
      'Steamed edamame with a touch of sea salt and a hint of lime zest.',
    ],
    [myImage, myImage, myImage],
    ['Placeholder image', 'Placeholder image', 'Placeholder image'],
  );

  const mainCourse = createSection(
    ['main-course', 'col'],
    'Main Course',
    ['Dubbed Duck Breast', 'Sonic Mushroom Risotto', 'Subdued Sea Bass'],
    [
      'Seared duck breast with a honey-soy glaze, served with sautéed bokchoy and jasmine rice.',
      'Creamy risotto with wild mushrooms, truffle oil, and Parmesan cheese.',
      'Pan-seared sea bass with a citrus beurre blanc, accompanied by asparagus spears and fingerling potatoes.',
    ],
    [myImage, myImage, myImage],
    ['Placeholder image', 'Placeholder image', 'Placeholder image'],
  );

  const drinks = createSection(
    ['drinks', 'col'],
    'Drinks',
    ['Deep Dub Daiquiri', 'Minimalist Martini', 'Echo Espresso'],
    [
      'A classic daiquiri with a twist of fresh basil and lime.',
      'A clean, crisp martini with premium gin and a touch of dry vermouth, garnished with an olive.',
      'A rich, smooth espresso to complement your meal.',
    ],
    [myImage, myImage, myImage],
    ['PlaceHolder image', 'Placeholder image', 'Placeholder image'],
  );

  menuWrapper.append(starter, mainCourse, drinks);

  return menuWrapper;
};
