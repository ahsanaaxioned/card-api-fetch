// global variable declaration start here
const url = "https://jsonplaceholder.typicode.com/posts";
const fetchList = document.querySelector(".fetch-list");
// global variable declaration start here
// element creat function start here
function showCard(data) {
    data.forEach(function (values) {
        let li = document.createElement("li");
        li.classList.add("fetch-item");
        li.innerHTML = `<span class="heading">${values.id}</span>
        <h3 class="title">${values.title}</h3>
        <p class="discription">${values.body}</p>`
        fetchList.appendChild(li);
    });
}
// element creat function end here
// fatching API start here
function fetchApi(api) {
    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            showCard(data);
        });
};
fetchApi(url);
// fatching API end here