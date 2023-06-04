// header display date info
$(function () {
let currentDate = dayjs().format("MMMM DD, YYYY");
$("#currentDay").text(currentDate);
});

// save button
$(".saveBtn").on("click", function () {
  let timeBlock = $(this).parent().attr("id");
  let eventDescription = $(this).siblings(".description").val();
    localStorage.setItem(hourID, eventDescription);
  });

//day and parseInt
let currentHour = dayjs().format("H");
$(".time-block").each(function () {
let blockHour = parseInt($(this).attr("id").split("-")[1]);

//past
if (blockHour < currentHour) {
  $(this).addClass("past");
//present
} else if (blockHour === currentHour) {
  $(this).addClass("present");
//future
} else {
  $(this).addClass("future");
}
});

// local storage saved
  $(".time-block").each(function () {
  let timeBlock = $(this).attr("id");
  let eventDescription = localStorage.getItem(timeBlock);
    $(this).find(".description").val(eventDescription);
  });
  