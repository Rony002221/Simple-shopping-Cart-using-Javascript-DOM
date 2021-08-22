
/* ......................variable delaration..................... */
const _8GB_memory = document.getElementById('8GB_memory');
const _16GB_memory = document.getElementById('16GB_memory');

const _extra_Memory_Cost = document.getElementById('extra_Memory_Cost');
const _extra_Storage_Cost = document.getElementById('extra_Storage_Cost');
const _delivery_Cost = document.getElementById('delivery_Cost');
const _best_price = document.getElementById('best_price');
const _Total_price = document.getElementById('total_price');
const _grand_final_Price = document.getElementById('grand_final_Price');



const _256GB_storage = document.getElementById('256GB_storage');
const _512GB_storage = document.getElementById('512GB_storage');
const _1TB_storage = document.getElementById('1TB_storage');

const _free_delivery = document.getElementById('free_delivery');
const _urgent_delivery = document.getElementById('urgent_delivery');


const _promo_code_text = document.getElementById('promo_code_text');
const _promo_code_button = document.getElementById('promo_code_button');




/*.........................Calculation the Total Price.....................*/


function total_price_calculation(){

    const memory_cost = parseInt(_extra_Memory_Cost.innerText);
    const storage_cost = parseInt(_extra_Storage_Cost.innerText);
    const delivery_cost = parseInt(_delivery_Cost.innerText);
    const _price = parseInt(_best_price.innerText);


    const final_total_price  = (memory_cost + storage_cost + delivery_cost + _price);
    
    _Total_price.innerText = final_total_price;
    _grand_final_Price.innerText = final_total_price;
   

    return final_total_price;
     
}


/*.....................eventListener for Memory card....................... */

_8GB_memory.addEventListener("click", function(){
    _extra_Memory_Cost.innerText = "0"

    total_price_calculation();
})
_16GB_memory.addEventListener("click", function(){
    _extra_Memory_Cost.innerText = "180"

    total_price_calculation();
})



/*.....................eventListener for Storage....................... */

_256GB_storage.addEventListener("click", function(){
    _extra_Storage_Cost.innerText = "0"

    total_price_calculation();
})
_512GB_storage.addEventListener("click", function(){
    _extra_Storage_Cost.innerText = "100"

    total_price_calculation();
})
_1TB_storage.addEventListener("click", function(){
    _extra_Storage_Cost.innerText = "180"

    total_price_calculation();
})



/*.....................eventListener for Delivery....................... */

_free_delivery.addEventListener("click", function(){
    _delivery_Cost.innerText = "0"

    total_price_calculation();
})
_urgent_delivery.addEventListener("click", function(){
    _delivery_Cost.innerText = "20"
  
    total_price_calculation();
})


/*.............................. Promo Code Calculation ......................... */

_promo_code_button.addEventListener('click', function(){
    var totalPrice = _Total_price.innerText;
    var promocodeText = _promo_code_text.value
    var cuponCode = 'stevekaku';

    //console.log(totalPrice, promocodeText, cuponCode)

    if(promocodeText == cuponCode)
    {
        totalPrice = (totalPrice - (totalPrice * 0.20));
        
    }


    //change the promo code value to null
    _promo_code_text.value = '';

    _grand_final_Price.innerText = totalPrice;


})

    
    
    
    