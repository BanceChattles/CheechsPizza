let pizza = {
    pizzas: ["Pepperoni", "Cheese", "Hamburger", "Ham", "Sausage"],
    choices: ["1 Pizza", "2 Pizzas", "3 Pizzas", "4 Pizzas", "5 Pizzas", "6 Pizzas", "7 Pizzas", "8 Pizzas", "9 Pizzas", "10 Pizzas"],  
}
printList(pizza);
function printList(list){
    console.log("Number of Pizzas:")
    for(i = 0; i < pizza.choices.length; i++){
        console.log(pizza.choices[i]);
    }
    console.log("Pizza Types: ")
    for(i = 0; i < pizza.pizzas.length; i++){
        console.log(pizza.pizzas[i]);
    }
}

function getSelectAmount(){
    pizzaAmount = document.getElementById("exampleFormControlSelect1").value;
    //alert(pizzaAmount);
}

function getSelectType(){
    pizzaType = document.getElementById("exampleFormControlSelect2").value;
    //alert(Type);
}

document.getElementById('submit').addEventListener("click", function() {
    alert(document.write(pizzaType, pizzaAmount));
});