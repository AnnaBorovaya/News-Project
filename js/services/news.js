
//Сервиc для работы с API
class NewsService {
    constructor(http) {
        this._key = '3d5a9465f40346a49a18e1e87834d50b';
        this._url = 'https://newsapi.org/v2';
        this._country = 'ua';
        this._category = 'technology';
        this._http = http;
        this._q = '';
    }

    /**
     * 
     * @param {*} callback 
     * @param {*} country 
     * @param {*} category 
     */
    fetchTopHeadlines(callback, country = this._country, category = this._category) {
        this._http.get(`${this._url}/top-headlines?country=${country}&category=${category}&apiKey=${this._key}`, callback);
    }
    /*fetchSeachNews(callback, q = this._q) {
        this._http.get(`${this._url}/top-headlines?q=${q}&apiKey=${this._key}`, callback);
    }*/
}

