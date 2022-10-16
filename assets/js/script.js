// global variable declaration start here
const url = "https://jsonplaceholder.typicode.com/posts",
    fetchList = document.querySelector(".fetch-list"),
    btn = document.querySelector(".btn")
let result,
    limit = 10,
    i = 0;
// global variable declaration start here
// btn event start here
fetchList.innerText = "";
if (btn) {
    btn.addEventListener("click", fetchCard);
}
function fetchCard() {
    for (i; i < limit; i++) {
        if (i == 99) {
            btn.classList.add("btn-hide");
        }
        let li = document.createElement("li");
        li.classList.add("fetch-item");
        li.innerHTML = `<span class="heading">${result[i].id}</span>
        <h3 class="title">${result[i].title}</h3>
        <p class="discription">${result[i].body}</p>`
        fetchList.appendChild(li);
    }
    i = limit;
    limit += 10;
}
// btn event start here
// fatching API start here
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        setData(data);
    })
    .catch(function catchError(error) {
        console.log(error);
    });
function setData(data) {
    result = data;
    fetchCard();
}
// fatching API end here