//Сервиc для работы с API
class NewsService {
    /**
     * constructor - метод для инициализации свойств
     */
    constructor(http) {
        this._key = '4addfe27319746109156e88a4936adaf';
        this._url = 'https://newsapi.org/v2';
        this._country = 'ua';
        this._category = 'technology';
        this._http = http;
    };

    /**
     * fetchTopHeadlines - метод для отправки запроса get к серверу по категории и стране
     * @param {Function} callback 
     * @param {string} country 
     * @param {string} category 
     */
    fetchTopHeadlines(callback, country = this._country, category = this._category) {//callback.который будет вызван когда будут полученя данные с сервера
        this._http.get(`${this._url}/top-headlines?country=${country}&category=${category}&apiKey=${this._key}`, callback);
    };

    /**
     * fetchSeachNews - метод для отправки запроса get к серверу по поиску
     * @param {Function} callback 
     * @param {string} q 
     */
    fetchSeachNews(callback, q) {
        this._http.get(`${this._url}/everything?q=${q}&apiKey=${this._key}`, callback);
    };
}

