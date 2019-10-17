//set variables


let now = '';
//checking moments

function checkTime() {
  let currentTime = moment().format('h:mm a');
  $('#current-time').text(`It is: ${currentTime}`);
  if (now !== moment().format('H')) {
    let currentDate = moment().format('MMM Do YYYY');
    $('#current-date').text(`Today is: ${currentDate}`);

    now = moment().format('H');
    let inputTime = $('input');
    idTime = '';
    
    for (i=0; i < inputTime.length; i++) {
      let idTime = inputTime[i].id 
      idTime = parseInt(idTime.slice(0, -3));
    
    
      if (now > idTime) {
        $(`#${inputTime[i].id}`).attr('style', 'background-color:blue');
        // console.log('now', now);
      } else if (now < idTime) {
        $(`#${inputTime[i].id}`).attr('style', 'background-color:red');
      } else if (now === idTime) {
        $(`#${inputTime[i].id}`).attr('style', 'background-color:green');
      }
    };
  }
  


}



$('.save-buttons').click(function () {
  const key = $(this).data('key');
  let inputText = $('#' + key);
  localStorage.setItem(key, inputText[0].value);  
});



if (localStorage.getItem('9-am')) {
  $('.js-9-am').val(`${localStorage.getItem('9-am')}`);
}
if (localStorage.getItem('10-am')) {
  $('.js-10-am').val(`${localStorage.getItem('10-am')}`);
}
if (localStorage.getItem('11-am')) {
  $('.js-11-am').val(`${localStorage.getItem('11-am')}`);
}
if (localStorage.getItem('12-am')) {
  $('.js-12-am').val(`${localStorage.getItem('12-am')}`);
}
if (localStorage.getItem('13-pm')) {
  $('.js-1-pm').val(`${localStorage.getItem('13-pm')}`);
}
if (localStorage.getItem('14-pm')) {
  $('.js-2-pm').val(`${localStorage.getItem('14-pm')}`);
}
if (localStorage.getItem('15-pm')) {
  $('.js-3-pm').val(`${localStorage.getItem('15-pm')}`);
}
if (localStorage.getItem('16-pm')) {
  $('.js-4-pm').val(`${localStorage.getItem('16-pm')}`);
}
if (localStorage.getItem('17-pm')) {
  $('.js-5-pm').val(`${localStorage.getItem('17-pm')}`);
}


checkTime();
setInterval(function(){checkTime()}, 1000);

  


//events
//inits: 
//check local storage object for matching id
//grab current date and put on html
//color code past/present and future
