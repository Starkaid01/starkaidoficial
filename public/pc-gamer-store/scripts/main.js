// Dados dos produtos (em um projeto real, isso viria de uma API)
const products = {
    "destaques": [
        {
            "id": 1,
            "name": "PC Gamer Ultimate",
            "price": 8999.99,
            "image": "images/pc-ultimate.png",
            "description": "Intel i9-13900K, RTX 4090, 64GB DDR5, SSD 2TB, Water Cooler"
        },
        {
            "id": 2,
            "name": "PC Gamer Pro",
            "price": 6599.99,
            "image": "images/pc-pro.png",
            "description": "AMD Ryzen 9 7950X, RTX 4080, 32GB DDR5, SSD 1TB"
        },
        {
            "id": 3,
            "name": "PC Gamer Standard",
            "price": 4599.99,
            "image": "images/pc-standard.png",
            "description": "AMD Ryzen 7 7800X, RTX 4070 Ti, 16GB DDR4, SSD 500GB"
        },
        {
            "id": 4,
            "name": "PC Gamer Starter",
            "price": 3299.99,
            "image": "images/pc-starter.png",
            "description": "Intel i5-13600K, RTX 4060, 16GB DDR4, SSD 500GB"
        }
    ],
    "pcs-completos": [
        {
            "id": 1,
            "name": "PC Gamer Ultimate",
            "price": 8999.99,
            "image": "images/pc-ultimate.png",
            "description": "Intel i9-13900K, RTX 4090, 64GB DDR5, SSD 2TB, Water Cooler"
        },
        {
            "id": 2,
            "name": "PC Gamer Pro",
            "price": 6599.99,
            "image": "images/pc-pro.png",
            "description": "AMD Ryzen 9 7950X, RTX 4080, 32GB DDR5, SSD 1TB"
        },
        {
            "id": 3,
            "name": "PC Gamer Standard",
            "price": 4599.99,
            "image": "images/pc-standard.png",
            "description": "AMD Ryzen 7 7800X, RTX 4070 Ti, 16GB DDR4, SSD 500GB"
        },
        {
            "id": 4,
            "name": "PC Gamer Starter",
            "price": 3299.99,
            "image": "images/pc-starter.png",
            "description": "Intel i5-13600K, RTX 4060, 16GB DDR4, SSD 500GB"
        },
        {
            "id": 5,
            "name": "PC Gamer Compact",
            "price": 2799.99,
            "image": "images/pc-compact.png",
            "description": "AMD Ryzen 5 7600X, RTX 3060, 16GB DDR4, SSD 500GB"
        },
        {
            "id": 6,
            "name": "PC Gamer RGB",
            "price": 4999.99,
            "image": "images/pc-rgb.png",
            "description": "Intel i7-13700K, RTX 4070, 32GB DDR4, SSD 1TB, RGB Sync"
        }
    ],
    "processadores": [
        {
            "id": 7,
            "name": "Intel Core i9-13900K",
            "price": 2899.99,
            "image": "images/cpu-i9.png",
            "description": "24 núcleos (8P+16E), até 5.8GHz, 36MB Cache"
        },
        {
            "id": 8,
            "name": "AMD Ryzen 9 7950X",
            "price": 2599.99,
            "image": "images/cpu-ryzen9.png",
            "description": "16 núcleos, até 5.7GHz, 80MB Cache, 170W"
        },
        {
            "id": 9,
            "name": "Intel Core i7-13700K",
            "price": 1899.99,
            "image": "images/cpu-i7.png",
            "description": "16 núcleos (8P+8E), até 5.4GHz, 30MB Cache"
        },
        {
            "id": 10,
            "name": "AMD Ryzen 7 7800X",
            "price": 1599.99,
            "image": "images/cpu-ryzen7.png",
            "description": "8 núcleos, até 5.2GHz, 40MB Cache, 105W"
        }
    ],
    "placas-mae": [
        {
            "id": 11,
            "name": "ASUS ROG Maximus Z790",
            "price": 2499.99,
            "image": "images/mobo-asus.png",
            "description": "Intel Z790, DDR5, PCIe 5.0, Wi-Fi 6E, RGB"
        },
        {
            "id": 12,
            "name": "MSI MPG X670E Carbon",
            "price": 2199.99,
            "image": "images/mobo-msi.png",
            "description": "AMD X670E, DDR5, PCIe 5.0, Wi-Fi 6E"
        },
        {
            "id": 13,
            "name": "Gigabyte B650 AORUS Elite",
            "price": 1499.99,
            "image": "images/mobo-gigabyte.png",
            "description": "AMD B650, DDR5, PCIe 4.0, 2.5Gb LAN"
        },
        {
            "id": 14,
            "name": "ASRock Z690 Steel Legend",
            "price": 1299.99,
            "image": "images/mobo-asrock.png",
            "description": "Intel Z690, DDR4, PCIe 4.0, ARGB"
        }
    ],
    "memorias": [
        {
            "id": 15,
            "name": "Corsair Dominator Platinum RGB 64GB",
            "price": 1899.99,
            "image": "images/ram-corsair.png",
            "description": "DDR5 6000MHz, CL36, RGB, 2x32GB"
        },
        {
            "id": 16,
            "name": "G.Skill Trident Z5 RGB 32GB",
            "price": 999.99,
            "image": "images/ram-gskill.png",
            "description": "DDR5 5600MHz, CL36, RGB, 2x16GB"
        },
        {
            "id": 17,
            "name": "Kingston Fury Beast 32GB",
            "price": 699.99,
            "image": "images/ram-kingston.png",
            "description": "DDR4 3600MHz, CL18, 2x16GB"
        },
        {
            "id": 18,
            "name": "HyperX Predator RGB 16GB",
            "price": 499.99,
            "image": "images/ram-hyperx.png",
            "description": "DDR4 3200MHz, CL16, RGB, 2x8GB"
        }
    ],
    "coolers": [
        {
            "id": 19,
            "name": "Corsair iCUE H150i Elite Capellix",
            "price": 899.99,
            "image": "images/cooler-corsair.png",
            "description": "Water Cooler 360mm, RGB, 3 Fans"
        },
        {
            "id": 20,
            "name": "NZXT Kraken Z73 RGB",
            "price": 1099.99,
            "image": "images/cooler-nzxt.png",
            "description": "Water Cooler 360mm, LCD Display, RGB"
        },
        {
            "id": 21,
            "name": "Noctua NH-D15",
            "price": 599.99,
            "image": "images/cooler-noctua.png",
            "description": "Air Cooler Duplo, 140mm, Silent"
        },
        {
            "id": 22,
            "name": "Cooler Master Hyper 212 RGB",
            "price": 299.99,
            "image": "images/cooler-cm.png",
            "description": "Air Cooler, 120mm, RGB"
        }
    ],
    "placas-video": [
        {
            "id": 23,
            "name": "NVIDIA RTX 4090 24GB",
            "price": 8999.99,
            "image": "images/gpu-rtx4090.png",
            "description": "24GB GDDR6X, 384-bit, DLSS 3"
        },
        {
            "id": 24,
            "name": "AMD RX 7900 XTX 24GB",
            "price": 5999.99,
            "image": "images/gpu-rx7900.png",
            "description": "24GB GDDR6, 384-bit, Ray Tracing"
        },
        {
            "id": 25,
            "name": "NVIDIA RTX 4080 16GB",
            "price": 5499.99,
            "image": "images/gpu-rtx4080.png",
            "description": "16GB GDDR6X, 256-bit, DLSS 3"
        },
        {
            "id": 26,
            "name": "NVIDIA RTX 4070 Ti 12GB",
            "price": 4299.99,
            "image": "images/gpu-rtx4070ti.png",
            "description": "12GB GDDR6X, 192-bit, DLSS 3"
        }
    ]
};

// Carrinho de compras
let cart = [];

// Elementos do DOM
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.querySelector('.cart-modal');
const closeCart = document.querySelector('.close-cart');
const cartItemsContainer = document.querySelector('.cart-items');
const cartCount = document.querySelector('.cart-count');
const totalPriceElement = document.querySelector('.total-price');

// Função para formatar preço
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

// Função para renderizar produtos
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${formatPrice(product.price)}</p>
                <p class="description">${product.description}</p>
                <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
            </div>
        `;
        container.appendChild(productElement);
    });

    // Adicionar event listeners aos botões
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Função para adicionar ao carrinho
function addToCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    
    // Encontrar o produto em todas as categorias
    let productToAdd = null;
    for (const category in products) {
        const foundProduct = products[category].find(p => p.id === productId);
        if (foundProduct) {
            productToAdd = foundProduct;
            break;
        }
    }
    
    if (!productToAdd) return;
    
    // Verificar se o produto já está no carrinho
    const existingItem = cart.find(item => item.id === productToAdd.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...productToAdd,
            quantity: 1
        });
    }
    
    updateCart();
    showCartNotification();
}

// Função para mostrar notificação de adição ao carrinho
function showCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = 'Produto adicionado ao carrinho!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 2000);
}

// Função para atualizar o carrinho
function updateCart() {
    // Atualizar contador
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Atualizar itens no modal
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        totalPriceElement.textContent = formatPrice(0);
        return;
    }
    
    let totalPrice = 0;
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${formatPrice(item.price)}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="decrease-quantity" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="increase-quantity" data-id="${item.id}">+</button>
            </div>
            <div class="remove-item" data-id="${item.id}">
                <i class="fas fa-trash"></i>
            </div>
        `;
        
        cartItemsContainer.appendChild(itemElement);
    });
    
    // Atualizar preço total
    totalPriceElement.textContent = formatPrice(totalPrice);
    
    // Adicionar event listeners para os botões de quantidade
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });
    
    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeItem);
    });
}

// Funções para manipular quantidade
function increaseQuantity(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        updateCart();
    }
}

function decreaseQuantity(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        updateCart();
    } else if (item && item.quantity === 1) {
        removeItem(e);
    }
}

function removeItem(e) {
    const productId = parseInt(e.target.closest('.remove-item').getAttribute('data-id'));
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Função para trocar categoria de componentes
function setupCategoryTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remover classe active de todas as tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Adicionar classe active à tab clicada
            tab.classList.add('active');
            
            // Carregar produtos da categoria selecionada
            const category = tab.getAttribute('data-category');
            renderProducts(products[category], 'components-products');
        });
    });
}

// Event Listeners
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar produtos em destaque
    renderProducts(products.destaques, 'featured-products');
    
    // Renderizar PCs completos
    renderProducts(products['pcs-completos'], 'complete-pcs');
    
    // Renderizar primeira categoria de componentes
    renderProducts(products.processadores, 'components-products');
    
    // Configurar tabs de categorias
    setupCategoryTabs();
    
    // Atualizar carrinho (para garantir que está vazio inicialmente)
    updateCart();
});

// Estilo adicional para notificação
const style = document.createElement('style');
style.textContent = `
    .cart-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--success);
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 1001;
        animation: slideIn 0.5s forwards;
    }
    
    .fade-out {
        animation: fadeOut 0.5s forwards;
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);