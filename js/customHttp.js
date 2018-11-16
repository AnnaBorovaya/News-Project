class CustomHttp {
    /**
     * get - метод для формирования get запроса к api
     * @param {string} url 
     * @param {Function} callback 
     */
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => {
            callback(JSON.parse(xhr.responseText));
        });
    }
}