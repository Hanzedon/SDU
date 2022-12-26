let products = [
{
    id: 1,
    type: "pant",
    photo: "images/Dickies Loose Fit Double Knee Work Pant Black.jpg",
    name: "Dickies Double Knee Loose Fit",
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
    name: "Red Kap rtyu",
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

function poopoopipi() {
    localStorage.setItem('in_account', 0);
    loadGoods();
}
function pipipoopoo() {
    localStorage.setItem('in_account', 1);
    loadGoods();
}

// GOODS
function loadProduct() {
    let index = localStorage.getItem('id');
    $("#product").append(
        '<div class="goods">' +
            '<div class="goods-img">' +
                '<img class="" src="' + products[index].photo + '" alt="Goods Photo">' +
            '</div>' +
            '<hr>' +
            '<div class="about">' +
                '<h2>MODEL: ' + products[index].name + '</h3>' +
                '<h3>PRICE: ' + products[index].price + '$</h3>' +
                '</div>' +
            '<button class="bttn_to_basker" onclick="to_basket(' + products[index].id + ')" >INTO A BASKET</button>' +
        '</div>'
    );
}

// WISHLIST
function loadWishlist() {
    let wishlist_array  = getWishlist();
    let user_id = localStorage.getItem('user-id');
    let len = wishlist_array[user_id-1].product_id.length;

    if( len == 0) {
        $("#goods_wishlist").append(
            '<h1>WISHLIST IS EMPTY</h1>'
        );
    }
    else {
        wishlist_array[user_id-1].product_id.forEach((wishlist) => {
            $("#goods_wishlist").append(
                '<div class="goods-list delete" id="wishlist' + products[wishlist-1].id + '">' +
                    '<div class="wishlist_img">' +
                        '<img src="' + products[wishlist-1].photo + '" alt="">' +
                    '</div>' +
                    '<div class="about-wishlist">' +
                        '<div class="d"></div>' + 
                        '<h2>Model: ' + products[wishlist-1].name + '</h2>' +
                        '<h3>PRICE: ' + products[wishlist-1].price + '$</h3>' +
                    '</div>' +
                    '<div class="btns">' +
                    '<button onclick="delete_wishlist(' + products[wishlist-1].id + ')" class="delete-btn")>DELETE</button>' +
                    '<button onclick="to_basket(' + products[wishlist-1].id + ')" class="add-btn")>ADD TO CART</button>' +
                    '</div>' +
                '</div>'
            );
        })
    }
}

function delete_wishlist(n) {
    let user_id = localStorage.getItem('user-id');
    let wishlist_array = getWishlist();
    let temp_array = wishlist_array[user_id-1].product_id;

    for( let i = 0; i < temp_array.length; i++ ) {
        if( n == temp_array[i] ) {
            index = -1;
            wishlist_array[user_id-1].product_id.splice(i, 1);
            document.getElementById('wishlist'+n).style = 'display:none';
            break;
        }
    }
    if( temp_array.length == 0 ) {
        $("#goods_wishlist").append(
            '<h1>WISHLIST IS EMPTY</h1>'
        );
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist_array));
}

// ABOUT ACCOUNT
function loadAboutAccount() {
    console.log( "LOAD ABOUT ACCOUNT" );
    let user_id = localStorage.getItem('user-id');
    let user_array = getUsers();
    let add = "";

    let about = ['User Name', 'First Name', 'Last Name', 'Email Address', 'Password'];
    let user = [
        user_array[user_id-1].user_name,
        user_array[user_id-1].first_name,
        user_array[user_id-1].last_name,
        user_array[user_id-1].email,
        user_array[user_id-1].password];

    for( let i = 0; i < 5; i++ ) {
        add += (
            '<div class="about_list">' +
                '<div class="about_list_1">' +
                    '<div class="about_list_2">' +
                        '<h2 class="qewrqewr" id="edit_id_">' + about[i] + ':&nbsp</h2>' +
                        '<h2 class="h2_about" id="about_id_' + i + '">' + user[i] + '</h2>' +
                        '<input class="input_edit" id="input_id_' + i + '" type="text">' +
                    '</div>' +
                    '<button onclick="edit(' + i + ')" class="edit_bttn" id="edit_bttn_' + i + '">EDIT</button>' +
                '</div>' +
                '<hr>' +
            '</div>'
        );
    }
    add += (
        '<div class="about_list">' +
            '<div class="about_list_1">' +
                '<button onclick="log_out()" class="edit_bttn">LOG OUT</button>' +
            '<div/>' +
        '</div>'
        );

    $("#about_account").append(add);
}

function log_out() {
    window.location.href = 'index.html';
}

let qwerqwerqewr = true;
function edit(n) {
    if( qwerqwerqewr ) {
        for( let i = 0; i < 5; i++ ) {
            if( i == n ) {
                document.getElementsByClassName('h2_about')[i].style = 'display: none;';
                document.getElementsByClassName('input_edit')[i].style = 'display: block;';
            }
            else {
                document.getElementsByClassName('h2_about')[i].style = 'display: block;';
                document.getElementsByClassName('input_edit')[i].style = 'display: none;';
            }
        }
        qwerqwerqewr = !qwerqwerqewr;
    }
    else {
        let temp = document.getElementsByClassName('input_edit')[n].value;;
        if( temp == "" ) {
            alert('Empty');
            for( let i = 0; i < 5; i++ ) {
                if( i == n ) {
                    document.getElementsByClassName('h2_about')[i].style = 'display: none;';
                    document.getElementsByClassName('input_edit')[i].style = 'display: block;';
                }
                else {
                    document.getElementsByClassName('h2_about')[i].style = 'display: block;';
                    document.getElementsByClassName('input_edit')[i].style = 'display: none;';
                }
                document.getElementsByClassName('input_edit')[n].innerHTML = "";
            }
        }
        else if( temp.length < 5 ) {
            document.getElementsByClassName('input_edit')[n].style = 'display: block; background-color: rgb(255, 0, 0, 0.4);';
            document.getElementsByClassName('input_edit')[n].innerHTML = "";
            qwerqwerqewr = !qwerqwerqewr;
        }
        else {
            let user_id = localStorage.getItem('user-id');
            let user_array = getUsers();
            if( n == 0 ) user_array[user_id-1].user_name = temp;
            else if( n == 1) user_array[user_id-1].first_name = temp;
            else if( n == 2 ) user_array[user_id-1].last_name = temp;
            else if( n == 3 ) user_array[user_id-1].email = temp;
            else if( n == 4 ) user_array[user_id-1].password = temp;
            localStorage.setItem('users', JSON.stringify(user_array));
            document.getElementsByClassName('h2_about')[n].innerHTML = temp;
            document.getElementsByClassName('h2_about')[n].style = 'display: block;';
            document.getElementsByClassName('input_edit')[n].style = 'display: none;';
            qwerqwerqewr = !qwerqwerqewr;
        }
    }
}

// CART
function loadBasket() {
    let basket_array  = getCart();
    let user_id = localStorage.getItem('user-id');
    let len = basket_array[user_id-1].product_id.length;
    if( len == 0 ) {
        $("#goods_basket").append(
            '<h1>CART IS EMPTY</h1>'
        );
    }
    else {
        let i = 0;
        let div = '<h3 id="cart_empty">CART</h3>';
        let total = 0;
        total = parseInt(total);
        basket_array[user_id-1].product_id.forEach((basket) => {
            console.log( typeof(products[basket-1].price) );
            price = products[basket-1].price * basket_array[user_id-1].count_goods[i];
            div += 
            '<div class="goods-list" id="delete_cart_id_' + basket_array[user_id-1].product_id[i] + '">' +
                '<h3>Model: ' + products[basket-1].name + '</h3>' +
                '<h3 id="price' + products[basket-1].id + '">Price: ' + price + '$</h3>' +
                '<div class="bttns">' +
                    '<button class="around-5 cart_bttn" onclick="to_basket(' + products[basket-1].id + ')">+</button>' +
                    '<h3 class="around-5" id="count' + products[basket-1].id + '">' + basket_array[user_id-1].count_goods[i] + '</h3>' +
                    '<button class="around-5 cart_bttn" onclick="min_basket(' + products[basket-1].id + ')">-</button>' +
                    '<button class="around-5 cart_bttn" onclick="delete_basket(' + products[basket-1].id + ')">DELETE</button>' +
                '</div>' +
            '</div>'
            total += price;
            i++;
        });
        div += (
            '<h3 id="total_empty">TOTAL: ' + total + '$</h3>'
        );
        localStorage.setItem('total', parseInt(total));

        $("#goods_basket").append(div);
    }
}

function to_basket(n) {
    let in_account = localStorage.getItem('in_account');
    if( in_account == 0 ) {
        sign_in();
    }
    else {
        let user_id = localStorage.getItem('user-id');
        let basket_array = getCart();
        let basket = basket_array[user_id-1].product_id;

        let check = 0;
        let index;
        for( let i = 0; i < basket.length; i++ ) {
            if( n == basket[i] ) {
                check = -1;
                index = i;
                console.log( document.getElementById('total_empty').value );
                let total = localStorage.getItem('total');
                document.getElementById('total_empty').innerHTML = total;
                break;
            }
        }

        if( check == -1 ) {
            let temp_count = 1+basket_array[user_id-1].count_goods[index];
            basket_array[user_id-1].count_goods[index] = temp_count;
            document.getElementById('count'+n).innerHTML = temp_count;
            document.getElementById('price'+n).innerHTML = 'Price: ' + temp_count * products[basket_array[user_id-1].product_id[index]].price;
            document.querySelector('#goods_basket').innerHTML="";
            loadBasket();
        }
        else {
            basket_array[user_id-1].product_id.push(n);
            basket_array[user_id-1].count_goods.push(1);
        }


        localStorage.setItem('cart', JSON.stringify(basket_array));
    }
}

function min_basket(n) {
    let user_id = localStorage.getItem('user-id');
    let basket_array = getCart();
    let basket = basket_array[user_id-1].product_id;

    let index;
    for( let i = 0; i < basket.length; i++ ) {
        if( n == basket[i] ) {
            check = -1;
            index = i;
            break;
        }
    }

    if( basket_array[user_id-1].count_goods[index] == 1 ) {
        delete_basket(n);
    }
    else {
        let temp_count = basket_array[user_id-1].count_goods[index]-1;
        basket_array[user_id-1].count_goods[index] = temp_count;
        document.getElementById('count'+n).innerHTML = temp_count;


        document.getElementById('price'+n).innerHTML = 'Price: ' + temp_count * products[basket_array[user_id-1].product_id[index]].price;
        document.querySelector('#goods_basket').innerHTML="";
        loadBasket();
    }

    localStorage.setItem('cart', JSON.stringify(basket_array));
}

function delete_basket(n) {
    let user_id = localStorage.getItem('user-id');
    let basket_array = getCart();
    let temp_array = basket_array[user_id-1].product_id;

    for( let i = 0; i < temp_array.length; i++ ) {
        if( n == temp_array[i] ) {
            index = -1;
            document.getElementById('delete_cart_id_'+basket_array[user_id-1].product_id[i]).style = "display: none;";
            basket_array[user_id-1].product_id.splice(i, 1);
            basket_array[user_id-1].count_goods.splice(i, 1);
            break;
        }
    }
    if( temp_array.length == 0 ) {
        $("#goods_basket").append(
            '<h1>CART IS EMPTY</h1>'
        );
        document.getElementById('cart_empty').style = "display: none;";
        document.getElementById('total_empty').style = "display: none;";
    }

    localStorage.setItem('cart', JSON.stringify(basket_array));
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
        let wishlist_array = getWishlist();
        wishlist_array.push(
            {
                user_id: user_array.length,
                product_id: []
            }
        );
        let basket_array = getCart();
        basket_array.push(
            {
                user_id: user_array.length,
                product_id: [],
                count_goods: []
            }
        );

        localStorage.setItem('cart', JSON.stringify(basket_array));
        localStorage.setItem('wishlist', JSON.stringify(wishlist_array));
        localStorage.setItem('users', JSON.stringify(user_array));
        localStorage.setItem('user-id', JSON.stringify(user_array[user_array.length-1].id));
        window.location.href = 'account.html';
    }
}

// SIGN IN
function submit_sign_in() {
    let user_name = $('#user_name_sign_in').val();
    let password = $('#password_sign_in').val();
    let user_array = getUsers();
    let boo_sign_in = true;

    user_array.forEach((user) => {
        if( user_name == user.user_name && password == user.password ) {
            saveID(user.id);
            localStorage.setItem('user-id', JSON.stringify(user.id));
            window.location.href = 'account.html';
            boo_sign_in = false;
        }
    });

    if( boo_sign_in ) {
        document.getElementById('user_name_sign_in').style = 'background-color: rgb(255, 0, 0, 0.4)';
        document.getElementById('user_name_sign_in').placeholder = "Ne";
        document.getElementById('password_sign_in').style = 'background-color: rgb(255, 0, 0, 0.4)';
        document.getElementById('password_sign_in').placeholder = "Ne";
        document.getElementById("password_sign_in").value = "";
    }
}

// LINKS
function qwerty1(a, b) {
    for( let i = a; i < b; i++ ) document.getElementsByClassName("header_icon")[i].style = "fill: #ffffff"
}
function qwerty(a, b) {
    for( let i = a; i < b; i++ ) document.getElementsByClassName("header_icon")[i].style = "fill: #ff0000"
}

function dickies_click() {
    let in_account = localStorage.getItem("in_account");
    if( in_account == 0 ) {
        window.location.href = 'index.html';
    }
    else {
        window.location.href = 'account.html';
    }
}

let boo_sign_in = true;
function sign_in(n) {
    let in_account = localStorage.getItem("in_account");
    if( in_account == 0 ) {
        if( boo_sign_in ) document.getElementById('sign_in_close').style = "display: flex;"
        else document.getElementById('sign_in_close').style = "display: none;"
        boo_sign_in = !boo_sign_in
    }
    else if( n == 1 ) window.location.href = 'wish-list.html';
    else if( n == 2 ) window.location.href = 'basket.html';
    else if( n == 3  ) window.location.href = 'about_account.html';
}

// LOAD
function loadGoods() {
    let pants = '';
    let t_shirts = '';
    let hoodies = '';
    let add = '';

    shuffleArray(products);
    products.forEach((product) => {
        add = makeProduct_in(product);
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

function like_heart(n) {
    let in_account = localStorage.getItem("in_account");
    if( in_account == 0 ) {
        sign_in();
    }
    else {
        let user_id = localStorage.getItem('user-id');
        let wishlist_array = getWishlist();
        let temp_array = wishlist_array[user_id-1].product_id;
    
        let index = 0;
        for( let i = 0; i < temp_array.length; i++ ) {
            if( n == temp_array[i] ) {
                index = -1;
                wishlist_array[user_id-1].product_id.splice(i, 1);
                break;
            }
        }

        console.log( n );
        if( index == 0 ) {
            console.log( "tfvygbhjnkml,;" );
            document.getElementById('goods-id-'+n).src = "images/like.svg";
            wishlist_array[user_id-1].product_id.push(n);
        }
        else {
            document.getElementById('goods-id-'+n).src = "images/not_like.svg";
        }

        localStorage.setItem('wishlist', JSON.stringify(wishlist_array));
    }
}
function like_out(n) {
    let user_id = localStorage.getItem('user-id');
    let wishlist_array = getWishlist();
    let temp_array = wishlist_array[user_id-1].product_id;

    let index = 0;
    for( let i = 0; i < temp_array.length; i++ ) {
        if( n == temp_array[i] ) {
            index = -1;
        }
    }

    if( index == 0 ) {
        document.getElementById('goods-id-'+n).src = "images/not_like.svg";
    }
}
function like_over(n) {
    document.getElementById('goods-id-'+n).src = "images/like.svg";
}
function makeProduct_in(item) {
    let img = "images/not_like.svg";
    let in_account = localStorage.getItem('in_account');
    if( in_account == 1 ) {
        let wishlist_array = getWishlist();
        let user_id = localStorage.getItem('user-id');
        let temp_array = wishlist_array[user_id-1].product_id;
        let index = 0;
        for( let i = 0; i < temp_array.length; i++ ) {
            if( item.id == temp_array[i] ) {
                index = -1;
            }
        }
        if( index == -1 ) {
            img = "images/like.svg";
        }
    }

return  '<div class="product">' +
            '<div class="icon-like" onclick="like_heart(' + item.id + ')" onmouseout="like_out(' + item.id + ')" onmouseover="like_over(' + item.id + ')">' +
                '<img id="goods-id-' + item.id + '" src="' + img + '"></img>' +
            '</div>' +
            '<div onclick="saveID(' + item.id + ')">' +
                '<div class="goods-img">' +
                    '<img src="' + item.photo + '" alt="Goods Photo">' +
                '</div>' +
                '<h3>' + item.name + ' ' + item.color + '</h3>' +
                '<p>' + item.price + '$</p>' +
            '</div>' +
        '</div>';
}

function loadAccounts() {
    let user_id = localStorage.getItem('user-id');
}

// 
function saveID(n) {
    localStorage.setItem('id', n-1);
    window.location = "goods.html";
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

function getCart() {
    const temp = localStorage.getItem('cart');
    if( temp !== null ) {
        return JSON.parse(temp);
    }
    return [];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}