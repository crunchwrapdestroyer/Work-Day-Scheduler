$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').on('click', function() {
    const timeBlock = $(this).parent().attr('id')
    const userInput = $(this).siblings('.description').val();

    localStorage.setItem(timeBlock, userInput)
    $('.notification').addClass('show')
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function updateHour() {
    const currentHour = dayjs().hour()
    //iterate over each time block
    $('.time-block').each(function() {
    const blockHour = parseInt($(this).attr('id').split('-')[1])

    if (currentHour < blockHour) {
      $('.time-block').addClass('past')
    }

    else if (currentHour === blockHour) {
      $('.time-block').removeClass('past')
      $('.time-block').addClass('present')
    }
    else {
      $('.time-block').removeClass('present')
      $('.time-block').addClass('future')
    }
  })}
  updateHour()
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $('.time-block').each(function () {
    const timeSlot = $(this).attr('id')
    const savedInput = localStorage.getItem(timeSlot)

    if(savedInput)
      $(this).find('.description').val(savedInput)
  })
  
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('MM/DD/YYYY'))
})  