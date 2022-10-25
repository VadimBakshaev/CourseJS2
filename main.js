'use strict';

const goods = [
    { title: 'Shirt', price: 150, img: 'https://img.freepik.com/free-photo/white-t-shirts-with-copy-space-on-gray-background_53876-104920.jpg?w=1380&t=st=1666707441~exp=1666708041~hmac=26a9078621d1de92f1c06e7546968e295d5d71eba0902744445526004e92979e' },
    { title: 'Socks', price: 50, img: 'https://img.freepik.com/free-photo/white-t-shirts-with-copy-space-on-gray-background_53876-104920.jpg?w=1380&t=st=1666707441~exp=1666708041~hmac=26a9078621d1de92f1c06e7546968e295d5d71eba0902744445526004e92979e' },
    { title: 'Jacket', price: 350, img: 'https://img.freepik.com/free-photo/white-t-shirts-with-copy-space-on-gray-background_53876-104920.jpg?w=1380&t=st=1666707441~exp=1666708041~hmac=26a9078621d1de92f1c06e7546968e295d5d71eba0902744445526004e92979e' },
    { title: 'Shoes', price: 250, img: 'https://img.freepik.com/free-photo/white-t-shirts-with-copy-space-on-gray-background_53876-104920.jpg?w=1380&t=st=1666707441~exp=1666708041~hmac=26a9078621d1de92f1c06e7546968e295d5d71eba0902744445526004e92979e' },
];

const renderGoodsItem = (title, price, img) =>
            `<div class="goods-item">
            <img class="prod-img" src=${img} alt="">
            <h3>${title}</h3>
            <p>${price}</p>
            </div>`;

const renderGoodsList = list =>
    document.querySelector('.goods-list').innerHTML = list.map(item =>
        renderGoodsItem(item.title, item.price, item.img)).join('');


const listBox = document.querySelector('.goods-list-box');
document.querySelector('button').addEventListener('click', () =>
    listBox.classList.toggle('hide'));

renderGoodsList(goods);