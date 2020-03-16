// Создание пустых классов корзины и элемента корзины (товара в корзине)
class Cart {
    // Здесь могут быть такие методы:
    // 1. Конструктор корзины (с указанием основных свойств, типа места размещения изображения корзины)
    // 2. Кнопка вызова отображения корзины (может быть, тут должно быть несколько методов: формирование кнопки, отображение кнопки, обработка события нажатия на кнопку, и пр.)
    // 3. Метод отображения корзины (renderOfCart)
    // 4. Метод подсчета общей стоимости корзины
    // 5. Метод оформления покупки (заказа)
}

class cartItem {
    // Этот класс может быть создан путем наследования класса ProductItem
    // Дополнительно здесь могут быть такие методы:
    // 1. Обработки сигнала нажатия кнопки "купить" для ProductItem
    // 2. Увеличения или уменьшения количества приобретаемого товара, с пересчетом стоимости товаров данной товарной позиции (с вызовом пересчета общей стоимости корзины в классе Cart) 
}

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this._render();
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
            {id: 5},
        ];
    }

    _render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }
}

class ProductItem {
    constructor(product, img='https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
    }
}

new ProductList();

// const products = [
//     {id: 1, title: 'Notebook', price: 20000},
//     {id: 2, title: 'Mouse', price: 1500},
//     {id: 3, title: 'Keyboard', price: 5000},
//     {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
//                 <img src="${img}" alt="Some img">
//                 <div class="desc">
//                     <h3>${item.title}</h3>
//                     <p>${item.price} \u20bd</p>
//                     <button class="buy-btn">Купить</button>
//                 </div>
//             </div>`;
//
// const renderProducts = list => {
//   document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };

// const renderProduct = (title, price) => {
//     return `<div class="product-item">
//                 <h3>${title}</h3>
//                 <p>${price}</p>
//                 <button class="buy-btn">Добавить в корзину</button>
//             </div>`;
// };
//
// const renderProducts = list => {
//     const productList = list.map(item => renderProduct(item.title, item.price));
//     document.querySelector('.products').innerHTML = productList;
// };

// renderProducts(products);
