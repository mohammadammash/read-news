
// turn each new received from server into html element and push it in the news main container
const showNews = (news)=>{
    for(let single_new of news){
    const newHTML = `<h1 class="display-1 text-center text-uppercase mt-5">all news</h1>
    <main
      class="row mx-5 font-monospace justify-content-md-center justify-content-xl-between gap-5 gap-md-2"
    >
      <div class="col-12 col-md-5 col-xl-3 border border-2 rounded">
        <h2 class="display-4 text-capitalize text-decoration-underline text-warning">
          ${single_new.title}
        </h2>
        <p class="fs-3 lh-lg">
          ${single_new.text}
        </p>
        <span class="fs-6 text-muted">~${single_new.date}</span>
      </div> -->`
    }
}

// fetch/get data from all_news_api
const getAllNews = () => {
  let all_news;
  const get_all_news_API = "http://localhost/read-news/backend/get_allnews.php";
  $.getJSON(get_all_news_API, { format: "json" })
    .done((data) => showNews(data))
    .fail((err) => consolee.log(err));

};

// on load get all news from db:
window.addEventListener('load',getAllNews);