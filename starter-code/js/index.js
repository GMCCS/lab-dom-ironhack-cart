function deleteItem(e){

}

function getPriceByProduct(){
  
}


function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let num1 = Number(document.getElementById('unit-price').value);
  let num2 = Number(document.getElementById('input-number').value);

  console.log();
}


function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.addEventListener('load' ,function() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
});
