// USER INTERFACE
// allow user to pick multiple toppings
$(function () {
    $(".chzn-select").chosen();
});

// show user their order summary
$(document).ready(function () {
    $("#orderButton").click(function () {
        $("#orderSummary").slideDown(1000);
    });
});

// alert a message to user on feedback form submission
function alertMessage() {
    alert("We have received your message")
}