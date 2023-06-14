import data from './DATA.json';

const List = {
  async render() {
    return `
      <section class="content">
        <div class="latest">
          <h1>Explore Restaurant</h1>
          <div class="list" id="tes"></div>
        </div>
      </section>
    `;
  },
  
  async afterRender() {
    const listElement = document.querySelector('#tes');
    
    data.restaurants.forEach((restaurant) => {
      const listItem = `
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
      
      listElement.innerHTML += listItem;
    });
  },
};

export default List;
