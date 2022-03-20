// USER INTERFACE
// allow user to pick multiple toppings
$(function () {
    $(".chzn-select").chosen();
});

// show user their order summary
$(document).ready(function () {
    $("#orderButton").click(function () {
        $("#orderSummary").slideDown(1200);
        let flavour = $("#pizzaFlavour option:selected").text();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let toppings = $("#toppings option:selected").val();
        let Quantity = $("#Quantity").val();
        let totalAmount;
        //alert(message)

        // print out user order summary
        $(".pizzFlavour").text(flavour)
        $(".pizzaSize").text(size)
        $(".crustChoosen").text(crust)
        $(".additionalToppings").text(toppings)
        $(".quantity").text(Quantity)
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