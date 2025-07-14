  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  // Toggle on hamburger click
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent outside click trigger
    menu.classList.toggle("hidden");
  });

  // Close on clicking any menu link
  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });

  // Close if click outside menu or hamburger
  document.addEventListener("click", (e) => {
    if (
      !menu.classList.contains("hidden") &&
      !menu.contains(e.target) &&
      !btn.contains(e.target)
    ) {
      menu.classList.add("hidden");
    }
  });

  const products = [
    {
      name: "Gold Necklace",
      description: "22K gold, handcrafted design.",
      price: 27999,
      image: "img/images/goldNecklace.jpg",
    },
    {
      name: "Diamond Ring",
      description: "White gold with solitaire diamond.",
      price: 10999,
      image: "img/images/dimondRing.avif",
    },
    {
      name: "Silver Bracelet",
      description: "Sterling silver with charms.",
      price: 9999,
      image: "img/images/silverBracelet.jpg",
    },
    {
      name: "Gold Bangle",
      image: "img/rings/4dotRing.jpeg",
      description: "Gold bangle with four prominent round gemstones.",
      price: 29999,
    },
    {
      name: "Ornate earring",
      image: "img/rings/earingd.jpeg",
      description: "Ornate earrings with blue gemstones and a luxurious design.",
      price: 6999,
    },
    {
      name: "Gold Jhumkas",
      image: "img/rings/goldearings.jpeg",
      description:
        "Intricate gold jhumkas with traditional Indian craftsmanship.",
      price: 9899,
    },
    {
      name: "Gold Ring and Braclet",
      image: "img/rings/JaguarRing.jpeg",
      description: "Gold ring and bracelet set with panther head detailing.",
      price: 20999,
    },
    {
      name: "Desgined Gold Bangle",
      image: "img/rings/patternRing.jpeg",
      description: "Elegant floral-designed gold bangles on soft fabric.",
      price: 12999,
    },
    {
      name: "Twisted Goldearrings",
      image: "img/rings/twisted-earings.jpeg",
      description: "Chic twisted gold hoop earrings perfect for modern wear.",
      price: 7999,
    },
    {
      name: "Gold Rings",
      image: "img/rings/shapering.jpeg",
      description:
        "Stacked gold rings with heart, round, and bar-shaped diamond tops.",
      price: 12999,
    },
    {
      name: "Emerald Diamond Rose Gold Bangles",
      image: "img/images/bangle1.jpeg",
      description:
        "Elegant rose gold bangles featuring alternating pear-shaped diamonds and vibrant emeralds.",
      price: 15999,
    },
    {
      name: "Traditional Kundan Gold Bangles",
      image: "img/images/bangle2.jpeg",
      description:
        "Vintage-style gold bangles embellished with traditional uncut diamond kundan work.",
      price: 16999,
    },
    {
      name: "Blue Sapphire Diamond Necklace Set",
      image: "img/images/bluediamondnecklace.jpeg",
      description:
        "Royal necklace set with deep blue sapphires surrounded by dazzling diamonds.",
      price: 18999,
    },
    {
      name: "Kundan and Beaded Bridal Necklace",
      image: "img/images/bluediamondneckless.jpeg",
      description:
        "Bridal necklace with kundan floral motifs and blue teardrop beads.",
      price: 17999,
    },
    {
      name: "Bright Silver Cubic Zirconia Set",
      image: "img/images/brightsilverset.jpeg",
      description:
        "Sparkling silver necklace and earring set with brilliant-cut cubic zirconia stones.",
      price: 13999,
    },
    {
      name: "Temple Jewelry Antique Necklace",
      image: "img/images/coppernecklace.jpeg",
      description:
        "Antique finish temple necklace with intricate goddess motifs and green accents.",
      price: 19999,
    },
    {
      name: "Rose Gold and Diamond Spiral Earrings",
      image: "img/images/coverring.jpeg",
      description:
        "Contemporary spiral earrings with a blend of rose gold and pave-set diamonds.",
      price: 12999,
    },
    {
      name: "Multi-Diamond Drop Earrings",
      image: "img/images/diamondring.jpeg",
      description:
        "Stylish drop earrings with cascading round-cut diamonds in a modern design.",
      price: 18999,
    },
    {
      name: "Emerald Feather Statement Earrings",
      image: "img/images/emerald-wings.jpeg",
      description:
        "Statement earrings with emerald clusters and flowing diamond-studded wings.",
      price: 29999,
    },
    {
      name: "Floral Diamond Rose Gold Bangle",
      image: "img/images/flowerring.jpeg",
      description:
        "Slim rose gold bangle with a central diamond floral motif and double band.",
      price: 13999,
    },
    {
      name: "Ruby and Diamond Necklace Set",
      image: "img/images/jewel-3.jpeg",
      description: "Gold necklace with ruby and diamonds",
      price: 17999,
    },
    {
      name: "Emerald and Diamond Bangles",
      image: "img/images/jewel-9.jpeg",
      description: "Rose gold bangles with emeralds and polki",
      price: 11999,
    },
    {
      name: "Ruby and Emerald Choker Set",
      image: "img/images/jewel-7.jpeg",
      description: "Heavy choker with ruby and emerald drops",
      price: 26999,
    },
    {
      name: "Kundan and Enamel Necklace Set",
      image: "img/images/jewel-2.jpeg",
      description: "Gold necklace with kundan and green enamel",
      price: 10999,
    },
    {
      name: "Pearl and Kundan Hair Accessories",
      image: "img/images/jewel-6.jpeg",
      description: "Traditional hair accessory with pearls and kundan",
      price: 25999,
    },
    {
      name: "Diamond Hoop Earrings",
      image: "img/images/jewel-1.jpeg",
      description: "Rose gold hoop earrings with diamonds",
      price: 8999,
    },
    {
      name: "Diamond Double Hoop Earrings",
      image: "img/images/jewel-4.jpeg",
      description: "Unique double hoop earrings with diamonds",
      price: 25999,
    },
    {
      name: "Crystal Choker and Earring Set",
      image: "img/images/jewel-8.jpeg",
      description: "Glamorous choker set with clear crystals",
      price: 27999,
    },
    {
      name: "Traditional Gold Choker",
      image: "img/images/jewel-5.jpeg",
      description: "Intricate gold choker with floral design",
      price: 18999,
    },
    {
      name: "Kundan and Meenakari Earrings",
      image: "img/images/goldenearings.jpeg",
      description: "Chandbali earrings with kundan and blue meenakari",
      price: 14999,
    },
    {
      name: "Kundan and Pearl Choker Set",
      image: "img/images/jewel-17.jpeg",
      description: "Elegant kundan and pearl choker with maang tikka",
      price: 27999,
    },
    {
      name: "Polki Diamond Bangles",
      image: "img/images/jewel-10.jpeg",
      description: "Traditional polki diamond bangles with intricate design",
      price: 22999,
    },
    {
      name: "Antique Gold Temple Necklace",
      image: "img/images/jewel-14.jpeg",
      description: "South Indian style temple necklace with Goddess Lakshmi",
      price: 19999,
    },
    {
      name: "Silver Plated Crystal Choker Set",
      image: "img/images/jewel-19.jpeg",
      description: "Sparkling silver-plated choker and earrings with crystals",
      price: 19999,
    },
    {
      name: "Kundan and Emerald Choker",
      image: "img/images/jewel-16.jpeg",
      description: "Grand kundan choker with emerald drops and pearls",
      price: 26999,
    },
    {
      name: "Emerald and Polki Ring",
      image: "img/images/jewel-11.jpeg",
      description: "Statement ring with a large emerald and polki diamonds",
      price: 18999,
    },
    {
      name: "Emerald and Diamond Drop Earrings",
      image: "img/images/jewel-18.jpeg",
      description: "Long silver-toned earrings with emerald and diamond drops",
      price: 24999,
    },
    {
      name: "Meenakari and Kundan Chandbalis",
      image: "img/images/jewel-13.jpeg",
      description:
        "Exquisite meenakari and kundan chandbali earrings with pearls",
      price: 22999,
    },
    {
      name: "Polki and Gold Necklace",
      image: "img/images/jewel-15.jpeg",
      description: "Unique polki necklace with artistic gold design",
      price: 14999,
    },
    {
      name: "Diamond and Gold Necklace Set",
      image: "img/images/jewel-12.jpeg",
      description:
        "Contemporary diamond and gold necklace with matching earrings",
      price: 28999,
    },
    {
      name: "Ruby and Emerald Choker Set",
      image: "img/images/necklace1.jpeg",
      description: "Traditional choker set with rubies and emeralds.",
      price: 25999,
    },
    {
      name: "Multicolor Kundan Maang Tikka Set",
      image: "img/images/multicolor.jpeg",
      description: "Vibrant kundan set with earrings and maang tikka.",
      price: 19999,
    },
    {
      name: "Emerald Green Meenakari Necklace Set",
      image: "img/images/necklace6.jpeg",
      description: "Gold necklace and earrings with green meenakari.",
      price: 27999,
    },
    {
      name: "White Stone Choker Set",
      image: "img/images/necklace2.jpeg",
      description: "Sparkling white stone choker with matching earrings.",
      price: 13999,
    },
    {
      name: "Polki Diamond and Gold Necklace",
      image: "img/images/necklace4.jpeg",
      description: "Elegant gold necklace adorned with polki diamonds.",
      price: 14999,
    },
    {
      name: "Blue Stone Kundan Necklace Set",
      image: "img/images/necklace.jpeg",
      description: "Kundan necklace set featuring striking blue stones.",
      price: 28999,
    },
    {
      name: "Multicolor Kundan Maang Tikka Set",
      image: "img/images/jewel-20.jpeg",
      description: "Colorful kundan set with earrings and maang tikka.",
      price: 7999,
    },
    {
      name: "Emerald Drop Kundan Choker",
      image: "img/images/necklace5.jpeg",
      description: "Heavy kundan choker with emerald and pearl drops.",
      price: 12999,
    },
    {
      name: "White Stone Studded Necklace Set",
      image: "img/images/necklace3.jpeg",
      description: "Classy white stone necklace set with gold accents.",
      price: 19999,
    },
    {
      name: "Silver Plated Diamond Necklace Set",
      image: "img/images/jewel-21.jpeg",
      description: "Modern silver-plated necklace with sparkling diamonds.",
      price: 13999,
    },
    {
      name: "Rose Gold Diamond Bracelet",
      image: "img/images/p2.jpeg",
      description: "Elegant rose gold bracelet with floral diamond design.",
      price: 8999,
    },
    {
      name: "Crystal Choker and Earring Set",
      image: "img/images/silvernecklace.jpeg",
      description: "Sparkling crystal choker set with dangle earrings.",
      price: 12999,
    },
    {
      name: "Ruby Drop Pendant Set",
      image: "img/images/pendent.jpeg",
      description: "Rose gold pendant and earrings with ruby drops.",
      price: 7999,
    },
    {
      name: "Emerald and Diamond Drop Earrings",
      image: "img/images/silverearings.jpeg",
      description: "Large silver-toned earrings with emerald and diamond drops.",
      price: 8599,
    },
    {
      name: "Emerald and Polki Diamond Ring",
      image: "img/images/ring.jpeg",
      description: "Grand ring with a central emerald and polki diamonds.",
      price: 9990,
    },
    {
      name: "Kundan and Pearl Choker Set",
      image: "img/images/set.jpeg",
      description: "Traditional kundan choker set with pearl drops.",
      price: 7999,
    },
    {
      name: "Floral Diamond Necklace Set",
      image: "img/images/smalldiamondnecklace.jpeg",
      description: "Delicate gold necklace and earrings with floral diamonds.",
      price: 11999,
    },
    {
      name: "Multicolor Meenakari Necklace Set",
      image: "img/images/necklace8.jpeg",
      description: "Traditional gold necklace with colorful meenakari work.",
      price: 11999,
    },
    {
      name: "Mint Green Stone Necklace Set",
      image: "img/images/necklace7.jpeg",
      description: "Elegant gold necklace and earrings with mint green stones.",
      price: 16999,
    },
  ];

  const container = document.getElementById("product-container");
  products.forEach((product, index) => {
    const whatsappText = `I am Intereseted in ${product.name}:  https://mayur26061.github.io/jewels/#product-${index}`;
    const productCard = `
        <div class="flex flex-col justify-between bg-white shadow rounded-2xl hover:shadow-2xl p-4" id="product-${index}">
          <img src="${product.image}" alt="${product.name
      }" class="rounded-xl mb-4 w-full h-48 object-cover">
          <h3 class="text-xl font-semibold mb-1">${product.name}</h3>
          <p class="text-gray-500 mb-2">${product.description}</p>
          <p class="font-bold text-yellow-700 mb-3">₹ ${product.price}</p>
          <a href="https://wa.me/917738789682?text=${encodeURIComponent(
        whatsappText
      )}"
            target="_blank"
            class="block text-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Buy on WhatsApp
          </a>
        </div>
      `;
    container.insertAdjacentHTML("beforeend", productCard);
  });

  document.addEventListener("DOMContentLoaded", () => {
    if (location.hash) {
      const divs = document.querySelector(location.hash);
      divs.classList.add("shadow-2xl");
      divs.classList.add("border");
      divs.classList.add("-mt-2");
      setTimeout(() => {
        divs.classList.remove("-mt-2");
        divs.classList.remove("shadow-2xl");
        divs.classList.remove("border");
      }, 3000);
      console.log("Page loaded with hash:", location.hash);
    }
  });

  const track = document.getElementById("carousel-track");
  const slides = track.children;
  let index = 0;

  setInterval(() => {
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, 4000); // 4 seconds interval
