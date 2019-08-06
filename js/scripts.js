$(document).ready(function() {
  $("#submit").click(function(event) {
      event.preventDefault();
      var orderSize = $('#size').val();
      console.log(orderSize);
      var orderCrust = $('#crust').val();
      console.log(orderCrust);
      var orderTopping = [];
      $("input[type = checkbox]:checked").each(function() {
        orderTopping.push($(this).val())
      });
      var topping = 0;
      for (var i = 0; i < orderTopping.length; i++) {
          topping += parseInt(orderTopping[i]);
      }
      var total = parseInt(orderSize) + parseInt(orderCrust) + parseInt(topping);
      var many = document.getElementById("many").value;
      var grandTotal= total*many;
      document.getElementById("response").innerHTML="That will be "+grandTotal+" Rwf!🙂";

      $("#see").click(function(event){
        event.preventDefault();
        document.getElementById("siz").innerHTML="Size "+orderSize;
        document.getElementById("crus").innerHTML="Crust "+orderCrust;
        document.getElementById("toppin").innerHTML="Topping "+orderTopping;
        document.getElementById("total").innerHTML="Grand total "+grandTotal+" Rwf!";
      });
    });
    $("#deliver").click(function(event){
      event.preventDefault();
      alert("The delivery charge will be 1000");
      var loc = prompt("Enter your location");
      if (loc != null){
        alert("Your order will be delivered to your location");
      }else{
        alert("Invalid location");
      }
    });
});

