const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')


function showAll(productsArray) {
    let MyLi = ''

    productsArray.forEach((product) => {
        MyLi += `
        <li>
            <img src="${product.src}">
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price.toFixed(2)}</p>
        </li>
    `

        list.innerHTML = MyLi
    })
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9
    }))

    showAll(newPrices)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
        <li>
            <p>O valor final de todos os preços somados é de: <span>R$ ${totalValue.toFixed(2)}</span></p>
        </li>
    `
}

function filterAllItems(){
    const justVeganItems = menuOptions.filter((product) => product.vegan)

    showAll(justVeganItems)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', sumAllItems)
buttonFilterAll.addEventListener('click', filterAllItems)
