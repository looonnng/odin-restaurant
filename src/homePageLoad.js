export const homePageLoad = () => {
  const contentTitle = document.createElement('h1');
  contentTitle.textContent = 'Echo Chamber';
  contentTitle.classList.add('content__title');

  const contentAbout = document.createElement('div');
  contentAbout.classList.add('content__about');

  const contentText = document.createElement('p');
  contentText.textContent =
    'Welcome to Echo Chamber, where minimalist beats meet culinary artistry. Located in the heart of the city, our restaurant offers a unique dining experience that blends the deep, hypnotic sounds of dub and minimalist techno with innovative cuisine.';

  contentAbout.appendChild(contentText);

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

  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('content-wrapper', 'col');
  contentWrapper.append(
    contentTitle,
    contentAbout,
    contentHour,
    contentLocation,
  );

  return contentWrapper;
};
