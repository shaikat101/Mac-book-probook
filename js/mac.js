
function productInput(input, id) {
    let allProductInput = document.getElementById(id);
    allProductInput.innerText = input;
   
    

}

function totalCost(){
  let total = (1299 + parseInt(document.getElementById('memory-extra-price').innerText) + parseInt(document.getElementById('extraStoragePrice').innerText) + parseInt(document.getElementById('delivery-charge').innerText));
  productInput(total,'total-price');
  productInput(total,'decrese-total');
   
}
// memory
document.getElementById("memory8gb-button").addEventListener('click', function(){
    
    productInput(0,'memory-extra-price');
   
    totalCost();

})
document.getElementById("memory16gb-button").addEventListener('click', function(){
   
    productInput(180,'memory-extra-price');
  
    totalCost();
    
})

// storage

document.getElementById('storage256gb-button').addEventListener('click', function(){
    
    productInput(0,'extraStoragePrice');
   
    totalCost();
})
document.getElementById('storage512gb-button').addEventListener('click',function(){
   
    productInput(100,'extraStoragePrice');
   
    totalCost();
})
document.getElementById('storage1tb-button').addEventListener('click',function(){
   
    productInput(180,'extraStoragePrice');
  
    totalCost();
     
})
// delivery
document.getElementById('free-delivery').addEventListener('click',function(){
    productInput(0,'delivery-charge');
  
    totalCost();
})
document.getElementById('paid-delivery').addEventListener('click',function(){
    
    productInput(20,'delivery-charge');
  
    totalCost();
})
// promo code
    document.getElementById('apply-button').addEventListener('click',function (){
    let promoCodeInput = document.getElementById('promo-code').value;
    promoCodeInput.value='';
    if (promoCodeInput == 'stevekaku'){
       let previousTotal = parseInt(document.getElementById('total-price').innerText);
       let currentTotal = (previousTotal*20) /100  ;
       let lastTotal = previousTotal - currentTotal;
       productInput (lastTotal,'decrese-total');
       
    }
    else{
        console.log('retry');
    }
    
})
