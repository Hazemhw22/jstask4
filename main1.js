 // url,id
 const urlParams = new URLSearchParams(window.location.search);
 const productId = urlParams.get('product_id');

 // جلب تفاصيل axios
 axios.get(`https://dummyjson.com/products/${productId}`)
     .then(response => {
         const product = response.data;
         const productDetailsContainer = document.getElementById('product-details');

         const productDiv = document.createElement('div');
         productDiv.innerHTML = `
             <h2>${product.title}</h2>
             <img src="${product.thumbnail}" alt="${product.title}" style="max-width: 200px;">
             <p>${product.description}</p>
             <p>السعر: ${product.price} دولار</p>
             <p>التقييم: ${product.rating}</p>
             <p>المخزون: ${product.stock}</p>
             <button onclick="goBack()">العودة للصفحة الرئيسية</button>
         `;
         productDetailsContainer.appendChild(productDiv);
     })
     .catch(error => {
         console.error('خطأ في جلب تفاصيل المنتج:', error);
     });

 // back button  
 function goBack() {
     window.history.back();
 }