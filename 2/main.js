'use strict';

class GoodsItem {
    constructor(title, price, img) {
        this.title = title;
        this.price = price;
        this.img = img;
    }
    render() {
        return `<div class="goods-item">
        <img class="prod-img" src=${this.img} alt="image">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150, img: 'https://img.freepik.com/free-photo/white-t-shirts-with-copy-space-on-gray-background_53876-104920.jpg?w=1380&t=st=1666707441~exp=1666708041~hmac=26a9078621d1de92f1c06e7546968e295d5d71eba0902744445526004e92979e' },
            { title: 'Socks', price: 50, img: 'https://img.freepik.com/free-photo/white-t-shirts-with-copy-space-on-gray-background_53876-104920.jpg?w=1380&t=st=1666707441~exp=1666708041~hmac=26a9078621d1de92f1c06e7546968e295d5d71eba0902744445526004e92979e' },
            { title: 'Jacket', price: 350, img: 'https://img.freepik.com/free-photo/white-t-shirts-with-copy-space-on-gray-background_53876-104920.jpg?w=1380&t=st=1666707441~exp=1666708041~hmac=26a9078621d1de92f1c06e7546968e295d5d71eba0902744445526004e92979e' },
            { title: 'Shoes', price: 250, img: 'https://img.freepik.com/free-photo/white-t-shirts-with-copy-space-on-gray-background_53876-104920.jpg?w=1380&t=st=1666707441~exp=1666708041~hmac=26a9078621d1de92f1c06e7546968e295d5d71eba0902744445526004e92979e' },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.img);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').insertAdjacentHTML('beforeend', listHtml);
    }
    getTotalPrice() {
        let totalPrice = 0;
        this.goods.forEach(good => {
            totalPrice += good.price;
        });
        return totalPrice;
    }
}

class Cart {
    add() {

    }
    remove() {

    }
    change() {

    }
    render() {

    }
    pay() {

    }
}

class ElemCart {
    changeQuantity() {

    }

}

const list = new GoodsList();
list.fetchGoods();
list.render();

const listBox = document.querySelector('.goods-list-box');
document.querySelector('button').addEventListener('click', () =>
    listBox.classList.toggle('hide'));

