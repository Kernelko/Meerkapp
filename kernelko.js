

//    $(document).ready(function(){
//        $("#how_many_pennies").keyup(function(){
  //          let expense = $("#how_many_pennies").val();
    //        $("#para_title").textContent=expense;
      //      alert(expense)
        //});
function money_in(){
  //    button click
  	$("#income_input").removeClass("hidden");
    $("#expense_input").addClass("hidden");

}

function money_out(){
    //    button click
     	$("#expense_input").removeClass("hidden");
      $("#income_input").addClass("hidden");
     let expense_name = $("#expense_name").val();
     let expense_location=$("#expense_location").val();
     let expense_value=$("#expense_value").val();
     let expense_currency=$("#expense_currency").val();
     let expense_category=$("#expense_category").val();
     let expense_date=$("#expense_date").val();
     
  }

  function chart_display(){
    //    button click
    
  }
  function database_view(){
    //    button click
    
  }
$("settings").click(function()
{
alert("Settings here")

})

