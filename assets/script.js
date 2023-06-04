// header display date info
$(function () {
let currentDate = dayjs().format("MMMM DD, YYYY");
$("#currentDay").text(currentDate);
});

// save button
$(".saveBtn").on("click", function () {
  let timeBlock = $(this).parent().attr("id");
  let eventDescription = $(this).siblings(".description").val();
    localStorage.setItem(timeBlock, eventDescription);
  });

//day and parseInt
let currentHour = dayjs().format("H");
$(".time-block").each(function () {
let blockHour = parseInt($(this).attr("id").split("-")[1]);

//past
if (blockHour < currentHour) {
$(this).addClass("past").removeClass("present future");
// present 
$(this).addClass("present").removeClass("past future");
} else {
//future
 $(this).addClass("future").removeClass("past present");
    }
  });

// local storage saved
  $(".time-block").each(function () {
  let timeBlock = $(this).attr("id");
  let eventDescription = localStorage.getItem(timeBlock);
    $(this).find(".description").val(eventDescription);
  });
  