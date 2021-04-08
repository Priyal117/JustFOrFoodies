const food_list = [
    {
        "name": "Pasta Con Pomodoro E",
        "price": 20.94,
        "currency": "$",
        "img_scr": "images/unnamed.jpg"
    }, {
        "name": "Focaccia Bread",
        "price": 8.65,
        "currency": "$",
        "img_scr": "images/menu3.jpg"
    }, {
        "name": "Bruschetta",
        "price": 10.67,
        "currency": "$",
        "img_scr": "images/menu2.jpg"
    }, {
        "name": "Pasta Carbonara",
        "price": 12.30,
        "currency": "$",
        "img_scr": "images/menu4.jpg"
    }, {
        "name": "Mushroom Risotto",
        "price": 20.94,
        "currency": "$",
        "img_scr": "images/menu5.jpg"
    }, {
        "name": "Neapolitan pizza",
        "price": 18.65,
        "currency": "$",
        "img_scr": "images/menu6.jpg"
    }, {
        "name": "Lasagna",
        "price": 10.67,
        "currency": "$",
        "img_scr": "images/menu7.jpg"
    }, {
        "name": "Caprese Salad with Pesto Sauce",
        "price": 5.30,
        "currency": "$",
        "img_scr": "images/menu8.jpg"
    }, {
        "name": "Omelette Salad",
        "price": 10.30,
        "currency": "$",
        "img_scr": "images/WEB_Breakfast_HashPoachedEggs_800x800.jpg"
    }, {
        "name": "Falafel burger",
        "price": 15.30,
        "currency": "$",
        "img_scr": "images/falafel burger.webp"
    }, {
        "name": "Ground Beef Tacos",
        "price": 18.40,
        "currency": "$",
        "img_scr": "images/food_picture_05_hd_picture_167519.jpg"
    }, {
        "name": "Chicken biryani",
        "price": 20.25,
        "currency": "$",
        "img_scr": "images/chicken biryani.webp"
    }
];

function draw_checkout() {
    order_str = localStorage.getItem('order_list');
    order_ary = order_str.split(',');    
    order_list = order_ary.map((x)=>{
        if(x != '') {
            return +x;
        }
    });
    htmlStr = "";   
    total_price = 0;
    count = 0;
    order_list.map((idx)=>{
        food = food_list[idx];
        htmlStr += `<div class="order_item"><div >
                        <img src="${food.img_scr}" width="100%" alt="Avatar" class="left_panel"/>                    
                    </div>
                    <div class="right_panel">
                        <h1 class="order_title">${food.name}</h1>
                        <h4 class="order_price">${food.currency}${food.price}</h4>
                        <button class="remove_button" onclick="removeOrder(${idx})">Remove Order</button>   
                    </div>
                    <div class="panel_clear"></div></div>`
        total_price += food.price;
        count ++;
    });
    htmlStr += `<div class="panel_clear"></div>`;
    total_price *= 100;
    total_price = Math.round(total_price);
    total_price /= 100;
    document.getElementById("order_content").innerHTML = htmlStr;
    document.getElementById("order_count").innerText = count;
    document.getElementById("total_price").innerText = total_price;
}

function removeOrder(id) {
    order_str = localStorage.getItem('order_list');
    order_ary = order_str.split(',');
    order_list = order_ary.map((x)=>+x);
    idx = order_list.indexOf(id);
    order_list.splice(idx, 1);
    order_str = "";
    order_list.map((item)=>{
        order_str += (item + ",");
    });
    if(order_str[order_str.length-1] == ','){
        order_str = order_str.substr(0, order_str.length - 1);
    }
    localStorage.setItem('order_list', order_str);
    draw_checkout();
}

draw_checkout();