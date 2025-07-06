const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

// Toggle on hamburger click
btn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent outside click trigger
    menu.classList.toggle('hidden');
});

// Close on clicking any menu link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// Close if click outside menu or hamburger
document.addEventListener('click', (e) => {
    if (!menu.classList.contains('hidden') &&
        !menu.contains(e.target) &&
        !btn.contains(e.target)) {
        menu.classList.add('hidden');
    }
});

const products = [
    {
        id: 12,
        name: "Gold Necklace",
        description: "22K gold, handcrafted design.",
        price: "₹25,000",
        image: "https://ratnalayajewels.com/wp-content/uploads/2024/09/2.jpg",
    },
    {
        id: 13,
        name: "Diamond Ring",
        description: "White gold with solitaire diamond.",
        price: "₹40,000",
        image: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/daffney1-n/diamond/diamond-Brillant_AAA/stone2/diamond-Brillant_AAA/stone3/diamond-Brillant_AAA/alloycolour/yellow.jpg",
    },
    {
        id: 14,
        name: "Silver Bracelet",
        description: "Sterling silver with charms.",
        price: "₹5,500",
        image: "https://media.landmarkshops.in/cdn-cgi/image/h=550,w=550,q=85,fit=cover/lifestyle/1000014154376-1000014154375_01-2100.jpg",
    },
    // Add more products here...
];
const container = document.getElementById('product-container');

products.forEach(product => {

    const whatsappText = `I am Intereseted in ${product.name}: product-${product.id}` 
    const productCard = `
      <div class="bg-white rounded-2xl shadow hover:shadow-2xl p-4" id="product-${product.id}">
        <img src="${product.image}" alt="${product.name}" class="rounded-xl mb-4 w-full h-48 object-cover">
        <h3 class="text-xl font-semibold mb-1">${product.name}</h3>
        <p class="text-gray-500 mb-2">${product.description}</p>
        <p class="font-bold text-yellow-700 mb-3">${product.price}</p>
        <a href="https://wa.me/917226035163?text=${encodeURIComponent(whatsappText)}"
           target="_blank"
           class="block text-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
           Buy on WhatsApp
        </a>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', productCard);
});