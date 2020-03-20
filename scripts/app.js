
var menu = {
    "Carrot on a stick":6,
    "Carrot juice":10,
    "Apple pie":7,
    "Veggie burger":20,
    "Coconut milkshake":11,
    "Avacodo toast":4,
    "Fruit salad":13
}

//var orderArr = new Array();
let submitBtn = document.querySelector('#submitBtn');
let showOrder = document.querySelector('#showOrder');

submitBtn.addEventListener("click", function(){
    let customerOrder = document.getElementById('order');
    showOrder.innerHTML = '';
    showOrder.innerHTML = customerOrder.value;
    let orderArr = parseOrder(customerOrder.value);
    // console.log(orderArr);
    addTo(orderArr);
    customerOrder.value = '';
})

function parseOrder(customerOrder) {
        const parsedObject = [];
        let parsedOrder = customerOrder
            .split(',')
            .map(x => x.trim())
            .map(z => z.split(':'))
            .map(y => y.map(x => x.trim()));
        for(order of parsedOrder) {
            if(order.length > 2) {
                console.log('Error...');
                return false;
            } else {
                let obj = {
                    name: order[0],
                    qty: Number(order[1])
                };
                parsedObject.push(obj);
            }
        }
        return parsedObject;
};

function addTo() {
    // for (var i = 0; i < orderArr.length; i++){
    //     orderArr.push(customerOrder.value);
    //     console.log(orderArr)
    // };
    /**
     * Check to see if all order names are valid menu items
     * Check qty and ensure they aren't asking for more than you have qty of
     * subtract the valid qty they ordered from your menu stock 
     */
}; 



// for (var i = 0; i < orderArr.length; i++) {
//             orderArr.push();
// }


// parseOrder(orderArr.push(customerOrder));
//orderArr.push(customerOrder.toString(customerOrder.value));

// alert(typeof customerOrder);
// might use some of this example https://gist.github.com/prof3ssorSt3v3/52ebd432bb7b8a155985a2f82509541d

// orderArr.push(customerOrder.toString().split(":"));
// // orderArr.split(/\:/);


//query selector worked but display order on page changes when another is submitted. in a list it still shows
// submitBtn.addEventListener("click", function(){
//     // document.querySelector("#showOrder").innerHTML = customerOrder.value;
//     var node = document.createElement("LI");
//     var textnode = document.createTextNode(customerOrder.value);
//         node.appendChild(textnode);
//             document.getElementById("showOrder").appendChild(node);
//             console.log(customerOrder.value);
//                 document.getElementById('order').value='';
// });

// code below is not working
// function orderProcessing(){
//     customerOrder = customerOrder.split(":");
//     for (var i = 0; i < orderArr.length; i++) {
//         var item = array[i].trim();
//         orderArr.push(item);
//     };
// }

// orderProcessing();
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

/*let showOrder = document.getElementById("showOrder");


let input = 'Burger: 10, fries: 2, Shake: 1';

let tempArray = input.split(',');

for(ele of tempArray) {

}


showOrder.innerHTML = `<li> ${input} </li>`;
*/
