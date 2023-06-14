import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
    hamburger: document.querySelector('#hamburger'),
    drawer: document.querySelector('#drawer'),
    hero: document.querySelector('.hero'),
    main: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});
  
window.addEventListener('load', () => {
    app.renderPage();
});

/*
    Data Restaurants
*/
/*
import ('../DATA.json').then(({default: jsonData}) => {
    console.log(jsonData)
    let dataR = jsonData['restaurants']
    let dataList = '';
    dataR.forEach(function(data) {
        dataList +=`
        <div class="list_item">
            <img class="list_item_thumb" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
            <div class="list_item_content">
                <h2 class="list_item_title"><a href="#maincontent">${data['name']}</a></h2>
                <ul class="list_item_city_rating">
                    <li class="list_item_city">${data['city']}</li>
                    <li>| Rating :</li>
                    <li class="list_item_rating">${data['rating']}</li>
                </ul>
                <p class="list_item_desc">${data['description'].slice(0, 145)}...</p>
            </div>
        </div>
        `;
    });
    document.querySelector('#tes').innerHTML = dataList;  
});
*/