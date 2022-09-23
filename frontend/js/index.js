const getAllNews = () => {
  const get_all_news_API = "http://localhost/read-news/backend/get_allnews.php";
  $.getJSON(get_all_news_API, { format: "json" })
    .done((data) => console.log(data))
    .fail((err) => consolee.log(err));
};

// on load get all news from db:
window.addEventListener('load',getAllNews);