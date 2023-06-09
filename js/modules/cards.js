
import { getDayInfo } from "./date.js";


    //функция создания карточек из базы данных
//функция фильтров карточек



//create cards
//функция принимает базу данных и ID родителя, перебирает базу данных и добавляет код HTML(сами карточки)
function addAllCards(dataBase, idParent) {
    let itemCard = '';
    let parent = document.querySelector(idParent);
    dataBase.forEach((menu) => {
        if (menu.category === idParent){
            itemCard +=
            `
    <div class="catalog-card theme" data-brand="${menu.brand}">
        <div class="card-body" >

        <div class="card-img ">
            <img src=${menu.src1} alt="${menu.alt}">
        </div>

        <div class="card-info__title">
            <h3>${menu.title}</h3>
        </div>
        <div class="card-info__subtitle">
            <h3>${menu.subtitle}</h3>
        </div>
        <div class="card-price">Цена: ${menu.price} рублей</div>
        <div class="card-data">Дата выпуска: ${getDayInfo(menu.data)}</div>
        <div class="card-btn"><a href="#" class="card-btn__link" id='${menu.id}'>Купить</a></div>
    </div>
</div>
    `;
        }
        
    })
    parent.insertAdjacentHTML('afterbegin', itemCard);
}







//filter
//Принимает brand табов и brand категорий карточек, ну и добавляет show hide
function filterAllCards(idCategory, idLinks) {
    const parentCards = document.querySelector(idCategory);
    const allCards = parentCards.querySelectorAll('.catalog-card');//
    const parentLinks = document.querySelector(idLinks);
    const phoneFilterLink = parentLinks.querySelectorAll('.filter__link');

    phoneFilterLink.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            allCards.forEach(card => {
                card.classList.remove('show');

                card.classList.add('hide');
                if (link.getAttribute('brand') === 'all') {
                    card.classList.remove('hide');
                    card.classList.add('show');
                } else {
                    filterShowCard(link.getAttribute('brand'), allCards);
                    // console.log(link.getAttribute('brand'));
                }


            })

        })
    })
    //добавляет show по дата аттрибуту
    function filterShowCard(cardBrand, cards) {
        cards.forEach(card => {
            if (card.getAttribute('data-brand') === cardBrand) {
                
                card.classList.add('show')
            }
        })
    }


}






function ggg() {
    console.log('111');
}

export {addAllCards,filterAllCards,ggg };
