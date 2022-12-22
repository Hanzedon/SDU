let products = [
{
    id: 1,
    type: "pant",
    photo: "images/Dickies Loose Fit Double Knee Work Pant Black.jpg",
    name: "Loose ",
    color: "Black",
    price: 50
},
{
    id: 2,
    type: "pant",
    photo: "images/Dickies Loose Fit Double Knee Work Pant Khaki.jpg",
    name: "Loose ",
    color: "Khaki",
    price: 50
},
{
    id: 3,
    type: "pant",
    photo: "images/Dickies Original 874 Work Pant Black.jpg",
    name: "Original ",
    color: "Black",
    price: 65
},
{
    id: 4,
    type: "pant",
    photo: "images/Dickies Original 874 Work Pant Khaki.jpg",
    name: "Original ",
    color: "Khaki",
    price: 65
},
{
    id: 5,
    type: "pant",
    photo: "images/Red Kap Industrial Cargo Pant Black.jpg",
    name: "Red Kap ",
    color: "Black",
    price: 80
},
{
    id: 6,
    type: "pant",
    photo: "images/Red Kap Industrial Cargo Pant Khaki.jpg",
    name: "Red Kap ",
    color: "Khaki",
    price: 80
},
{
    id: 7,
    type: "t_shirt",
    photo: "images/Dickies Short Sleeve Pocket Tee Big-tall Black.jpg",
    name: "Short ",
    color: "Black",
    price: 40

},
{
    id: 8,
    type: "t_shirt",
    photo: "images/Dickies Short Sleeve Pocket Tee Big-tall White.jpg",
    name: "Short ",
    color: "Black",
    price: 40
},
{
    id: 9,
    type: "t_shirt",
    photo: "images/Dickies Big & Tall Short Sleeve Tri-Color Logo Graphic T-Shirt Black.jpg",
    name: "Big & Tall ",
    color: "Black",
    price: 25
},
{
    id: 10,
    type: "t_shirt",
    photo: "images/Dickies Men's Big & Tall Short Sleeve Tri-Color Logo Graphic T-Shirt Gray.jpg",
    name: "Big & ",
    color: "Gray",
    price: 25
},
{
    id: 11,
    type: "t_shirt",
    photo: "images/Dickies Short Sleeve Heavyweight Crew Neck Black.jpg",
    name: "Dickies ",
    color: "Black",
    price: 15
},
{
    id: 12,
    type: "t_shirt",
    photo: "images/Dickies Short Sleeve Heavyweight Crew Neck White.jpg",
    name: "Dickies ",
    color: "White",
    price: 15
},
{
    id: 13,
    type: "hoodie",
    photo: "images/Dickies Big Tall Pullover Fleece Hoodie.jpg",
    name: "Big Tall ",
    color: "Black",
    price: 35

},
{
    id: 14,
    type: "hoodie",
    photo: "images/Dickies Full Zip Fleece Hoodie, Black, Medium.jpg",
    name: "Full Zip ",
    color: "Black",
    price: 35
},
{
    id: 15,
    type: "hoodie",
    photo: "images/Dickies Big and Tall Wordmark DWR Pullover Fleece.jpg",
    name: "Big and ",
    color: "Gray",
    price: 60
},
{
    id: 16,
    type: "hoodie",
    photo: "images/Dickies Graphic Fleece Hoodie.jpg",
    name: "Graphic ",
    color: "Gray",
    price: 45
},
{
    id: 17,
    type: "hoodie",
    photo: "images/Dickies Icon Graphic Fleece Black.jpg",
    name: "Icon ",
    color: "Black",
    price: 70
},
{
    id: 18,
    type: "hoodie",
    photo: "images/Dickies Icon Graphic Fleece Gray.jpg",
    name: "Icon ",
    color: "Gray",
    price: 70
}
];

// HOME
function loadGoods() {
    let pants = '';
    let t_shirts = '';
    let hoodies = '';
    let add = '';

    shuffleArray(products);
    products.forEach((product) => {
        add = makeProduct(product);
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

function makeProduct(item) {
return  '<div class="product" onmouseover="like_heart()">' +
            '<div class="icon-like">' +
                '<img src="https://a.lmcdn.ru/static/22.12.19/assets/heart.99c595b3.svg"></img>' +
            '</div>' +
            '<div class="" onclick="saveID(' + item.id + ')">' +
                '<div class="goods-img">' +
                    '<img class="" src="' + item.photo + '" alt="Goods Photo">' +
                '</div>' +
                '<h3>' + item.name + ' ' + item.color + '</h3>' +
                '<p>' + item.price + '$</p>' +
            '</div>' +
        '</div>';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// GOODS
function saveID(n) {
    localStorage.setItem('id', n-1);
    window.location = "goods.html";
}

function loadProduct() {
    let index = localStorage.getItem('id');
    $("#product").append(
                    '<div class="goods">' +
                        '<div class="goods-img">' +
                            '<img class="" src="' + products[index].photo + '" alt="Goods Photo">' +
                        '</div>' +
                        '<div class="about">' +
                            '<h3>' + products[index].name + '</h3>' +
                            '<p>' + products[index].price + '</p>' +
                        '</div>' +
                    '</div>'
    );
}


function submit() {
    let user_name = $('#user_name').val();
    let first_name = $('#first_name').val();
    let last_name = $('#last_name').val();
    let email = $('#email').val();
    let password1 = $('#password1').val();
    let password2 = $('#password2').val();
    let boo_regiter = true;
    let user_array = getUsers();

    if( user_name.length < 5 || user_name == '' ) {
        document.getElementById('user_name').style = 'background-color: rgb(255, 0, 0, 0.4)';
        document.getElementById("user_name").placeholder = "jfiejf";
        boo_regiter = false;
    }
    else {
        // let index = qwerqwer.indexOf(user_name);
        // console.log( index );

        // if( index === -1 && user_array.length > 0 ) {
        //     console.log( "INDEXINDEX" );
        //     document.getElementById('user_name').style = 'background-color: rgb(255, 0, 0, 0.4)';
        //     document.getElementById("user_name").placeholder = "NickName ERROR";
        //     boo_regiter = false;
        // }
        // else {
            document.getElementById('user_name').style = 'background-color: rgb(0, 0, 0, 0.1)';
            boo_regiter = true;
        // }
    }
    if( first_name.length < 5 || first_name == '' ) {
        document.getElementById('first_name').style = 'background-color: rgb(255, 0, 0, 0.4)';
        document.getElementById("first_name").placeholder = "jfiejf";
        boo_regiter = false;
    }
    else {
        document.getElementById('first_name').style = 'background-color: rgb(0, 0, 0, 0.1)';
        boo_regiter = true;
    }
    if( last_name.length < 5 || last_name == '' ) {
        document.getElementById('last_name').style = 'background-color: rgb(255, 0, 0, 0.4)';
        document.getElementById("last_name").placeholder = "jfiejf";
        boo_regiter = false;
    }
    else {
        document.getElementById('last_name').style = 'background-color: rgb(0, 0, 0, 0.1)';
        boo_regiter = true;
    }
    if( email.length < 5 || email == '' || email.match('@') ) {
        document.getElementById('email').style = 'background-color: rgb(255, 0, 0, 0.4)';
        document.getElementById("email").placeholder = "jfiejf";
        boo_regiter = false;
    }
    else {
        document.getElementById('email').style = 'background-color: rgb(0, 0, 0, 0.1)';
        boo_regiter = true;
    }
    if( password1.length < 5 || password1 == '' ) {
        document.getElementById('password1').style = 'background-color: rgb(255, 0, 0, 0.4)';
        document.getElementById("password1").placeholder = "jfiejf";
        boo_regiter = false;
    }
    else {
        document.getElementById('password1').style = 'background-color: rgb(0, 0, 0, 0.1)';
        boo_regiter = true;
    }
    if( password2.length < 5 || password2 == '' ) {
        document.getElementById('password2').style = 'background-color: rgb(255, 0, 0, 0.4)';
        document.getElementById("password2").placeholder = "jfiejf";
        boo_regiter = false;
    }
    else {
        document.getElementById('password2').style = 'background-color: rgb(0, 0, 0, 0.1)';
        boo_regiter = true;
    }
    if( password2 == '' || password1 != password2 ) {
        document.getElementById('password1').style = 'background-color: rgb(255, 0, 0, 0.4)';
        document.getElementById("password1").placeholder = "jfiejf";
        boo_regiter = false;
    }
    else {
        document.getElementById('password1').style = 'background-color: rgb(0, 0, 0, 0.1)';
        boo_regiter = true;
    }

    // console.log( wqerqwer[0].name );

    // user_array.push(
    //     [
    //         {
    //             id: 1 + user_array.length,
    //             user_name: user_name,
    //             first_name: first_name,
    //             last_name: last_name,
    //             email: email,
    //             password: password1
    //         }
    //     ]
    // );

    // localStorage.setItem('users', JSON.stringify(user_array));
}

// console.log( JSON.parse(localStorage.getItem('users')) );

function getUsers() {
    const temp = localStorage.getItem('users');
    if( temp !== null ) {
        let qweqweqwe = JSON.parse(temp);
        console.log( JSON.parse(localStorage.getItem('users'))[0].user_name );
        return qweqweqwe;
    }
    return [];
}

function setUsers() {
    let temp = getUsers();
    localStorage.setItem('users', JSON.stringify(temp));
}

// LINKS
function qwerty1(a, b) {
    for( let i = a; i < b; i++ ) document.getElementsByClassName("header_icon")[i].style = "fill: #ffffff"
}
function qwerty(a, b) {
    for( let i = a; i < b; i++ ) document.getElementsByClassName("header_icon")[i].style = "fill: #ff0000"
}

let boo_sign_in = true;
function sign_in() {
    if( boo_sign_in ) document.getElementById('sign_in_close').style = "display: flex;"
    else document.getElementById('sign_in_close').style = "display: none;"
    boo_sign_in = !boo_sign_in
}