var customerOrder = document.getElementById("order");

var menu = {
    "Carrot on a stick":6,
    "Carrot juice":10,
    "Apple pie":7,
    "Veggie burger":20,
    "Coconut milkshake":11,
    "Avacodo toast":4,
    "Fruit salad":13
}

orderArr = [];

//displays order on page but changes when another is submitted. fix later

submitBtn.addEventListener("click", function(){
    document.querySelector("#showOrder").innerHTML = customerOrder.value;
    console.log(customerOrder.value);
    document.getElementById('order').value='';
});

function orderProcessing(customerOrder){
    customerOrder.split(":");
    for (var i = 0; i < orderArr.length; i++) {
        var item = array[i].trim();
        orderArr.push(item);
    }
}

orderProcessing(customerOrder);
// orderArr.push(customerOrder.split(":"));




// example from calc quiz
// function superCalc(){
//     var input1 = parseInt(document.getElementById("input1").value);
//     var input2 = parseInt(document.getElementById("input2").value);
//     var division =  (input1 / input2);
//     division.toFixed(2);

//     if (input2 !== 0){
//     console.log(division.toFixed(2));
//     } else {
//         console.log("Cannot divide by 0");
//     }
//     document.querySelector("#showOrder").innerHTML = division.toFixed(2);
// };
