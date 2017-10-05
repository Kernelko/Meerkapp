

//    $(document).ready(function(){
//        $("#how_many_pennies").keyup(function(){
  //          let expense = $("#how_many_pennies").val();
    //        $("#para_title").textContent=expense;
      //      alert(expense)
        //});
function money_in(){
  //    button click
  document.getElementById("para_content").innerHTML = "Pieniązki otrzymane";

}

function money_out(){
    //    button click
    document.getElementById("para_content").innerHTML = "Pieniążki wydane"
     	$("#expense_input").removeClass("hidden");
       
     let expense_name = $("#expense_name").val();
     let expense_location=$("#expense_location").val();
     let expense_value=$("#expense_value").val();
     let expense_currency=$("#expense_currency").val();
     let expense_category=$("#expense_category").val();
     let expense_date=$("#expense_date").val();
     
  }

  function chart_display(){
    //    button click
    document.getElementById("para_content").innerHTML = "Wyswietlam wykresiki"
    
  }
  function database_view(){
    //    button click
    document.getElementById("para_content").innerHTML = "Pokazuje baze danych"
    
  }
$("settings").click(function()
{
alert("Settings here")

})

