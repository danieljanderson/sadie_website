
var theDate = ''
document.addEventListener('DOMContentLoaded', function() {
    var modifiedDate
    var options = {
        format: 'mmmm dd, yyyy',
        onSelect: function(date) { 
             //the appointmentDate is the date the user chooses for their appointment
             var selectedDate= date
             console.log(selectedDate)

              // modifiying the date object to only display the date not including the hours
              var dateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
              modifiedDate = selectedDate.toLocaleDateString("en-US", dateFormat)
              theDate = modifiedDate
              console.log(modifiedDate)
            
        }
    }

    var htmlDateElems = document.querySelectorAll('.datepicker');
    // the issue is that modifiedDate runs before the user selects the time.
    var dateInstances = M.Datepicker.init(htmlDateElems, options);
    console.log("this is the date outside the function"+modifiedDate)
    
    document.getElementById('appointment-form').onsubmit = function() { 
        console.log("!");
        console.log(theDate);
    }
})

/*


<!DOCTYPE html>
<html>
<body>

<p>Enter some text in the fields below, then press the "Submit form" button to submit the form.</p>

<form id="myForm" action="/action_page.php">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br><br>
  <input type="button" onclick="myFunction()" value="Submit form">
</form>

<script>
function myFunction() {
  document.getElementById("myForm").submit();
}
</script>

</body>
</html>
 
*/


document.addEventListener('DOMContentLoaded',function(){
   
    //gets the selected the time
        var timeOption = {
            twelveHour:true,
            vibrate:true,
            onSelect: function(hour,second){
                var hourSelected = hour
                var minuteSelected = second
                console.log(hourSelected,"this is the time on the select is the hour"+"and"+minuteSelected+"is the second time")
                }
            }
            
        
        var htmlTimeElems = document.querySelectorAll('.timepicker');
        var timeInstances = M.Timepicker.init(htmlTimeElems, timeOption);
       
    
    
   
});




