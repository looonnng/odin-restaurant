export const loadContactPage = () => {
  const contactMapWrapper = document.createElement('div');
  contactMapWrapper.classList.add('contact__map-wrapper');
  const contactMap = document.createElement('iframe');
  contactMap.classList.add('contact__map');
  contactMap.setAttribute(
    'src',
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14936.051737239643!2d-87.0710941!3d20.6283296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e43f0e2c54f3f%3A0xe3f597227e1aaa8f!2sAnimallandia%20Maya!5e0!3m2!1sen!2sus!4v1720733205630!5m2!1sen!2sus',
  );
  contactMap.style.width = '600px';
  contactMap.style.height = '450px';

  contactMapWrapper.appendChild(contactMap);

  const contactHour = document.createElement('div');
  contactHour.classList.add('contact__hour');

  const contactHourSubtitle = document.createElement('h2');
  contactHourSubtitle.classList.add('content__subtitle');
  contactHourSubtitle.textContent = 'Hours';

  const contactHourList = document.createElement('ul');
  contactHourList.classList.add('content__list');

  const hours = [
    'Monday - Thursday: 6:00 PM - 10:00 PM',
    'Friday - Saturday: 6:00 PM - 1:00 AM',
    'Sunday: 6:00 PM - 9:00 PM',
  ];

  hours.forEach((hour) => {
    const contactHourListItem = document.createElement('li');
    contactHourListItem.classList.add('content__list-item');
    contactHourListItem.textContent = hour;
    contactHourList.appendChild(contactHourListItem);
  });

  contactHour.append(contactHourSubtitle, contactHourList);

  const contactLocation = document.createElement('div');
  contactLocation.classList.add('contact__location');

  const contactLocationSubtitle = document.createElement('h2');
  contactLocationSubtitle.classList.add('content__subtitle');
  contactLocationSubtitle.textContent = 'Location';

  const contactLocationList = document.createElement('ul');
  contactLocationList.classList.add('content__list');

  const locations = [
    'Echo Chamber Eatery',
    '456 Serenity Street,',
    'City Center, Metropolis',
  ];

  locations.forEach((location) => {
    const contactLocationListItem = document.createElement('li');
    contactLocationListItem.classList.add('content__list-item');
    contactLocationListItem.textContent = location;
    contactLocationList.appendChild(contentLocationListItem);
  });

  contactLocation.append(contactLocationSubtitle, contactLocationList);

  const contactText = document.createElement('div');
  contactText.classList.add('col');
  contactText.append(contactHour, contactLocation);

  const contactWrapper = document.createElement('div');
  contactWrapper.classList.add('contact-wrapper', 'row');
  contactWrapper.append(contactMapWrapper, contactText);

  return contactWrapper;
};
