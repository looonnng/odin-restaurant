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


const loadMenuPage = () => {};