//set variables


let now = '';
//checking moments

function checkTime() {
  let currentTime = moment().format('h:mm a');
  $('#current-time').text(`It is: ${currentTime}`);
  if (now !== moment().format('H')) {
    let currentDate = moment().format('MMM Do YYYY');
    $('#current-date').text(`Today is: ${currentDate}`);

    now = 13;
    let inputTime = $('input');
    idTime = '';
    
    for (i=0; i < inputTime.length; i++) {
      let idTime = inputTime[i].id 
      idTime = parseInt(idTime);
      if (now > idTime) {
        $(`#${inputTime[i].id}`).attr('style', 'background-color:#fc0341');
      } else if (now < idTime) {
        $(`#${inputTime[i].id}`).attr('style', 'background-color:#03f4fc');
      } else if (now === idTime) {
        $(`#${inputTime[i].id}`).attr('style', 'background-color:#03fc77');
      }
    };
  }
};

function alertMessage () {
  
  
  let setAlert = '50 0';
  let nextReminderTime =   moment().add(1,'h').format('h');
  let nextReminderId = $(`#${nextReminderTime}`);
  if ((moment().format('h') > 9 || moment().format('h') < 18) && (moment().format('m s') === setAlert)) {
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

// function getNotes () {
  
//   // let enterNotes = JSON.stringify(localStorage);

//   // for(i = 9; i < 18; i++){
//   //   console.log(localStorage.getItem(Storage.key(i)));

//   // }
//   // for(i=13; i < 18; i++){
//   //   if (localStorage.getItem(`$[i]-pm`)) {
//   //     $(`.js-${i}-am`).val(`${localStorage.getItem(`[i]-pm`)}`);
//   //   }
//   // }
// };
// getNotes();





  if (localStorage.getItem('9')) {
    $('.js-9-am').val(`${localStorage.getItem('9')}`);
  }
  if (localStorage.getItem('10')) {
    $('.js-10-am').val(`${localStorage.getItem('10')}`);
  }
  if (localStorage.getItem('11')) {
    $('.js-11-am').val(`${localStorage.getItem('11')}`);
  }
  if (localStorage.getItem('12')) {
    $('.js-12-am').val(`${localStorage.getItem('12')}`);
  }
  if (localStorage.getItem('13')) {
    $('.js-13-pm').val(`${localStorage.getItem('13')}`);
  }
  if (localStorage.getItem('14')) {
    $('.js-14-pm').val(`${localStorage.getItem('14')}`);
  }
  if (localStorage.getItem('15')) {
    $('.js-15-pm').val(`${localStorage.getItem('15')}`);
  }
  if (localStorage.getItem('16')) {
    $('.js-16-pm').val(`${localStorage.getItem('16')}`);
  }
  if (localStorage.getItem('17')) {
    $('.js-17-pm').val(`${localStorage.getItem('17')}`);
  }

checkTime();
setInterval(function(){checkTime(), alertMessage()}, 1000);

  


//events
//inits: 
//check local storage object for matching id
//grab current date and put on html
//color code past/present and future
