  // axios
  axios.get('https://dummyjson.com/products')
  .then(response => {
      const products = response.data.products;
      const productsContainer = document.getElementById('products');

      products.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.innerHTML = `
              <h2>${product.title}</h2>
              <img src="${product.thumbnail}" alt="${product.title}" style="max-width: 200px;">
              <p>السعر: ${product.price} دولار</p>
              <button onclick="showProductDetails(${product.id})">تفاصيل المنتج</button>
          `;
          productsContainer.appendChild(productDiv);
      });
  })
  .catch(error => {
      console.error('خطأ في جلب المنتجات:', error);
  });

// button => window location new html ,product-details.html
function showProductDetails(productId) {
  window.location.href = `product-details.html?product_id=${productId}`;
}