//set variables


let now = '';
//checking moments

function checkTime() {
  let currentTime = moment().format('h:mm a');
  $('#current-time').text(`It is: ${currentTime}`);
  if (now !== moment().format('H')) {
    let currentDate = moment().format('MMM Do YYYY');
    $('#current-date').text(`Today is: ${currentDate}`);

    now = parseInt(moment().format('H'));
    let inputTime = $('input');
    idTime = '';
    
    for (i=0; i < inputTime.length; i++) {
      let idTime = inputTime[i].id 
      idTime = parseInt(idTime);
      if (now > idTime) {
        $(`#${inputTime[i].id}`).attr('style', 'background-color:#f1c7db');
      } else if (now < idTime) {
        $(`#${inputTime[i].id}`).attr('style', 'background-color:#9ecef0');
      } else if (now === idTime) {
        $(`#${inputTime[i].id}`).attr('style', 'background-color:#b7e1ce');
      }
    };
  }
};

function alertMessage () {
  
  
  let setAlert = '50 0';
  let nextReminderTime =   moment().add(1,'H').format('H');
  let nextReminderId = $(`#${nextReminderTime}`);
  if ((moment().format('H') > 9 || moment().format('H') < 18) && (moment().format('m s') === setAlert)) {
      alert(`10 min reminder to ${nextReminderId[0].value}`);
  }

};
  

$('.save-buttons').click(function () {
  const key = $(this).data('key');
  let inputText = $(`#${key}`);
  localStorage.setItem(key, inputText[0].value);  
});

// //need to change classes to 24 hour style and get rid of am/pm 

// console.log(localStorage);

function getNotes () {
  for(i = 9; i < 18; i++){
    if (localStorage.getItem(i)) {
      $(`.js-${i}-${i <= 12 ? 'am' : 'pm'}`).val(localStorage.getItem(i));
    }
  }
};

getNotes();



checkTime();
setInterval(function(){checkTime(), alertMessage()}, 1000);
