
let bagItemObjects;


onload();
function onload(){
    loadBagItemObjects();
    displayBagItems();
}



function loadBagItemObjects() {
  if (!bagItems) {
    console.error('bagItems is undefined or null');
    return;
}
if (!Array.isArray(bagItems)) {
  console.error('bagItems is not an array');
  return;
}
    console.log(bagItems);
   
    bagItemObjects = bagItems.map(itemId => {
      for (let i = 0; i < items.length; i++) {
        if (itemId == items[i].id) {
          return items[i];
        }
      }
    });
    console.log(bagItemObjects);
  }
  
 
  

  function displayBagItems() {
    let containerElement = document.querySelector('.bag-items-container');
    let innerHTML = '';
    bagItemObjects.forEach(bagItem => {
      innerHTML += generateItemHTML(bagItem);
    });
    containerElement.innerHTML = innerHTML;
  }
  
  function generateItemHTML(item) {
    return `<div class="bag-item-container">
      <div class="item-left-part">
        <img class="bag-item-img" src="${item.item_image}s">
      </div>
      <div class="item-right-part">
        <div class="company">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price-container">
          <span class="current-price">Rs ${item.price.current_price}</span>
          <span class="original-price">Rs ${item.price.original_price}</span>
          <span class="discount-percentage">(${item.price.discount}% OFF)</span>
        </div>
        <div class="return-period">
          <span class="return-period-days">${item.return_period} days</span> return available
        </div>
        <div class="delivery-details">
          Delivery by
          <span class="delivery-details-days">${item.delivery_date}</span>
        </div>
      </div>
  
      <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
    </div>`;
  }
