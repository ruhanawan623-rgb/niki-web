// NIKI Official E-Commerce Storefront Engine
const PRODUCTS = [
  {
    id: 1,
    name: "NIKI Air Max Neon Pulse",
    subtag: "Men's Road Running Shoes",
    category: "shoes",
    priceUSD: 199.99,
    oldPriceUSD: 240.00,
    rating: 4.9,
    reviews: 328,
    badge: "JUST IN",
    image: "images/shoe_1.png",
    colors: ["Cyber Teal", "Neon Volt", "Stealth Black"],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    desc: "Engineered for revolutionary energy return and maximum road comfort. Features dual-density Air cushioning, breathable high-tech mesh, and responsive rubber tread."
  },
  {
    id: 2,
    name: "NIKI Stealth Vaporfly Pro",
    subtag: "Unisex Carbon Fiber Racing Shoes",
    category: "shoes",
    priceUSD: 219.99,
    oldPriceUSD: 260.00,
    rating: 4.8,
    reviews: 215,
    badge: "BEST SELLER",
    image: "images/shoe_2.png",
    colors: ["Matte Black", "Carbon Red"],
    sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
    desc: "Ultra-lightweight marathon racing shoe featuring a full-length carbon fiber plate and ZoomX foam for explosive stride propulsion."
  },
  {
    id: 3,
    name: "NIKI Jordan Retro Horizon",
    subtag: "Men's High-Top Basketball Shoes",
    category: "shoes",
    priceUSD: 249.99,
    oldPriceUSD: 289.99,
    rating: 5.0,
    reviews: 540,
    badge: "MEMBER EXCLUSIVE",
    image: "images/shoe_3.png",
    colors: ["Retro Red/Black", "Classic White"],
    sizes: ["US 7", "US 8", "US 9.5", "US 11", "US 13"],
    desc: "Iconic high-top silhouette built with full-grain leather, supportive ankle padding, and timeless heritage court details."
  },
  {
    id: 4,
    name: "NIKI Cloud Foam Glide",
    subtag: "Unisex Athletic Recovery Slides",
    category: "slippers",
    priceUSD: 59.99,
    oldPriceUSD: 75.00,
    rating: 4.7,
    reviews: 189,
    badge: "JUST IN",
    image: "images/slipper_1.png",
    colors: ["Bone White", "Lunar Gray"],
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11"],
    desc: "Supreme ultra-soft cloud foam slide slippers with contoured footbed for post-workout recovery and home luxury."
  },
  {
    id: 5,
    name: "NIKI Alpha Executive Leather",
    subtag: "Men's Luxury Leather Slide Slippers",
    category: "slippers",
    priceUSD: 89.99,
    oldPriceUSD: 110.00,
    rating: 4.9,
    reviews: 142,
    badge: "BEST SELLER",
    image: "images/slipper_2.png",
    colors: ["Midnight Black", "Brushed Silver"],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    desc: "Crafted from textured dark leather with brushed metallic logo hardware. Premium luxury sandal definition."
  },
  {
    id: 6,
    name: "NIKI Tech Fleece Tapered Joggers",
    subtag: "Men's Tapered Sweatpants",
    category: "joggers",
    priceUSD: 109.99,
    oldPriceUSD: 130.00,
    rating: 4.8,
    reviews: 410,
    badge: "BEST SELLER",
    image: "images/jogger_1.png",
    colors: ["Heather Gray", "Obsidian Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    desc: "Slim-fit tapered joggers crafted from lightweight warmth-trapping Tech Fleece fabric with bonded zipper storage pockets."
  },
  {
    id: 7,
    name: "NIKI Cyber-Track Pants",
    subtag: "Men's Reflective Track Joggers",
    category: "joggers",
    priceUSD: 129.99,
    oldPriceUSD: 150.00,
    rating: 4.9,
    reviews: 175,
    badge: "JUST IN",
    image: "images/jogger_2.png",
    colors: ["Reflective Black", "Silver Trim"],
    sizes: ["S", "M", "L", "XL"],
    desc: "Streetwear track pants featuring 3M high-reflective trim lines, articulated knees, and storm-proof fabric weave."
  },
  {
    id: 8,
    name: "NIKI Down Metallic Winter Parka",
    subtag: "Men's Insulated Heavyweight Down Coat",
    category: "coats",
    priceUSD: 299.99,
    oldPriceUSD: 360.00,
    rating: 5.0,
    reviews: 290,
    badge: "MEMBER EXCLUSIVE",
    image: "images/coat_1.png",
    colors: ["Glossy Chrome Black", "Deep Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    desc: "Heavyweight arctic down jacket coat featuring metallic reflective gloss finish, thermal fleece lining, and insulated storm hood."
  },
  {
    id: 9,
    name: "NIKI Windrunner Technical Jacket",
    subtag: "Men's Weather-Proof Running Coat",
    category: "coats",
    priceUSD: 159.99,
    oldPriceUSD: 190.00,
    rating: 4.8,
    reviews: 312,
    badge: "BEST SELLER",
    image: "images/coat_2.png",
    colors: ["Cyan Chevron", "Stealth Grey"],
    sizes: ["S", "M", "L", "XL"],
    desc: "Lightweight breathable windbreaker coat engineered with classic 26-degree chevron wind-shield lines and water-repellent finish."
  }
];

const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 }
};

// STATE
let state = {
  cart: [],
  wishlist: [],
  currentCategory: 'all',
  searchQuery: '',
  maxPrice: 350,
  sortBy: 'featured',
  currency: 'USD',
  appliedPromo: null,
  currentTheme: 'infrared'
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProducts();
  setupEventListeners();
  updateCartUI();
});

function initTheme() {
  const savedTheme = localStorage.getItem('niki_theme') || 'infrared';
  setTheme(savedTheme);
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) themeSelect.value = savedTheme;
}

function setTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('niki_theme', themeName);
  state.currentTheme = themeName;
}

function formatPrice(amountInUSD) {
  const curr = CURRENCIES[state.currency];
  const converted = amountInUSD * curr.rate;
  return `${curr.symbol}${converted.toFixed(2)}`;
}

// EVENT LISTENERS
function setupEventListeners() {
  // Theme Select
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) {
    themeSelect.addEventListener('change', (e) => {
      const selectedOptionText = e.target.options[e.target.selectedIndex].text;
      setTheme(e.target.value);
      showToast(`Color Theme: ${selectedOptionText}`);
    });
  }

  // Currency Select
  const currencySelect = document.getElementById('currencySelect');
  if (currencySelect) {
    currencySelect.addEventListener('change', (e) => {
      state.currency = e.target.value;
      renderProducts();
      updateCartUI();
      showToast(`Currency updated to ${state.currency}`);
    });
  }

  // Category filter pills
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      filterPills.forEach(p => p.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');
      state.currentCategory = target.dataset.category;
      renderProducts();
    });
  });

  // Search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase();
      renderProducts();
    });
  }

  // Price Slider
  const priceSlider = document.getElementById('priceSlider');
  const priceDisplay = document.getElementById('priceDisplay');
  if (priceSlider) {
    priceSlider.addEventListener('input', (e) => {
      state.maxPrice = parseFloat(e.target.value);
      if (priceDisplay) priceDisplay.textContent = formatPrice(state.maxPrice);
      renderProducts();
    });
  }

  // Sort select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Cart Drawer
  const cartBtn = document.getElementById('cartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartOverlay = document.getElementById('cartOverlay');

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) closeCart();
  });

  // Quick View Modal
  const qvOverlay = document.getElementById('qvOverlay');
  const qvCloseBtn = document.getElementById('qvCloseBtn');
  if (qvCloseBtn) qvCloseBtn.addEventListener('click', closeQuickView);
  if (qvOverlay) qvOverlay.addEventListener('click', (e) => {
    if (e.target === qvOverlay) closeQuickView();
  });

  // Checkout Modal
  const checkoutOverlay = document.getElementById('checkoutOverlay');
  const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
  const btnCheckout = document.getElementById('btnCheckout');

  if (btnCheckout) btnCheckout.addEventListener('click', openCheckout);
  if (checkoutCloseBtn) checkoutCloseBtn.addEventListener('click', closeCheckout);
  if (checkoutOverlay) checkoutOverlay.addEventListener('click', (e) => {
    if (e.target === checkoutOverlay) closeCheckout();
  });

  // Checkout submit
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  }

  // Promo code
  const promoBtn = document.getElementById('promoBtn');
  if (promoBtn) {
    promoBtn.addEventListener('click', applyPromoCode);
  }
}

// RENDER PRODUCTS
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const countEl = document.getElementById('resultsCount');
  if (!grid) return;

  let filtered = PRODUCTS.filter(product => {
    const matchCat = state.currentCategory === 'all' || product.category === state.currentCategory;
    const matchSearch = product.name.toLowerCase().includes(state.searchQuery) || 
                        product.subtag.toLowerCase().includes(state.searchQuery) ||
                        product.desc.toLowerCase().includes(state.searchQuery);
    const matchPrice = product.priceUSD <= state.maxPrice;
    return matchCat && matchSearch && matchPrice;
  });

  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.priceUSD - b.priceUSD);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.priceUSD - a.priceUSD);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} Products`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <p style="font-size: 18px; color: var(--text-secondary); margin-bottom: 12px;">No products match your search query or filter.</p>
        <button onclick="resetFilters()" class="btn-nike-secondary">Clear Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = state.wishlist.includes(product.id);
    return `
      <div class="product-item-card" data-id="${product.id}">
        <span class="item-badge">${product.badge}</span>
        <button class="wishlist-icon-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id})" aria-label="Save to Wishlist">
          <svg width="18" height="18" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <div class="product-img-box" onclick="openQuickView(${product.id})">
          <img src="${product.image}" alt="${product.name}" class="product-thumb-img">
        </div>
        <div class="product-details">
          <span class="product-tag">${product.subtag}</span>
          <h3 class="product-name-title" onclick="openQuickView(${product.id})" style="cursor: pointer;">${product.name}</h3>
          <div class="product-rating-bar">
            ★ ${product.rating} <span style="color: var(--text-tertiary); font-size: 12px;">(${product.reviews})</span>
          </div>
          <div class="product-card-footer">
            <div class="price-text-box">
              <span class="price-current">${formatPrice(product.priceUSD)}</span>
              <span class="price-original">${formatPrice(product.oldPriceUSD)}</span>
            </div>
            <div class="card-action-btns">
              <button class="btn-qv-link" onclick="openQuickView(${product.id})">View</button>
              <button class="btn-add-bag" onclick="addToCart(${product.id})">+ Bag</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function resetFilters() {
  state.currentCategory = 'all';
  state.searchQuery = '';
  state.maxPrice = 350;
  state.sortBy = 'featured';

  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(p => p.classList.remove('active'));
  if (filterPills[0]) filterPills[0].classList.add('active');

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';

  const priceSlider = document.getElementById('priceSlider');
  if (priceSlider) priceSlider.value = 350;

  const priceDisplay = document.getElementById('priceDisplay');
  if (priceDisplay) priceDisplay.textContent = formatPrice(350);

  renderProducts();
}

// CART FUNCTIONS
function addToCart(productId, selectedSize = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const size = selectedSize || product.sizes[0];

  const existingIndex = state.cart.findIndex(item => 
    item.id === productId && item.size === size
  );

  if (existingIndex > -1) {
    state.cart[existingIndex].qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      subtag: product.subtag,
      priceUSD: product.priceUSD,
      image: product.image,
      size: size,
      qty: 1
    });
  }

  updateCartUI();
  showToast(`Added ${product.name} to Bag`);
  openCart();
}

function updateCartQty(index, change) {
  if (state.cart[index]) {
    state.cart[index].qty += change;
    if (state.cart[index].qty <= 0) {
      state.cart.splice(index, 1);
    }
  }
  updateCartUI();
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  const countBadge = document.getElementById('cartBadge');
  const cartBody = document.getElementById('cartBody');
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountEl = document.getElementById('cartDiscount');
  const totalEl = document.getElementById('cartTotal');
  const freeShipBar = document.getElementById('shippingBarFill');
  const freeShipText = document.getElementById('shippingBarText');

  const totalQty = state.cart.reduce((acc, item) => acc + item.qty, 0);
  if (countBadge) countBadge.textContent = totalQty;

  if (!cartBody) return;

  if (state.cart.length === 0) {
    cartBody.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--text-secondary);">
        <p style="font-size: 40px; margin-bottom: 12px;">🛍️</p>
        <h3 style="font-family: var(--font-title); font-size: 20px; color: var(--text-primary);">Your Bag is Empty</h3>
        <p style="margin-top: 6px; font-size: 14px;">Explore Shoes, Slippers, Joggers, and Coats.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatPrice(0);
    if (discountEl) discountEl.textContent = `-${formatPrice(0)}`;
    if (totalEl) totalEl.textContent = formatPrice(0);
    if (freeShipBar) freeShipBar.style.width = "0%";
    if (freeShipText) freeShipText.textContent = "Add items to unlock FREE shipping";
    return;
  }

  const subtotalUSD = state.cart.reduce((acc, item) => acc + (item.priceUSD * item.qty), 0);
  let discountUSD = 0;
  if (state.appliedPromo) {
    discountUSD = subtotalUSD * state.appliedPromo.percent;
  }
  const finalTotalUSD = Math.max(0, subtotalUSD - discountUSD);

  const freeShipTarget = 150;
  const shipPercent = Math.min(100, (subtotalUSD / freeShipTarget) * 100);
  if (freeShipBar) freeShipBar.style.width = `${shipPercent}%`;
  if (freeShipText) {
    if (subtotalUSD >= freeShipTarget) {
      freeShipText.textContent = "🎉 You unlocked FREE Express Shipping!";
    } else {
      freeShipText.textContent = `Add ${formatPrice(freeShipTarget - subtotalUSD)} more for FREE shipping!`;
    }
  }

  cartBody.innerHTML = state.cart.map((item, index) => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-meta">Size: ${item.size}</div>
        <div class="cart-item-price-tag">${formatPrice(item.priceUSD * item.qty)}</div>
      </div>
      <div class="cart-qty-controls">
        <button class="btn-qty" onclick="updateCartQty(${index}, -1)">-</button>
        <span style="font-size: 13px; font-weight: 700;">${item.qty}</span>
        <button class="btn-qty" onclick="updateCartQty(${index}, 1)">+</button>
      </div>
      <button style="background: none; border: none; color: var(--text-tertiary); cursor: pointer;" onclick="removeFromCart(${index})">✕</button>
    </div>
  `).join('');

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotalUSD);
  if (discountEl) discountEl.textContent = `-${formatPrice(discountUSD)}`;
  if (totalEl) totalEl.textContent = formatPrice(finalTotalUSD);
}

function applyPromoCode() {
  const input = document.getElementById('promoInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'NIKI20') {
    state.appliedPromo = { code: 'NIKI20', percent: 0.20 };
    showToast('Promo NIKI20 Applied: 20% OFF');
  } else {
    showToast('Invalid promo code. Use NIKI20');
  }
  updateCartUI();
}

function openCart() {
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  if (overlay) overlay.classList.add('active');
  if (drawer) drawer.classList.add('active');
}

function closeCart() {
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  if (overlay) overlay.classList.remove('active');
  if (drawer) drawer.classList.remove('active');
}

// QUICK VIEW MODAL
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const content = document.getElementById('qvContent');
  if (content) {
    content.innerHTML = `
      <div class="quickview-layout">
        <div class="qv-img-display">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <span style="color: var(--primary-accent); font-size: 13px; font-weight: 700;">${product.subtag}</span>
          <h2 style="font-family: var(--font-title); font-size: 28px; font-weight: 800;">${product.name}</h2>
          <div style="color: #ffc107; font-size: 14px;">★ ${product.rating} (${product.reviews} reviews)</div>
          <div style="font-family: var(--font-title); font-size: 26px; font-weight: 800;">${formatPrice(product.priceUSD)}</div>
          <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.6;">${product.desc}</p>
          <div>
            <div style="font-size: 12px; font-weight: 700; color: var(--text-secondary); margin-bottom: 8px;">SELECT SIZE:</div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${product.sizes.map((s, idx) => `
                <button class="size-pill-btn ${idx === 0 ? 'active' : ''}" onclick="selectSizeBtn(this)">${s}</button>
              `).join('')}
            </div>
          </div>
          <button class="btn-nike-primary" style="margin-top: 16px; width: 100%; justify-content: center;" onclick="addToCartFromQv(${product.id})">
            ADD TO SHOPPING BAG
          </button>
        </div>
      </div>
    `;
  }

  const overlay = document.getElementById('qvOverlay');
  if (overlay) overlay.classList.add('active');
}

function selectSizeBtn(btn) {
  const container = btn.parentElement;
  container.querySelectorAll('.size-pill-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function addToCartFromQv(productId) {
  const activeBtn = document.querySelector('.size-pill-btn.active');
  const size = activeBtn ? activeBtn.textContent : null;
  addToCart(productId, size);
  closeQuickView();
}

function closeQuickView() {
  const overlay = document.getElementById('qvOverlay');
  if (overlay) overlay.classList.remove('active');
}

// CHECKOUT MODAL
function openCheckout() {
  if (state.cart.length === 0) {
    showToast('Your bag is empty');
    return;
  }
  closeCart();
  const overlay = document.getElementById('checkoutOverlay');
  if (overlay) overlay.classList.add('active');
}

function closeCheckout() {
  const overlay = document.getElementById('checkoutOverlay');
  if (overlay) overlay.classList.remove('active');
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  closeCheckout();

  state.cart = [];
  state.appliedPromo = null;
  updateCartUI();

  showToast('🎉 Order Placed! Thank you for shopping with NIKI.');
}

// WISHLIST
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast('Removed from Wishlist');
  } else {
    state.wishlist.push(productId);
    showToast('Saved to Wishlist');
  }
  renderProducts();
}

// TOAST
function showToast(message) {
  const stack = document.getElementById('toastStack');
  if (!stack) return;

  const toast = document.createElement('div');
  toast.className = 'toast-pill';
  toast.textContent = message;
  stack.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}
