
//    $(document).ready(function(){
//        $("#how_many_pennies").keyup(function(){
  //          let expense = $("#how_many_pennies").val();
    //        $("#para_title").textContent=expense;
      //      alert(expense)
        //});
function money_in(){
  //    button click
  document.getElementById("para_content").innerHTML = "Pieniązki otrzymane"
}

function money_out(){
    //    button click
    document.getElementById("para_content").innerHTML = "Pieniążki wydane"
    
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

