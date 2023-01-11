// Select local time to be displayed

var today = dayjs();
$('#currentDay').text(today.format('dddd, MM/DD/YYYY'));

// activate save button so that when it is clicked, it will commit the text written in the form next to it in the local storage.
    // save = (click, move text to local storage)

$(document).ready(function() {
    $(".saveBtn").on("click", function () {
        
        var text = $(this).siblings(".description").val(); 
        var time = $(this).closest(".time-block").attr("id"); 

        //set items in local storage.
        localStorage.setItem(time, text);
    });
// When the text is commited to the local storgage, it will show up automatically upon refresh (stay put)
    // stay-put = (text moved to local storage, text displayed in place upon screen refresh)
    
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    // Make it so that the colors of the form change color based on the time of day matching the form (past, present future)
        // Change color of the form depending on the hour of the day
        // Colors for the form should match the theme of the calendar (3 colors)
    function hourTracker() {
        var currentHour = dayjs().hour(); 

        
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).closest(".time-block").attr("id").split("hour-")[1]);
            
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
            
        });
    }
    hourTracker(); 
    setInterval(function(){ hourTracker(); }, 1000*60*60);
});