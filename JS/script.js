// USER INTERFACE

// allow user to pick multiple toppings
$(function () {
    $(".chzn-select").chosen();
});

//alert message to user upon order submission
function orderMessage() {
    let message = $(".message").val();
    let Quantity = $("#Quantity").val();
    if (message !== "" && Quantity !== "") {
        $("#staticBackdropLabel").text("ORDER CONFIRMATION!!!")
        $("#order-message").text("We've received your order and we will notify you as soon as we dispatch the rider. The delivery cost is Ksh 250 and will be done within 23 minutes after your order is ready. Thank you for choosing Pizza-Me.")
    } else if (message === "" && Quantity !== "") {
        $("#staticBackdropLabel").text("ORDER CONFIRMATION!!!")
        $("#order-message").text("We've received your order and we will notify you as soon as it is ready for pick up. Thank you for choosing Pizza-Me.")
    } else if (Quantity === "") {
        $("#staticBackdropLabel").text("ORDER CONFIRMATION!!!")
        $("#order-message").text("Kindly pick the number of pizzas you want")
    }
}

// alert a message to user on feedback form submission
function alertMessage() {
    $("#staticBackdropLabel").text("THANK YOU FOR GETTING IN TOUCH!")
    $("#order-message").text("We have received your message and would like to thank you for writing to us. Keep it Pizza-Me.")
}

// show user their order summary
$(document).ready(function () {
    $("#orderButton").click(function () {
        $("#orderSummary").slideDown(1200);
        let flavour = $("#pizzaFlavour :selected").text();
        let size = $("#size :selected").val();
        let crust = $("#crust :selected").val();
        let pickedToppings = $("#toppings :selected").map((_, e) => e.value).get();
        let Quantity = $("#Quantity").val();
        let message = $(".message").val();
        let totalAmount = 0;

        // function pizza(f,s,c,t,q){
        //     this.f = f;
        //     this.s = s;
        //     this.c = c;
        //     this.t = t;
        //     this.q = q;
        // }
        // let choosenPizza = new pizza (flavour,size,crust,pickedToppings,Quantity)
        // console.log(choosenPizza.s)

        // print out user order summary
        $(".pizzFlavour").text(flavour);
        $(".pizzaSize").text(size);
        $(".crustChoosen").text(crust);
        $(".additionalToppings").text(pickedToppings);
        $(".quantity").text(Quantity);

        //BUSINESS LOGIC
        //check for the price of picked size
        if (size === "Regular") {
            totalAmount += 500
        } else if (size === "Medium") {
            totalAmount += 850
        } else if (size === "Large") {
            totalAmount += 1300
        }

        //check for price of crust 
        if (crust === "Thin") {
            totalAmount += 100
        } else if (crust === "Flat Bread") {
            totalAmount += 150
        } else if (crust === "Thick") {
            totalAmount += 200
        } else if (crust === "Stuffed") {
            totalAmount += 250
        }

        //check for price of toppings
        let toppings = ["Red-Onions", "Sweet-Corn", "Cheese", "Mushroom", "Green-Pepper", "Pineapples", "Tomatoes"]
        pickedToppings.forEach(function (pickedTopping) {
            if (pickedTopping === "Red-Onions") {
                totalAmount += 80
            } else if (pickedTopping === "Sweet-Corn") {
                totalAmount += 150
            } else if (pickedTopping === "Cheese") {
                totalAmount += 200
            } else if (pickedTopping === "Mushroom") {
                totalAmount += 250
            } else if (pickedTopping === "Green-Pepper") {
                totalAmount += 50
            } else if (pickedTopping === "Pineapples") {
                totalAmount += 100
            } else if (pickedTopping === "Tomatoes") {
                totalAmount += 80
            }
        })

        //multiplying the total amount with the number of pizzas picked
        totalAmount *= (Quantity)

        //adding delivery charges
        if (message !== "") {
            totalAmount += 250
        }

        // print out the total cost
        $(".price").text(totalAmount);
    });
});