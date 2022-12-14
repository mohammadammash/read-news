const news_container = document.getElementById("main-content");

// turn each new received from server into html element and push it in the news main container
const showNews = (news) => {
  let newHTML;
  for (let single_new of news) {
    newHTML = `
      <div class="col-12 col-md-5 col-xl-3 border border-2 rounded">
        <h2 class="display-4 text-capitalize text-decoration-underline text-warning">
          ${single_new.title}
        </h2>
        <p class="fs-3 lh-lg">
          ${single_new.description}
        </p>
        <span class="fs-6 text-muted">~${single_new.created_at}</span>
      </div>`;
    news_container.innerHTML += newHTML;
  }
};

// fetch/get data from all_news_api
const getAllNews = () => {
  const get_all_news_API = "http://localhost/read-news/backend/get_allnews.php";
  $.getJSON(get_all_news_API, { format: "json" })
    .done((data) => showNews(data))
    .fail((err) => console.log(err));
};

// on load get all news from db:
window.addEventListener("load", getAllNews);
