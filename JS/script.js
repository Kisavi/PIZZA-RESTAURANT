// USER INTERFACE
// allow user to pick multiple toppings
$(function () {
    $(".chzn-select").chosen();
});

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

        // print out user order summary
        $(".pizzFlavour").text(flavour);
        $(".pizzaSize").text(size);
        $(".crustChoosen").text(crust);
        $(".additionalToppings").text(pickedToppings);
        $(".quantity").text(Quantity);

        //check for the price of picked size
        if (size === "Regular") {
            totalAmount += 500
        } else if (size === "Medium") {
            totalAmount += 850
        } else if (size === "Large") {
            totalAmount += 1300
        }
    });
});

//alert message to user upon order submission
function orderMessage() {
    let message = $(".message").val();
    if (message !== "") {
        alert("Your order has been received and will be ready in 50 minutes. The delivery cost is Ksh 250 and will be done within 23 minutes after your order is ready.")
    } else {
        alert("Your order has been received and will be ready in 50 minutes.")
    }
}

// alert a message to user on feedback form submission
function alertMessage() {
    alert("We have received your message")
}