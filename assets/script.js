// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



// adding code below this line to keep track of todos 

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
$(".time-block").each(function () {
let timeBlock = $(this).attr("id");
let eventDescription = localStorage.getItem(timeBlock);
  $(this).find(".description").val(eventDescription);
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


  