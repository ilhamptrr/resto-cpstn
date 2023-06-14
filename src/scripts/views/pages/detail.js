import UrlParser from '../../routes/url-parser';
import data from './DATA.json';

const Detail = {
  async render() {
    return `
        <div id="detailRestaurant" class="detailRestaurant"></div>
    `;
  },
  
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await restaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detailRestaurant');
    restaurantContainer.innerHTML = `
        <div class="list_item">
            <img class="list_item_thumb" src="${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
        </div>
    `(restaurants);
  },
};

export default Detail;
