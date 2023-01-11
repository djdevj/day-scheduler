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
    
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    // Make it so that the colors of the form change color based on the time of day matching the form (past, present future)
        // Change color of the form depending on the hour of the day
        // Colors for the form should match the theme of the calendar (3 colors)
    function hourTracker() {
        var currentHour = dayjs().hour(); 

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            
            if (blockHour < currentHour) {
                $(this).addClass(".past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass(".past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass(".past");
                $(this).addClass("future");
            }
            
        });
    }
    hourTracker(); 
});