"use strict";

//pop-up text in teoric
$(".parent").click(function () {
  $(this).children(".child").slideToggle(300);
}); //tests result

var result;

function check() {
  var question;
  var value1;
  var value2;
  question = 1;
  value1 = 0;
  value2 = 0;
  result = "";
  var choice;

  for (question = 1; question <= 3; question++) {
    var q = document.forms['quiz'].elements['q' + question];

    for (var i = 0; i < q.length; i++) {
      if (q[i].checked) {
        choice = q[i].value;
      }
    }

    if (choice == "value1") {
      value1++;
    }

    if (choice == "value2") {
      value2++;
    }
  }

  if (value2 == 0) {
    result = "2";
  } else if (value2 == 1) {
    result = "3";
  } else if (value2 == 2) {
    result = "4";
  } else if (value2 == 3) {
    result = "5";
  } else {
    result = "404";
  }

  alert('test comleted, you have a ' + result + ' points');
}