document.addEventListener("DOMContentLoaded", () => {
    const cakes = [
        { name: "Bolo de Chocolate", price: 20.00 },
        { name: "Bolo de Morango", price: 22.00 },
        { name: "Bolo de Baunilha", price: 18.00 },
        { name: "Bolo de Cenoura", price: 15.00 },
        { name: "Bolo de Limão", price: 25.00 },
        { name: "Bolo de Coco", price: 30.00 },
        { name: "Bolo de Abacaxi", price: 27.00 },
        { name: "Bolo de Amêndoa", price: 30.00 },
        { name: "Bolo de Café", price: 19.00 },
        { name: "Bolo de Red Velvet", price: 35.00 }
    ];

    const cakeList = document.getElementById("cake-list");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");
    const cartList = document.getElementById("cart-list");
    const totalPriceElem = document.getElementById("total-price");
    let cart = [];
    let totalPrice = 0;

    function displayCakes() {
        cakeList.innerHTML = cakes.map(cake =>
            `<li>${cake.name} - R$ ${cake.price.toFixed(2)} <button onclick="addToCart('${cake.name}')">Adicionar ao Carrinho</button></li>`
        ).join('');
    }

    function displayCart() {
        cartList.innerHTML = cart.map(item =>
            `<li>${item.name} - R$ ${item.price.toFixed(2)}</li>`
        ).join('');
        totalPriceElem.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
    }

    window.addToCart = function(cakeName) {
        const cake = cakes.find(c => c.name === cakeName);
        if (cake) {
            cart.push(cake);
            totalPrice += cake.price;
            displayCart();
        }
    }

    function handleSearch() {
        const query = searchInput.value.toLowerCase();
        const results = cakes.filter(cake => cake.name.toLowerCase().includes(query));

        searchResults.innerHTML = results.map(result =>
            `<li onclick="addToCart('${result.name}')">${result.name} - R$ ${result.price.toFixed(2)}</li>`
        ).join('');

        searchResults.style.display = results.length > 0 ? 'block' : 'none';
    }

    searchInput.addEventListener("input", handleSearch);

    // Initialize the cake list
    displayCakes();
});
