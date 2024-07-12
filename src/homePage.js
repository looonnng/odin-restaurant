export const loadHomePage = () => {
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

  const contentHour = document.createElement('div');
  contentHour.classList.add('content__hour');

  const contentHourSubtitle = document.createElement('h2');
  contentHourSubtitle.classList.add('content__subtitle');
  contentHourSubtitle.textContent = 'Hours';

  const contentHourList = document.createElement('ul');
  contentHourList.classList.add('content__list');

  const hours = [
    'Monday - Thursday: 6:00 PM - 10:00 PM',
    'Friday - Saturday: 6:00 PM - 1:00 AM',
    'Sunday: 6:00 PM - 9:00 PM',
  ];

  hours.forEach((hour) => {
    const contentHourListItem = document.createElement('li');
    contentHourListItem.classList.add('content__list-item');
    contentHourListItem.textContent = hour;
    contentHourList.appendChild(contentHourListItem);
  });

  contentHour.append(contentHourSubtitle, contentHourList);

  const contentLocation = document.createElement('div');
  contentLocation.classList.add('content__location');

  const contentLocationSubtitle = document.createElement('h2');
  contentLocationSubtitle.classList.add('content__subtitle');
  contentLocationSubtitle.textContent = 'Location';

  const contentLocationList = document.createElement('ul');
  contentLocationList.classList.add('content__list');

  const locations = [
    'Echo Chamber Eatery',
    '456 Serenity Street,',
    'City Center, Metropolis',
  ];

  locations.forEach((location) => {
    const contentLocationListItem = document.createElement('li');
    contentLocationListItem.classList.add('content__list-item');
    contentLocationListItem.textContent = location;
    contentLocationList.appendChild(contentLocationListItem);
  });

  contentLocation.append(contentLocationSubtitle, contentLocationList);

  const contactText = document.createElement('div');
  contactText.classList.add('col');
  contactText.append(contentHour, contentLocation);

  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('content-wrapper', 'row');
  contentWrapper.append(contactMapWrapper, contactText);

  return contentWrapper;
};
