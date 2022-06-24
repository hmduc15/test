var review = document.querySelector(".review");
const reviews = [{
    id: 1,
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    nameUser: "Minh Duc",
    content: "Hay qua",
    rate: 3

}, {
    id: 2,
    avatar: "https://images.unsplash.com/photo-1644982654131-79f434ac0c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    nameUser: "Minh",
    content: "qua hay luon",
    rate: 4
}, {
    id: 3,
    avatar: "https://images.unsplash.com/photo-1656018506973-3dd33a208df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    nameUser: "Hoang",
    content: "qua dinh luon",
    rate: 5
}, {
    id: 4,
    avatar: "https://images.unsplash.com/photo-1656051442968-8abb719295f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    nameUser: "Duc",
    content: "that tuyet voi",
    rate: 2
}, {
    id: 5,
    avatar: "https://images.unsplash.com/photo-1655992944141-a16e719b3287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    nameUser: "Duc Minh",
    content: "hay qua troi",
    rate: 1
}];
const rd_reviews = () => {
    return reviews[Math.floor(Math.random() * reviews.length)];
}
var arrRandom = [];
var arrSort = [];
for (let i = 1; i <= reviews.length; i++) {
    arrRandom.push(rd_reviews(reviews));
}

function unique(arr) {
    for (let i = 1; i <= arr.length; i++) {
        arrSort = arrRandom.filter((item) => {
            return arrSort.includes(item) ? '' : arrSort.push(item)
        })
        return arrSort;
    }
}
unique(arrRandom);

function htmlRate(count) {
    var star = "";
    for (let i = 1; i <= count; i++) {
        star += '<ion-icon name="star"></ion-icon>'
    }
    for (let i = 1; i <= 5 - count; i++) {
        star += '<ion-icon name="star-outline"></ion-icon>'
    }
    return star
}

const htmls = arrSort.map((item, index) => {
    console.log(item)
    return `<div class="user">
            <div class="user-avatar">
                <img src="${item.avatar}" alt="">
            </div>
            <p class="user-name">
              ${item.nameUser}
            </p>` + htmlRate(item.rate) +
        `</div>
        <div class="content">
            <h4 class="content-review">
             ${item.content}
            </h4>
        </div>`

});

review.innerHTML = (htmls).join();