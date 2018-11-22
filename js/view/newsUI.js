//класс который создает объект для вывода в разметку с методами для работы с каждой  новостью
class NewsUI {
    /**
     * constructor - метод для инициализации свойств
     */
    constructor() {
        this._container = document.querySelector(".news-container .row");
        this._defaultImage = "img/default-image.png";
    }

    /**
     * addNews - метод для вывода новостей в разметку
     * @param {*} news 
     */
    addNews(news) {
        const template = this._newsTemplate(news);
        this._container.insertAdjacentHTML("afterbegin", template);
    }

    /**
     * clearContainer - метод для очистки в разметке новостей после выбора категории и страны или введения запроса в search
     */
    clearContainer() {
        this._container.innerHTML = "";
    }
    
    /**
     * addEmptyMessage - фнкция по выводу в разметку сообщения об отсутствии новостей
     */
	addEmptyMessage(){
        const search = document.querySelector(".search-container");
        const message = document.querySelector('.message');
        if(message) search.removeChild(message); 
		const template = this._emptyMessageTemplate();
        search.insertAdjacentHTML("afterbegin", template);
		setTimeout(() => {
            const curent_message = document.querySelector('.message');
            if(curent_message) search.removeChild(curent_message); 
        },2000);
	}
    
    /**
     * _newsTemplate - метод для генерации шаблона карточки новотси в разметке
     * @param {object} param
     */
    _newsTemplate({urlToImage, url, title, description}) {
        return `
        <div class="col s12 l6"> 
            <div class="card">
                <div class="card-image">
                    <img src="${urlToImage || this._defaultImage}">
                </div>
                <div class="card-content">
                    <span class="card-title">${title}</span>
                    <p>${description || ""}</p>
                </div>
                <div class="card-action">
                    <a href="${url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>
        `;
    }

     /**
     * _emptyMessageTemplate - метод для генерации шаблона пустого сообщения в разметке
     */
	_emptyMessageTemplate() {
		return`
		<div class='message'>
			<div class="card-panel red lighten-2 center-align">
				<span class="white-text text-darken-2">Новости по вашему запросу не найдено</span>
			</div>
		</div>
		`;
	}
}
