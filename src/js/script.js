var products = [
{
    id: 1,
    type: "pant",
    photo: "images/Dickies Loose Fit Double Knee Work Pant Black.jpg",
    name: "Loose Fit Double Knee",
    color: "Black",
    price: 50
},
{
    id: 2,
    type: "pant",
    photo: "images/Dickies Loose Fit Double Knee Work Pant Khaki.jpg",
    name: "Loose Fit Double Knee",
    color: "Khaki",
    price: 50
},
{
    id: 3,
    type: "pant",
    photo: "images/Dickies Original 874 Work Pant Black.jpg",
    name: "Original 874 Work Pant",
    color: "Black",
    price: 65
},
{
    id: 4,
    type: "pant",
    photo: "images/Dickies Original 874 Work Pant Khaki.jpg",
    name: "Original 874 Work Pant",
    color: "Khaki",
    price: 65
},
{
    id: 5,
    type: "pant",
    photo: "images/Red Kap Industrial Cargo Pant Black.jpg",
    name: "Red Kap Industrial Cargo Pant",
    color: "Black",
    price: 80
},
{
    id: 6,
    type: "pant",
    photo: "images/Red Kap Industrial Cargo Pant Khaki.jpg",
    name: "Red Kap Industrial Cargo Pant",
    color: "Khaki",
    price: 80
},
{
    id: 7,
    type: "t_shirt",
    photo: "images/Dickies Short Sleeve Pocket Tee Big-tall Black.jpg",
    name: "Short Sleeve Pocket",
    color: "Black",
    price: 40

},
{
    id: 8,
    type: "t_shirt",
    photo: "images/Dickies Short Sleeve Pocket Tee Big-tall White.jpg",
    name: "Short Sleeve Pocket",
    color: "Black",
    price: 40
},
{
    id: 9,
    type: "t_shirt",
    photo: "images/Dickies Big & Tall Short Sleeve Tri-Color Logo Graphic T-Shirt Black.jpg",
    name: "Big & Tall Short Sleeve",
    color: "Black",
    price: 25
},
{
    id: 10,
    type: "t_shirt",
    photo: "images/Dickies Men's Big & Tall Short Sleeve Tri-Color Logo Graphic T-Shirt Gray.jpg",
    name: "Big & Tall Short Sleeve",
    color: "Gray",
    price: 25
},
{
    id: 11,
    type: "t_shirt",
    photo: "images/Dickies Short Sleeve Heavyweight Crew Neck Black.jpg",
    name: "Dickies Short Sleeve",
    color: "Black",
    price: 15
},
{
    id: 12,
    type: "t_shirt",
    photo: "images/Dickies Short Sleeve Heavyweight Crew Neck White.jpg",
    name: "Dickies Short Sleeve",
    color: "White",
    price: 15
},
{
    id: 13,
    type: "hoodie",
    photo: "images/Dickies Big Tall Pullover Fleece Hoodie.jpg",
    name: "Big Tall Pullover Fleece Hoodie",
    color: "Black",
    price: 35

},
{
    id: 14,
    type: "hoodie",
    photo: "images/Dickies Full Zip Fleece Hoodie, Black, Medium.jpg",
    name: "Full Zip Fleece Hoodie",
    color: "Black",
    price: 35
},
{
    id: 15,
    type: "hoodie",
    photo: "images/Dickies Big and Tall Wordmark DWR Pullover Fleece.jpg",
    name: "Big and Tall Wordmark DWR Pullover Fleece",
    color: "Gray",
    price: 60
},
{
    id: 16,
    type: "hoodie",
    photo: "images/Dickies Graphic Fleece Hoodie.jpg",
    name: "Graphic Fleece Hoodie",
    color: "Gray",
    price: 45
},
{
    id: 17,
    type: "hoodie",
    photo: "images/Dickies Icon Graphic Fleece Black.jpg",
    name: "Icon Graphic Fleece",
    color: "Black",
    price: 70
},
{
    id: 18,
    type: "hoodie",
    photo: "images/Dickies Icon Graphic Fleece Gray.jpg",
    name: "Icon Graphic Fleece",
    color: "Gray",
    price: 70
}
];

console.log('dusmkad');

function loadProducts() {
    let pants = '';
    let t_shirts = '';
    let hoodies = '';
    let add = '';

    console.log('dusmkad');
    shuffleArray(products);
    products.forEach((product) => {
        add = makeProduct(product);
        console.log(add);
        switch (product.type) {
            case 'pant':
                pants += add;
                break;
            case 't_shirt':
                t_shirts += add;
                break;
            case 'hoodie':
                hoodies += add;
                break;
        }
    });

    $("#pants").append(pants);
    $('#t_shirts').append(t_shirts);
    $('#hoodies').append(hoodies);
}
loadProducts();
function makeProduct(item) {
return '<li>' +
            '<div class="product-card">' +
                '<div class="product">' +
                    '<img class="" src="' + item.photo + '" alt="Product Photo">' +
                '</div>' +
                '<p class="probuct-card-title">' + item.name + ' ' + item.color + '</p>' +
                '<p class="probuct-card-price">' + item.price + '$</p>' +
            '</div>' +
        '</li>';
}

function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
}

// '<div class="add-button">' +
//     '<button onclick="addToCart(' + item.id + ')">Add to Cart</button>' +
// '</div>' +

// LINKS
function qwerty1(a, b) {
for( let i = a; i < b; i++ ) document.getElementsByClassName("header_icon")[i].style = "fill: #ffffff"
}
function qwerty(a, b) {
for( let i = a; i < b; i++ ) document.getElementsByClassName("header_icon")[i].style = "fill: #ff0000"
}

// LIKE
let arrays_boo_like = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]

function like(n) {
let tempp = document.getElementsByClassName("heart_img")[n]
if( tempp.src == "https://a.lmcdn.ru/static/22.12.15_1/assets/heart.99c595b3.svg" ) {
    tempp.src = "https://a.lmcdn.ru/static/22.12.15_1/assets/heart.99c595b3.svg"
}
else {
    tempp.src = "https://a.lmcdn.ru/static/22.12.15_1/assets/heart_selected.41219963.svg"
}
arrays_boo_like[n] = !arrays_boo_like[n]
}

function qweqwe(n) {
    if( arrays_boo_like[n] ) {
        let tempp = document.getElementsByClassName("heart_img")[n]
        if( tempp.src == "https://a.lmcdn.ru/static/22.12.15_1/assets/heart_selected.41219963.svg" ) {
            tempp.src = "https://a.lmcdn.ru/static/22.12.15_1/assets/heart.99c595b3.svg"
        }
        else {
            tempp.src = "https://a.lmcdn.ru/static/22.12.15_1/assets/heart_selected.41219963.svg"
        }
    }
}

let boo_sign_in = true
    function sign_in() {
    if( boo_sign_in ) document.getElementById('sign_in_close').style = "display: flex;"
    else document.getElementById('sign_in_close').style = "display: none;"
    boo_sign_in = !boo_sign_in
}