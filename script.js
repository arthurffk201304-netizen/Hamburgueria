/* =========================================================
   BRASA BURGER
   SISTEMA FRONT-END DEMONSTRATIVO

   Futuramente:
   - trocar localStorage por backend
   - conectar banco de dados
   - conectar API de IA
   - conectar gateway de pagamento
========================================================= */


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const CONFIG = {

    whatsapp: "552299352900",

    pix: "22999352900",

    restaurantName: "Brasa Burger",

    deliveryFee: 5,

    social: {

        instagram: "#",

        tiktok: "#",

        facebook: "#"

    }

};


/* =========================================================
   PRODUTOS
========================================================= */

const products = [

    {
        id: 1,
        name: "Brasa Clássico",
        category: "hamburgueres",
        price: 24.90,
        description:
            "Pão brioche, carne artesanal, queijo, alface, tomate e molho da casa.",
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
        popular: true
    },

    {
        id: 2,
        name: "Brasa Bacon",
        category: "hamburgueres",
        price: 29.90,
        description:
            "Carne artesanal, queijo derretido, bacon crocante e molho especial.",
        image:
            "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=85",
        popular: true
    },

    {
        id: 3,
        name: "Brasa Duplo",
        category: "hamburgueres",
        price: 34.90,
        description:
            "Dois hambúrgueres artesanais, queijo duplo e molho da Brasa.",
        image:
            "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=85",
        popular: true
    },

    {
        id: 4,
        name: "Brasa Cheddar",
        category: "hamburgueres",
        price: 27.90,
        description:
            "Carne artesanal, cheddar cremoso e molho especial no pão brioche.",
        image:
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=85",
        popular: false
    },

    {
        id: 5,
        name: "Brasa Especial",
        category: "hamburgueres",
        price: 32.90,
        description:
            "Blend artesanal, queijo, bacon, cebola caramelizada e molho da casa.",
        image:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85",
        popular: true
    },

    {
        id: 6,
        name: "Brasa Frango",
        category: "hamburgueres",
        price: 25.90,
        description:
            "Frango empanado crocante, queijo, alface e molho especial.",
        image:
            "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85",
        popular: false
    },


    {
        id: 7,
        name: "Combo Bacon",
        category: "combos",
        price: 32.90,
        description:
            "Brasa Bacon + batata média + bebida.",
        image:
            "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=85",
        popular: true
    },

    {
        id: 8,
        name: "Combo Clássico",
        category: "combos",
        price: 29.90,
        description:
            "Brasa Clássico + batata pequena + bebida.",
        image:
            "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85",
        popular: false
    },

    {
        id: 9,
        name: "Combo Duplo",
        category: "combos",
        price: 39.90,
        description:
            "Brasa Duplo + batata média + bebida.",
        image:
            "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=900&q=85",
        popular: true
    },

    {
        id: 10,
        name: "Combo Família",
        category: "combos",
        price: 94.90,
        description:
            "4 hambúrgueres + 2 batatas + 4 bebidas.",
        image:
            "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=85",
        popular: true
    },


    {
        id: 11,
        name: "Batata Pequena",
        category: "acompanhamentos",
        price: 8.90,
        description:
            "Batata frita crocante.",
        image:
            "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
        popular: false
    },

    {
        id: 12,
        name: "Batata Média",
        category: "acompanhamentos",
        price: 11.90,
        description:
            "Porção média de batata crocante.",
        image:
            "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85",
        popular: true
    },

    {
        id: 13,
        name: "Batata Grande",
        category: "acompanhamentos",
        price: 15.90,
        description:
            "Porção grande para compartilhar.",
        image:
            "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=85",
        popular: false
    },

    {
        id: 14,
        name: "Batata com Cheddar",
        category: "acompanhamentos",
        price: 18.90,
        description:
            "Batata crocante com cheddar cremoso.",
        image:
            "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
        popular: true
    },

    {
        id: 15,
        name: "Nuggets",
        category: "acompanhamentos",
        price: 13.90,
        description:
            "Nuggets crocantes.",
        image:
            "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=85",
        popular: false
    },


    {
        id: 16,
        name: "Coca-Cola",
        category: "bebidas",
        price: 6,
        description:
            "Refrigerante gelado.",
        image:
            "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=900&q=85",
        popular: true
    },

    {
        id: 17,
        name: "Coca-Cola Zero",
        category: "bebidas",
        price: 6,
        description:
            "Coca-Cola sem açúcar.",
        image:
            "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=85",
        popular: false
    },

    {
        id: 18,
        name: "Guaraná",
        category: "bebidas",
        price: 6,
        description:
            "Guaraná gelado.",
        image:
            "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=900&q=85",
        popular: false
    },

    {
        id: 19,
        name: "Fanta",
        category: "bebidas",
        price: 6,
        description:
            "Fanta gelada.",
        image:
            "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=900&q=85",
        popular: false
    },

    {
        id: 20,
        name: "Água",
        category: "bebidas",
        price: 4,
        description:
            "Água mineral.",
        image:
            "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=85",
        popular: false
    },

    {
        id: 21,
        name: "Suco",
        category: "bebidas",
        price: 8,
        description:
            "Suco gelado.",
        image:
            "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=85",
        popular: false
    },


    {
        id: 22,
        name: "Milk-shake",
        category: "sobremesas",
        price: 16.90,
        description:
            "Milk-shake cremoso.",
        image:
            "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",
        popular: true
    },

    {
        id: 23,
        name: "Sorvete",
        category: "sobremesas",
        price: 9.90,
        description:
            "Sorvete cremoso.",
        image:
            "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=85",
        popular: false
    },

    {
        id: 24,
        name: "Brownie",
        category: "sobremesas",
        price: 12.90,
        description:
            "Brownie de chocolate.",
        image:
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
        popular: true
    },

    {
        id: 25,
        name: "Sundae",
        category: "sobremesas",
        price: 10.90,
        description:
            "Sorvete com calda especial.",
        image:
            "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=85",
        popular: false
    }

];


/* =========================================================
   ESTADO
========================================================= */

let cart =
    JSON.parse(
        localStorage.getItem("brasa_cart")
    ) || [];

let orders =
    JSON.parse(
        localStorage.getItem("brasa_orders")
    ) || [];

let selectedCategory = "todos";

let discount = 0;

let currentOrderNumber = null;


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderProducts();

        updateCart();

        setupSocialLinks();

        atualizarClube();

    }
);


/* =========================================================
   MOEDA
========================================================= */

function money(value) {

    return new Intl.NumberFormat(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    ).format(value);

}


/* =========================================================
   PRODUTOS
========================================================= */

function renderProducts() {

    const grid =
        document.getElementById(
            "productsGrid"
        );

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    const sort =
        document
            .getElementById("sortSelect")
            .value;


    let filtered =
        products.filter(
            product => {

                const categoryMatch =
                    selectedCategory === "todos" ||
                    product.category === selectedCategory;

                const searchMatch =
                    product.name
                        .toLowerCase()
                        .includes(search) ||

                    product.description
                        .toLowerCase()
                        .includes(search);

                return categoryMatch &&
                       searchMatch;
            }
        );


    if (sort === "low") {

        filtered.sort(
            (a,b) =>
                a.price - b.price
        );

    }

    if (sort === "high") {

        filtered.sort(
            (a,b) =>
                b.price - a.price
        );

    }

    if (sort === "name") {

        filtered.sort(
            (a,b) =>
                a.name.localeCompare(b.name)
        );

    }


    if (sort === "default") {

        filtered.sort(
            (a,b) =>
                Number(b.popular) -
                Number(a.popular)
        );

    }


    if (filtered.length === 0) {

        grid.innerHTML = `
            <div class="empty-cart">
                <div>🔎</div>
                <strong>Nenhum produto encontrado.</strong>
                <p>Tente outra busca ou categoria.</p>
            </div>
        `;

        return;
    }


    grid.innerHTML =
        filtered.map(
            product => `

            <article class="product-card">

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy">

                    ${
                        product.popular
                        ?
                        `<span class="product-badge">
                            MAIS PEDIDO
                        </span>`
                        :
                        ""
                    }

                </div>


                <div class="product-info">

                    <h3>
                        ${product.name}
                    </h3>

                    <p class="product-description">
                        ${product.description}
                    </p>


                    <div class="product-bottom">

                        <strong class="product-price">
                            ${money(product.price)}
                        </strong>

                        <button
                            class="add-product"
                            onclick="adicionarPorId(${product.id})"
                            aria-label="Adicionar ${product.name}">

                            +

                        </button>

                    </div>

                </div>

            </article>
        `
        ).join("");

}


/* =========================================================
   CATEGORIA
========================================================= */

function setCategory(category) {

    selectedCategory = category;


    document
        .querySelectorAll(".category")
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.category === category
                );

            }
        );


    renderProducts();

}


/* =========================================================
   ADICIONAR
========================================================= */

function adicionarPorId(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }


    saveCart();

    updateCart();

    showToast(
        `${product.name} adicionado ao carrinho!`,
        "success"
    );


    animateCart();

}


/* =========================================================
   CARRINHO
========================================================= */

function saveCart() {

    localStorage.setItem(
        "brasa_cart",
        JSON.stringify(cart)
    );

}


function updateCart() {

    const count =
        cart.reduce(
            (sum,item) =>
                sum + item.quantity,
            0
        );


    document
        .getElementById("headerCartCount")
        .textContent = count;


    renderCart();

}


function getSubtotal() {

    return cart.reduce(
        (sum,item) =>
            sum +
            item.price *
            item.quantity,
        0
    );

}


function getDiscount() {

    return discount;

}


function getDelivery() {

    return cart.length
        ? CONFIG.deliveryFee
        : 0;

}


function getTotal() {

    return Math.max(
        0,
        getSubtotal() +
        getDelivery() -
        getDiscount()
    );

}


/* =========================================================
   RENDER CARRINHO
========================================================= */

function renderCart() {

    const container =
        document.getElementById(
            "cartItems"
        );


    if (!cart.length) {

        container.innerHTML = `

            <div class="empty-cart">

                <div>🛒</div>

                <strong>
                    Seu carrinho está vazio.
                </strong>

                <p>
                    Adicione algum produto delicioso.
                </p>

            </div>

        `;

    } else {

        container.innerHTML =
            cart.map(
                item => `

                <div class="cart-item">

                    <img
                        class="cart-item-image"
                        src="${item.image}"
                        alt="${item.name}">

                    <div>

                        <h4>
                            ${item.name}
                        </h4>

                        <div class="cart-item-price">
                            ${money(item.price)}
                        </div>


                        <div class="quantity-controls">

                            <button
                                onclick="alterarQuantidade(${item.id}, -1)">
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                onclick="alterarQuantidade(${item.id}, 1)">
                                +
                            </button>

                            <button
                                class="remove-item"
                                onclick="removerProduto(${item.id})">
                                Remover
                            </button>

                        </div>

                    </div>


                    <strong>
                        ${money(item.price * item.quantity)}
                    </strong>

                </div>
            `
            ).join("");

    }


    document
        .getElementById("subtotalValue")
        .textContent =
        money(getSubtotal());


    document
        .getElementById("deliveryValue")
        .textContent =
        money(getDelivery());


    document
        .getElementById("discountValue")
        .textContent =
        "- " + money(getDiscount());


    document
        .getElementById("totalValue")
        .textContent =
        money(getTotal());

}


/* =========================================================
   QUANTIDADE
========================================================= */

function alterarQuantidade(id, amount) {

    const item =
        cart.find(
            product =>
                product.id === id
        );

    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product =>
                    product.id !== id
            );

    }


    saveCart();

    updateCart();

}


/* =========================================================
   REMOVER
========================================================= */

function removerProduto(id) {

    cart =
        cart.filter(
            item =>
                item.id !== id
        );


    saveCart();

    updateCart();

    showToast(
        "Produto removido.",
        "error"
    );

}


/* =========================================================
   CUPOM
========================================================= */

function aplicarCupom() {

    const input =
        document
            .getElementById("couponInput")
            .value
            .toUpperCase()
            .trim();


    if (input === "BRASA10") {

        discount =
            getSubtotal() * .10;

        showToast(
            "Cupom BRASA10 aplicado! 10% OFF.",
            "success"
        );

    }

    else if (input === "PRIMEIRAPEDIDA") {

        discount = 8;

        showToast(
            "Cupom aplicado! R$ 8,00 OFF.",
            "success"
        );

    }

    else {

        discount = 0;

        showToast(
            "Cupom inválido.",
            "error"
        );

    }


    renderCart();

}


/* =========================================================
   ABRIR CARRINHO
========================================================= */

function abrirCarrinho() {

    updateCart();

    abrirModal("cartModal");

}


/* =========================================================
   CHECKOUT
========================================================= */

function abrirCheckout() {

    if (!cart.length) {

        showToast(
            "Seu carrinho está vazio.",
            "error"
        );

        return;
    }


    fecharModal("cartModal");

    abrirModal("checkoutModal");

}


/* =========================================================
   FINALIZAR PEDIDO
========================================================= */

function finalizarPedido(event) {

    event.preventDefault();


    if (!cart.length) {

        showToast(
            "Seu carrinho está vazio.",
            "error"
        );

        return;
    }


    const name =
        document
            .getElementById("customerName")
            .value
            .trim();

    const phone =
        document
            .getElementById("customerPhone")
            .value
            .trim();

    const neighborhood =
        document
            .getElementById("customerNeighborhood")
            .value
            .trim();

    const address =
        document
            .getElementById("customerAddress")
            .value
            .trim();

    const number =
        document
            .getElementById("customerNumber")
            .value
            .trim();

    const complement =
        document
            .getElementById("customerComplement")
            .value
            .trim();

    const notes =
        document
            .getElementById("customerNotes")
            .value
            .trim();

    const payment =
        document
            .querySelector(
                'input[name="payment"]:checked'
            ).value;


    const orderNumber =
        gerarNumeroPedido();


    const order = {

        id: orderNumber,

        customer: {

            name,

            phone,

            neighborhood,

            address,

            number,

            complement,

            notes

        },

        items:
            JSON.parse(
                JSON.stringify(cart)
            ),

        subtotal:
            getSubtotal(),

        delivery:
            getDelivery(),

        discount:
            getDiscount(),

        total:
            getTotal(),

        payment,

        status:
            "recebido",

        createdAt:
            new Date().toISOString()

    };


    orders.push(order);


    saveOrders();


    currentOrderNumber =
        orderNumber;


    /* adiciona pontos */

    adicionarPontos(
        Math.floor(
            getTotal()
        )
    );


    fecharModal("checkoutModal");


    cart = [];

    discount = 0;

    saveCart();

    updateCart();


    if (payment === "PIX") {

        abrirPix(order);

    } else {

        abrirWhatsAppPedido(order);

        showToast(
            `Pedido #${orderNumber} criado!`,
            "success"
        );

    }


    document
        .getElementById("checkoutForm")
        .reset();

}


/* =========================================================
   NÚMERO DO PEDIDO
========================================================= */

function gerarNumeroPedido() {

    const last =
        Number(
            localStorage.getItem(
                "brasa_last_order"
            ) || 1023
        );


    const next =
        last + 1;


    localStorage.setItem(
        "brasa_last_order",
        next
    );


    return next;

}


/* =========================================================
   SALVAR PEDIDOS
========================================================= */

function saveOrders() {

    localStorage.setItem(
        "brasa_orders",
        JSON.stringify(orders)
    );

}


/* =========================================================
   PIX
========================================================= */

function abrirPix(order) {

    document
        .getElementById("pixOrderNumber")
        .textContent =
        "#" + order.id;


    const message =
        encodeURIComponent(
            `Olá! Acabei de fazer o pedido #${order.id} e estou enviando o comprovante do PIX.`
        );


    document
        .getElementById("whatsappProof")
        .href =
        `https://wa.me/${CONFIG.whatsapp}?text=${message}`;


    abrirModal("pixModal");

}


function copiarPix() {

    navigator.clipboard
        .writeText(CONFIG.pix)
        .then(
            () => {

                showToast(
                    "Chave PIX copiada!",
                    "success"
                );

            }
        )
        .catch(
            () => {

                showToast(
                    "Não foi possível copiar automaticamente.",
                    "error"
                );

            }
        );

}


/* =========================================================
   WHATSAPP PEDIDO
========================================================= */

function abrirWhatsAppPedido(order) {

    let text =
        `Olá! Gostaria de confirmar meu pedido #${order.id}.%0A%0A`;


    order.items.forEach(
        item => {

            text +=
                `${item.quantity}x ${item.name} — ${money(item.price * item.quantity)}%0A`;

        }
    );


    text +=
        `%0A💰 Total: ${money(order.total)}`;


    text +=
        `%0A💳 Pagamento: ${order.payment}`;


    text +=
        `%0A📍 ${order.customer.address}, ${order.customer.number}`;


    if (order.customer.neighborhood) {

        text +=
            ` — ${order.customer.neighborhood}`;

    }


    if (order.customer.notes) {

        text +=
            `%0A📝 ${order.customer.notes}`;

    }


    window.open(
        `https://wa.me/${CONFIG.whatsapp}?text=${text}`,
        "_blank"
    );

}


/* =========================================================
   ACOMPANHAMENTO
========================================================= */

const statusList = [

    {
        id: "recebido",
        label: "Pedido recebido"
    },

    {
        id: "pago",
        label: "Pagamento confirmado"
    },

    {
        id: "preparando",
        label: "Pedido em preparação"
    },

    {
        id: "entrega",
        label: "Saiu para entrega"
    },

    {
        id: "entregue",
        label: "Pedido entregue"
    }

];


function acompanharPedido() {

    const input =
        document
            .getElementById("trackingInput")
            .value
            .replace("#","")
            .trim();


    const order =
        orders.find(
            item =>
                String(item.id) === input
        );


    const result =
        document
            .getElementById("trackingResult");


    result.classList.remove("hidden");


    if (!order) {

        result.innerHTML = `

            <div class="empty-cart">

                <div>🔎</div>

                <strong>
                    Pedido não encontrado.
                </strong>

                <p>
                    Confira o número informado.
                </p>

            </div>

        `;

        return;
    }


    const currentIndex =
        statusList.findIndex(
            status =>
                status.id === order.status
        );


    result.innerHTML = `

        <div class="tracking-header">

            <div>

                <small>
                    PEDIDO
                </small>

                <h3>
                    #${order.id}
                </h3>

            </div>

            <span class="status-pill">
                ${statusList[currentIndex]?.label || "Recebido"}
            </span>

        </div>


        <div class="timeline">

            ${statusList.map(
                (status,index) => {

                    let className = "";

                    if (index < currentIndex) {

                        className = "done";

                    }

                    else if (index === currentIndex) {

                        className = "current";

                    }


                    return `

                        <div class="timeline-step ${className}">

                            <div class="timeline-dot">

                                ${
                                    index <= currentIndex
                                    ? "✓"
                                    : ""
                                }

                            </div>

                            <div>

                                <strong>
                                    ${status.label}
                                </strong>

                                <span>

                                    ${
                                        index < currentIndex
                                        ?
                                        "Concluído"
                                        :
                                        index === currentIndex
                                        ?
                                        "Status atual"
                                        :
                                        "Aguardando"
                                    }

                                </span>

                            </div>

                        </div>

                    `;

                }
            ).join("")}

        </div>

        <div style="margin-top:25px;border-top:1px solid #eee;padding-top:20px;">

            <strong style="font-size:13px;">
                Total: ${money(order.total)}
            </strong>

        </div>

    `;

}


/* =========================================================
   ADMIN
========================================================= */

function abrirAdmin() {

    renderAdmin();

    abrirModal("adminModal");

}


function renderAdmin() {

    const stats =
        document
            .getElementById("adminStats");

    const ordersContainer =
        document
            .getElementById("adminOrders");


    const totalOrders =
        orders.length;


    const pending =
        orders.filter(
            order =>
                order.status !== "entregue"
        ).length;


    const revenue =
        orders.reduce(
            (sum,order) =>
                sum + order.total,
            0
        );


    stats.innerHTML = `

        <div class="admin-stat">

            <small>
                PEDIDOS
            </small>

            <strong>
                ${totalOrders}
            </strong>

        </div>

        <div class="admin-stat">

            <small>
                EM ANDAMENTO
            </small>

            <strong>
                ${pending}
            </strong>

        </div>

        <div class="admin-stat">

            <small>
                FATURAMENTO DEMO
            </small>

            <strong>
                ${money(revenue)}
            </strong>

        </div>

    `;


    if (!orders.length) {

        ordersContainer.innerHTML = `

            <div class="admin-empty">

                Nenhum pedido recebido ainda.

            </div>

        `;

        return;
    }


    ordersContainer.innerHTML =
        [...orders]
        .reverse()
        .map(
            order =>
                renderAdminOrder(order)
        )
        .join("");

}


function renderAdminOrder(order) {

    return `

        <div class="admin-order">

            <div class="admin-order-top">

                <div>

                    <h3>
                        Pedido #${order.id}
                    </h3>

                    <p>
                        ${order.customer.name}
                    </p>

                    <p>
                        📱 ${order.customer.phone}
                    </p>

                    <p>
                        📍 ${order.customer.address},
                        ${order.customer.number},
                        ${order.customer.neighborhood}
                    </p>

                </div>

                <strong>
                    ${money(order.total)}
                </strong>

            </div>


            <p>
                <strong>
                    Pagamento:
                </strong>

                ${order.payment}
            </p>


            <p>

                <strong>
                    Produtos:
                </strong>

                ${order.items.map(
                    item =>
                        `${item.quantity}x ${item.name}`
                ).join(", ")}

            </p>


            ${
                order.customer.notes
                ?
                `<p>
                    📝 ${order.customer.notes}
                </p>`
                :
                ""
            }


            <div class="admin-order-actions">

                <button
                    onclick="alterarStatus(${order.id}, 'recebido')">

                    Pedido recebido

                </button>

                <button
                    onclick="alterarStatus(${order.id}, 'pago')">

                    Marcar como pago

                </button>

                <button
                    onclick="alterarStatus(${order.id}, 'preparando')">

                    Em preparação

                </button>

                <button
                    onclick="alterarStatus(${order.id}, 'entrega')">

                    Saiu para entrega

                </button>

                <button
                    onclick="alterarStatus(${order.id}, 'entregue')">

                    Entregue

                </button>

                <button
                    onclick="recusarPedido(${order.id})">

                    Recusar

                </button>

            </div>

        </div>

    `;

}


/* =========================================================
   ALTERAR STATUS
========================================================= */

function alterarStatus(id,status) {

    const order =
        orders.find(
            item =>
                item.id === id
        );


    if (!order) return;


    order.status = status;


    saveOrders();

    renderAdmin();


    showToast(
        `Pedido #${id} atualizado.`,
        "success"
    );


    /* atualiza acompanhamento se estiver aberto */

    const trackingInput =
        document
            .getElementById("trackingInput");


    if (
        trackingInput.value.trim() ===
        String(id)
    ) {

        acompanharPedido();

    }

}


/* =========================================================
   RECUSAR
========================================================= */

function recusarPedido(id) {

    const confirmacao =
        confirm(
            `Recusar o pedido #${id}?`
        );


    if (!confirmacao) return;


    orders =
        orders.filter(
            order =>
                order.id !== id
        );


    saveOrders();

    renderAdmin();


    showToast(
        `Pedido #${id} recusado.`,
        "error"
    );

}


/* =========================================================
   SUPORTE
========================================================= */

function abrirSuporte() {

    abrirModal("supportModal");

}


function perguntaSuporte(tipo) {

    const respostas = {

        horario:
            "Nosso horário é configurável. No site deixamos um campo para você colocar o horário real da hamburgueria.",

        entrega:
            "Sim! A Brasa Burger possui área de delivery. A taxa demonstrativa atualmente está configurada em R$ 5,00.",

        cardapio:
            "Temos hambúrgueres, combos, acompanhamentos, bebidas e sobremesas. Você pode usar a busca e os filtros no cardápio.",

        pix:
            "O PIX demonstrativo da Brasa Burger é 22999352900. Depois de pagar, você pode enviar o comprovante pelo WhatsApp."

    };


    adicionarMensagem(
        tipo,
        respostas[tipo]
    );

}


function enviarPergunta() {

    const input =
        document
            .getElementById("supportInput");


    const question =
        input.value.trim();


    if (!question) return;


    adicionarMensagem(
        "user",
        question
    );


    input.value = "";


    setTimeout(
        () => {

            const answer =
                responderIA(question);


            adicionarMensagem(
                "bot",
                answer
            );

        },
        400
    );

}


/*
    IA SIMULADA

    Futuramente você pode trocar esta função por uma API real,
    por exemplo:

    fetch("/api/chat")

    ou uma API de IA.

    NÃO coloque uma chave secreta de API diretamente
    neste arquivo em produção.
*/

function responderIA(question) {

    const text =
        question
            .toLowerCase();


    if (
        text.includes("horário") ||
        text.includes("horario") ||
        text.includes("abre") ||
        text.includes("fecha")
    ) {

        return `
            O horário de funcionamento é configurável
            pelo dono da Brasa Burger.
        `;

    }


    if (
        text.includes("entrega") ||
        text.includes("delivery")
    ) {

        return `
            Sim! Temos delivery.
            A taxa demonstrativa está configurada
            em R$ 5,00.
        `;

    }


    if (
        text.includes("pix") ||
        text.includes("pagar")
    ) {

        return `
            Você pode pagar pelo PIX usando a chave
            22999352900.
            Depois, envie o comprovante pelo WhatsApp.
        `;

    }


    if (
        text.includes("cardápio") ||
        text.includes("cardapio") ||
        text.includes("hambúrguer") ||
        text.includes("hamburguer")
    ) {

        return `
            Temos Brasa Clássico, Bacon, Duplo,
            Cheddar, Especial, Frango, combos,
            acompanhamentos, bebidas e sobremesas.
        `;

    }


    if (
        text.includes("pedido") ||
        text.includes("onde está") ||
        text.includes("onde esta")
    ) {

        return `
            Você pode acompanhar seu pedido na seção
            "Acompanhar pedido" usando o número gerado
            na finalização.
        `;

    }


    if (
        text.includes("cancelar") ||
        text.includes("cancelamento")
    ) {

        return `
            Claro! Você pode falar diretamente conosco
            pelo WhatsApp para solicitar atendimento.
            <br><br>
            <a
                href="https://wa.me/552299352900"
                target="_blank"
                style="color:#e9281a;font-weight:900">
                Falar com atendimento
            </a>
        `;

    }


    if (
        text.includes("atendente") ||
        text.includes("humano") ||
        text.includes("pessoa")
    ) {

        return `
            Claro! Você pode falar diretamente conosco
            pelo WhatsApp.
            <br><br>
            <a
                href="https://wa.me/552299352900"
                target="_blank"
                style="color:#e9281a;font-weight:900">
                Falar com atendimento
            </a>
        `;

    }


    return `
        Posso ajudar com cardápio, horário,
        delivery, PIX, acompanhamento do pedido
        ou atendimento humano.
    `;

}


function adicionarMensagem(type,message) {

    const chat =
        document
            .getElementById("chatMessages");


    const div =
        document.createElement("div");


    div.className =
        type === "user"
        ?
        "user-message"
        :
        "bot-message";


    div.innerHTML =
        message;


    chat.appendChild(div);


    chat.scrollTop =
        chat.scrollHeight;

}


/* =========================================================
   MODAIS
========================================================= */

function abrirModal(id) {

    document
        .getElementById(id)
        .classList.add("active");


    document.body.classList.add(
        "modal-open"
    );

}


function fecharModal(id) {

    document
        .getElementById(id)
        .classList.remove("active");


    if (
        !document.querySelector(
            ".modal-overlay.active"
        )
    ) {

        document.body.classList.remove(
            "modal-open"
        );

    }

}


/* =========================================================
   MENU MOBILE
========================================================= */

function toggleMobileMenu() {

    document
        .getElementById("mobileMenu")
        .classList.toggle("active");

}


function fecharMobileMenu() {

    document
        .getElementById("mobileMenu")
        .classList.remove("active");

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message,type="success") {

    const container =
        document.getElementById(
            "toastContainer"
        );


    const toast =
        document.createElement("div");


    toast.className =
        `toast ${type}`;


    toast.textContent =
        message;


    container.appendChild(toast);


    setTimeout(
        () => {

            toast.remove();

        },
        3000
    );

}


/* =========================================================
   ANIMAÇÃO CARRINHO
========================================================= */

function animateCart() {

    const cartButton =
        document.querySelector(
            ".cart-button"
        );


    if (!cartButton) return;


    cartButton.animate(
        [
            {
                transform:
                    "scale(1)"
            },

            {
                transform:
                    "scale(1.2)"
            },

            {
                transform:
                    "scale(1)"
            }
        ],
        {
            duration: 400
        }
    );

}


/* =========================================================
   CLUBE BRASA
========================================================= */

function getPoints() {

    return Number(
        localStorage.getItem(
            "brasa_points"
        ) || 120
    );

}


function adicionarPontos(points) {

    const current =
        getPoints();


    localStorage.setItem(
        "brasa_points",
        current + points
    );


    atualizarClube();

}


function atualizarClube() {

    const points =
        getPoints();


    const progress =
        Math.min(
            100,
            (points / 200) * 100
        );


    const pointsElement =
        document.getElementById(
            "clubPoints"
        );


    const progressElement =
        document.getElementById(
            "clubProgress"
        );


    if (pointsElement) {

        pointsElement.textContent =
            `${points} pontos`;

    }


    if (progressElement) {

        progressElement.style.width =
            `${progress}%`;

    }

}


/* =========================================================
   REDES SOCIAIS
========================================================= */

function setupSocialLinks() {

    document
        .getElementById("instagramLink")
        .href =
        CONFIG.social.instagram;


    document
        .getElementById("tiktokLink")
        .href =
        CONFIG.social.tiktok;


    document
        .getElementById("facebookLink")
        .href =
        CONFIG.social.facebook;

}


/* =========================================================
   FECHAR MODAL CLICANDO FORA
========================================================= */

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "modal-overlay"
            )
        ) {

            event.target.classList.remove(
                "active"
            );


            if (
                !document.querySelector(
                    ".modal-overlay.active"
                )
            ) {

                document.body.classList.remove(
                    "modal-open"
                );

            }

        }

    }
);


/* =========================================================
   TECLA ESC
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key !== "Escape") return;


        document
            .querySelectorAll(
                ".modal-overlay.active"
            )
            .forEach(
                modal =>
                    modal.classList.remove("active")
            );


        document.body.classList.remove(
            "modal-open"
        );

    }
);
