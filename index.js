 let bagItems;  
 let items;

 onload();
function onload(){
let bagitemstr=localStorage.getItem('bagItems');
bagItems=bagitemstr ? JSON.parse(bagitemstr): [];

    displaymenItemsonScreen();
    displayBagCount();
}


function addTobag(itemid){
bagItems.push(itemid);
localStorage.setItem('bagItems',JSON.stringify(bagItems));
displayBagCount();
}

function displayBagCount(){
  
    let  count=document.querySelector('.bag_count');
  if(bagItems.length>0){
    count.style.visibility='visible';
    count.innerHTML= bagItems.length;}
   else{
    count.style.visibility='hidden';
   }
} 

function displaymenItemsonScreen(){
    
    let itemsContainerElement= document.querySelector('.items_container');
    if(!itemsContainerElement){
        return;
    }
     items = [
        {
            id:'1',
            item_image: "images/men/men1.avif",
            return_period:14,
            delivery_date:'10 oct 2024',
            rating: 
            {
                stars: 4.5,
                noOfReviews: 1400,
            },
            company_name: 'ADIDAS',
            item_name: 'Indian Cricket ODI Fan Jersey',
            price: {
                current_price: 749,
                original_price: 999,
                discount: 25
            }
        },
        {
            id:'2',
            item_image: "images/men/men2.webp",
            return_period:14,
            delivery_date:'10 oct 2024',
            rating: 
            {
                stars: 4,
                noOfReviews: 1900,
            },
            company_name: 'URBANO FASHION',
            item_name: 'Tropical Printed Pure Cotton Tshirt',
            price: {
                current_price: 494,
                original_price:  1099,
                discount: 55
            }
        },
        {
            id:'3',
            item_image: "images/men/men3.webp",
            return_period:14,
            delivery_date:'10 oct 2024',
            rating: 
            {
                stars: 3.2,
                noOfReviews: 200,
            },
            company_name: 'BULLMER',
            item_name: 'Oversized Cotton Tshirt',
            price: {
                current_price:  399,
                original_price:  1499,
                discount: 74
            }
        },
        {
            id:'4',
            item_image: "images/men/men4.webp",
            return_period:14,
            delivery_date:'10 oct 2024',
            rating: 
            {
                stars: 4.2,
                noOfReviews: 800,
            },
            company_name: 'PUMA',
            item_name: 'Ess Polo T-shirt',
            price: {
                current_price:  764,
                original_price:  1699,
                discount: 55
            }
        },
        {
            id:'5',
            item_image: "images/men/men5.webp",
            return_period:14,
            delivery_date:'10 oct 2024',
            rating: 
            {
                stars: 4.2,
                noOfReviews: 800,
            },
            company_name: 'Roadster',
            item_name: 'Printed cotton Tshirt',
            price: {
                current_price:  1299,
                original_price:  1499,
                discount: 13
            }
        },
        // Add more items as needed
    ];
    let innerHTML='';
    items.forEach(item => {
    innerHTML+=`
    <div class="item_container">
        <img class="men_image" src="${item.item_image}" alt="item image">
        <div class="rating">
           ${item.rating.stars}⭐ |  ${item.rating.noOfReviews}
        </div>
        <div class="company_name"> 
            ${item.company_name}
        </div>
        <div class="item_name"> 
            ${item.item_name}
        </div>
        <div class="price"> 
            <span class="current_price">Rs ${item.price.current_price}</span>
            <span class="original_price">Rs ${item.price.original_price}</span>
            <span class="discount">${item.price.discount} % OFF</span>
        </div>
        <button class="add_to_bag" onclick="addTobag(${item.id})">Add to Bag </button>
    </div>
    `
    }
    
    );
   
    
    
    
    
    
    
    itemsContainerElement.innerHTML = innerHTML;
}

