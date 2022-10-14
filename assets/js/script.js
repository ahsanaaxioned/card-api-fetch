// global variable declaration start here
const url = "https://jsonplaceholder.typicode.com/posts";
const fetchList = document.querySelector(".fetch-list");
const btn = document.querySelector(".btn");
let result;
let limit = 10;
let i = 0;
// global variable declaration start here
// fatching API start here
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        setData(data);
    });
function setData(data) {
    result = data;
}
// fatching API end here
btn.addEventListener("click", firstShow);

function firstShow() {
    for (i; i < limit; i++) {
        if (i == 100) {
            btn.classList.add("btn-active");
            let p = document.createElement("p");
            p.innerText = "no more data left to show...Thank you..!";
            document.body.appendChild(p)
        }
        let li = document.createElement("li");
        li.classList.add("fetch-item");
        li.innerHTML = `<span class="heading">${result[i].id}</span>
        <h3 class="title">${result[i].title}</h3>
        <p class="discription">${result[i].body}</p>`
        fetchList.appendChild(li);
    }
    i = limit;
    limit += limit;
};















