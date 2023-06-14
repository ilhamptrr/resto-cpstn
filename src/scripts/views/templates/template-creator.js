import data from './DATA.json';

const createRestaurantsItemTemplate = (restaurant) => `
  <div class="list_item">
    <img class="list_item_thumb" src="${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
    <div class="list_item_content">
      <h2 class="list_item_title"><a href="/#/detail">${restaurant.name}</a></h2>
      <ul class="list_item_city_rating">
        <li class="list_item_city">${restaurant.city}</li>
        <li>| Rating :</li>
        <li class="list_item_rating">${restaurant.rating}</li>
      </ul>
      <p class="list_item_desc">${restaurant.description.slice(0, 145)}...</p>
    </div>
  </div>
`;

data.restaurants.forEach((restaurant) => {
  const listItem = createRestaurantsItemTemplate(restaurant);
  listElement.innerHTML += listItem;
});


export { createRestaurantsItemTemplate };