function orderNow(id) {
    if ( !localStorage.getItem('order_list')) {        
        localStorage.setItem('order_list', id);
    } else {
        str = localStorage.getItem('order_list');
        ary = str.split(',');
        if(ary.indexOf(id + "") < 0) {
            str = str + ',' + id;
        }
        localStorage.setItem('order_list',str);
    }
    
    location.href = 'checkout.html';
}