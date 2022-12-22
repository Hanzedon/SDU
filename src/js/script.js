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

let in_accounts;
function poopoopipi() {
    in_accounts = true;
}


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

function loadAccounts() {
    in_accounts = false;
}

function like_heart(n) {
    if( in_accounts ) {
        sign_in();
    }
    else {
    }
}

function like_out() {
    let temp_arr = document.getElementsByClassName('like_src')
    for( let i = 0; i < temp_arr.length; i++ ) {
        temp_arr[i].src = "images/not_like.svg";
    }
}
function like_over() {
    let temp_arr = document.getElementsByClassName('like_src')
    for( let i = 0; i < temp_arr.length; i++ ) {
        temp_arr[i].src = "images/like.svg";
    }
}

function makeProduct(item) {
return  '<div class="product">' +
            '<div class="icon-like" onclick="like_heart(' + item.id + ')" onmouseout="like_out()" onmouseover="like_over()">' +
                '<img class="like_src" src="images/not_like.svg"></img>' +
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

// SIGN UP
function submit() {
    let user_name = $('#user_name').val();
    let first_name = $('#first_name').val();
    let last_name = $('#last_name').val();
    let email = $('#email').val();
    let password1 = $('#password1').val();
    let password2 = $('#password2').val();
    let user_array = getUsers();
    let boo_regiter = true;

    if( user_name.length < 5 ) {
        document.getElementById('user_name').style = 'background-color: rgb(255, 0, 0, 0.4)';
        document.getElementById("user_name").placeholder = "Ne pravilno";
        document.getElementById("user_name").value = "";
        boo_regiter = false;
    }
    else {
        let index = 0;
        user_array.forEach((users) => {
            if( user_name === users.user_name ) {
                index = -1;
            }
        });

        if( index === -1 && user_array.length > 0 ) {
            document.getElementById('user_name').style = 'background-color: rgb(255, 0, 0, 0.4)';
            document.getElementById("user_name").placeholder = "NickName ERROR";
            document.getElementById("user_name").value = "";
            boo_regiter = false;
        }
        else {
            document.getElementById('user_name').style = 'background-color: rgb(0, 0, 0, 0.1)';
        }
    }
    if( first_name.length < 5 || first_name == '' ) {
        document.getElementById('first_name').style = 'background-color: rgb(255, 0, 0, 0.4)';
        document.getElementById("first_name").placeholder = "jfiejf";
        document.getElementById("first_name").value = "";
        boo_regiter = false;
    }
    else {
        document.getElementById('first_name').style = 'background-color: rgb(0, 0, 0, 0.1)';
    }
    if( last_name.length < 5 || last_name == '' ) {
        document.getElementById('last_name').style = 'background-color: rgb(255, 0, 0, 0.4)';
        document.getElementById("last_name").placeholder = "jfiejf";
        document.getElementById("last_name").value = "";
        boo_regiter = false;
    }
    else {
        document.getElementById('last_name').style = 'background-color: rgb(0, 0, 0, 0.1)';
    }
    if( email.length < 5 || email == '' || email.match('@') ) {
        document.getElementById('email').style = 'background-color: rgb(255, 0, 0, 0.4)';
        document.getElementById("email").placeholder = "jfiejf";
            document.getElementById("email").value = "";
        boo_regiter = false;
    }
    else {
        document.getElementById('email').style = 'background-color: rgb(0, 0, 0, 0.1)';
    }
    if( password1.length < 5 || password1 == '' ) {
        document.getElementById('password1').style = 'background-color: rgb(255, 0, 0, 0.4)';
        document.getElementById("password1").placeholder = "jfiejf";
            document.getElementById("password1").value = "";
        boo_regiter = false;
    }
    else {
        document.getElementById('password1').style = 'background-color: rgb(0, 0, 0, 0.1)';
    }
    if( password2.length < 5 || password2 == '' ) {
        document.getElementById('password2').style = 'background-color: rgb(255, 0, 0, 0.4)';
        document.getElementById("password2").placeholder = "jfiejf";
            document.getElementById("password2").value = "";
        boo_regiter = false;
    }
    else {
        document.getElementById('password2').style = 'background-color: rgb(0, 0, 0, 0.1)';
        if( password1 != password2 ) {
            document.getElementById('password2').style = 'background-color: rgb(255, 0, 0, 0.4)';
            document.getElementById("password2").placeholder = "Ne";
                document.getElementById("password2").value = "";
            boo_regiter = false;
        }
        else {
            document.getElementById('password2').style = 'background-color: rgb(0, 0, 0, 0.1)';
        }
    }

    if( boo_regiter ) {
        user_array.push(
            {
                id: 1 + user_array.length,
                user_name: user_name,
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password1
            }
        );
        localStorage.setItem('users', JSON.stringify(user_array));

        // let wishlist_array = getWishlist();
        // wishlist_array.push(
        //     user_array.length-1[
        //         {}
        //     ]
        // );
        // let temp = wishlist_array[0];
        // console.log(temp);
        // temp.push(
        //     [12, 43, 54, 76, 676]
        // );
        // wishlist_array[0].push(temp);
        // localStorage.setItem('wishlist', JSON.stringify(wishlist_array));

        window.location.href = 'account.html';
    }
}

function getUsers() {
    const temp = localStorage.getItem('users');
    if( temp !== null ) {
        return JSON.parse(temp);
    }
    return [];
}

function getWishlist() {
    const temp = localStorage.getItem('wishlist');
    if( temp !== null ) {
        return JSON.parse(temp);
    }
    return [];
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