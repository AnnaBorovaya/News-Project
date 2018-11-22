//Контроллер
const newsService = new NewsService(new CustomHttp());
const newsUI = new NewsUI();

const countrySelect = document.querySelector(".country");
const categorySelect = document.querySelector(".category");
const searchInput = document.querySelector(".search");
const form = document.querySelector(".form");
const close = document.querySelector(".close");

/**
 * callback - функция для перебора массива и вызова методов newsUI, отвечает за работу с каждым элементом массива и вызывается после получения ответа по get запросу
 * @param {Array} res 
 */
const callback = (res) => {
    const { articles, totalResults } = res;
    if(!totalResults) return newsUI.addEmptyMessage();
    newsUI.clearContainer();
    articles.forEach(news => newsUI.addNews(news));
};

/**
 * getCountryTechnolodyHandler - функция callback которая вызываеться при выборе пункта Select по категории и стране
 * внутри себе она вызывает метод fetchTopHeadlines в который передаеться callback(вызывается после получения ответа по get запросу)
 * а также параметры country и category которые необходимы для формирования get запроса
 */
const getCountryTechnolodyHandler = () => {
    const country = countrySelect.value;
    const category = categorySelect.value;
    searchInput.value = '';
    newsService.fetchTopHeadlines(callback, country, category);
};

/**
 * getSearchHandler - функция callback которая вызываеться при summit поля формы в поисковой строке
 * внутри себе она вызывает метод fetchSeachNews в который передаеться callback(вызывается после получения ответа по get запросу)
 * а также параметр search который необходим для формирования get запроса
 */
const getSearchHandler = (e) => {
    e.preventDefault();
    const search = searchInput.value;
    newsService.fetchSeachNews(callback, search);
};

countrySelect.addEventListener("change", getCountryTechnolodyHandler);
categorySelect.addEventListener("change", getCountryTechnolodyHandler);
form.addEventListener("submit", getSearchHandler);
close.addEventListener("click", () => {
    searchInput.value = '';
    getCountryTechnolodyHandler();
});
window.addEventListener("load", getCountryTechnolodyHandler);