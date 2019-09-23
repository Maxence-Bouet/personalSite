/*
      Scroll
*/

function scroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition; // !ajouter '- startPosition'
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var listEtude = document.querySelector(".list-etude");
listEtude.addEventListener("click", function() {
  scroll(".etude", 1000);
});
var listProfessionnel = document.querySelector(".list-professionnel");
listProfessionnel.addEventListener("click", function() {
  scroll(".professionnel", 1000);
});
var listCompetence = document.querySelector(".list-competence");
listCompetence.addEventListener("click", function() {
  scroll(".competence", 1000);
});
var listContact = document.querySelector(".list-contact");
listContact.addEventListener("click", function() {
  scroll(".contact", 1000);
});

/* 
      End Scroll
*/

/* 
      TimelineEtudePhone
*/

var timelineEtudePhoneListSelected = 0;
var timelineEtudePhoneContentSelected = 0;

var timelineEtudePhoneListBtnUp = document.querySelector(
  ".timelineEtudePhone-list #up"
);
var timelineEtudePhoneListBtnDown = document.querySelector(
  ".timelineEtudePhone-list #down"
);
var timelineEtudePhoneList = document.querySelectorAll(
  ".timelineEtudePhone-list ul li"
);
var timelineEtudePhoneContentList = document.querySelectorAll(
  ".timelineEtudePhone-content ul li"
);
timelineEtudePhoneListClick(1);
timelineEtudePhoneListClick(0);

function timelineEtudePhoneListClick(id) {
  for (let i = 0; i < timelineEtudePhoneList.length; i++) {
    const size = 18 - Math.abs(4 * (id - i));
    const opacity = 1 - Math.abs(0.5 * (id - i));
    if (opacity <= 0) {
      timelineEtudePhoneList[i].setAttribute("class", "hidden");
    } else {
      timelineEtudePhoneList[i].removeAttribute("class", "hidden");
      timelineEtudePhoneList[i].style.fontSize = size + "px";
    }
    timelineEtudePhoneList[i].style.opacity = opacity;
  }
  timelineEtudePhoneContentView(id);
  timelineEtudePhoneListSelected = id;
}

function timelineEtudePhoneContentView(id) {
  timelineEtudePhoneContentList[timelineEtudePhoneListSelected].classList.add(
    "hidden"
  );
  timelineEtudePhoneContentList[
    timelineEtudePhoneListSelected
  ].children[0].classList.add("hidden");
  timelineEtudePhoneContentList[
    timelineEtudePhoneListSelected
  ].children[0].children[0].classList.add("hidden");
  timelineEtudePhoneContentList[
    timelineEtudePhoneListSelected
  ].children[0].children[1].classList.add("hidden");
  timelineEtudePhoneContentList[
    timelineEtudePhoneListSelected
  ].children[1].classList.add("hidden");

  timelineEtudePhoneContentList[id].classList.remove("hidden");
  timelineEtudePhoneContentList[id].children[0].classList.remove("hidden");
  timelineEtudePhoneContentList[id].children[0].children[0].classList.remove(
    "hidden"
  );
  timelineEtudePhoneContentList[id].children[0].children[1].classList.remove(
    "hidden"
  );
  timelineEtudePhoneContentList[id].children[1].classList.remove("hidden");
}

function timelineEtudePhoneListClickUp() {
  if (timelineEtudePhoneListSelected != 0) {
    timelineEtudePhoneListClick(timelineEtudePhoneListSelected - 1);
  }
}
function timelineEtudePhoneListClickDown() {
  if (timelineEtudePhoneListSelected != timelineEtudePhoneList.length - 1) {
    timelineEtudePhoneListClick(timelineEtudePhoneListSelected + 1);
  }
}

timelineEtudePhoneListBtnUp.addEventListener("click", function() {
  timelineEtudePhoneListClickUp();
});
timelineEtudePhoneListBtnDown.addEventListener("click", function() {
  timelineEtudePhoneListClickDown();
});

for (let i = 0; i < timelineEtudePhoneList.length; i++) {
  timelineEtudePhoneList[i].addEventListener("click", function() {
    timelineEtudePhoneListClick(i);
  });
}

/* 
      End TimelineEtudePhone
*/

/* 
      TimelineEtude
*/

var timelineEtudeListSelected = 0;
var timelineEtudeContentSelected = 0;

var timelineEtudeListBtnUp = document.querySelector(".timelineEtude-list #up");
var timelineEtudeListBtnDown = document.querySelector(
  ".timelineEtude-list #down"
);
var timelineEtudeList = document.querySelectorAll(".timelineEtude-list ul li");
var timelineEtudeContentList = document.querySelectorAll(
  ".timelineEtude-content ul li"
);
timelineEtudeListClick(1);
timelineEtudeListClick(0);

function timelineEtudeListClick(id) {
  for (let i = 0; i < timelineEtudeList.length; i++) {
    const size = 35 - Math.abs(4 * (id - i));
    const opacity = 1 - Math.abs(0.2 * (id - i));
    if (opacity <= 0) {
      timelineEtudeList[i].setAttribute("class", "hidden");
    } else {
      timelineEtudeList[i].removeAttribute("class", "hidden");
      timelineEtudeList[i].style.fontSize = size + "px";
    }
    timelineEtudeList[i].style.opacity = opacity;
  }
  timelineEtudeContentView(id);
  timelineEtudeListSelected = id;
}

function timelineEtudeContentView(id) {
  timelineEtudeContentList[timelineEtudeListSelected].classList.add("hidden");
  timelineEtudeContentList[timelineEtudeListSelected].children[0].classList.add(
    "hidden"
  );
  timelineEtudeContentList[
    timelineEtudeListSelected
  ].children[0].children[0].classList.add("hidden");
  timelineEtudeContentList[
    timelineEtudeListSelected
  ].children[0].children[1].classList.add("hidden");
  timelineEtudeContentList[timelineEtudeListSelected].children[1].classList.add(
    "hidden"
  );

  timelineEtudeContentList[id].classList.remove("hidden");
  timelineEtudeContentList[id].children[0].classList.remove("hidden");
  timelineEtudeContentList[id].children[0].children[0].classList.remove(
    "hidden"
  );
  timelineEtudeContentList[id].children[0].children[1].classList.remove(
    "hidden"
  );
  timelineEtudeContentList[id].children[1].classList.remove("hidden");
}

function timelineEtudeListClickUp() {
  if (timelineEtudeListSelected != 0) {
    timelineEtudeListClick(timelineEtudeListSelected - 1);
  }
}
function timelineEtudeListClickDown() {
  if (timelineEtudeListSelected != timelineEtudeList.length - 1) {
    timelineEtudeListClick(timelineEtudeListSelected + 1);
  }
}

timelineEtudeListBtnUp.addEventListener("click", function() {
  timelineEtudeListClickUp();
});
timelineEtudeListBtnDown.addEventListener("click", function() {
  timelineEtudeListClickDown();
});

for (let i = 0; i < timelineEtudeList.length; i++) {
  timelineEtudeList[i].addEventListener("click", function() {
    timelineEtudeListClick(i);
  });
}

/* 
      End TimelineEtude
*/

/*
      TimelineProfessionnelPhone
*/

var timelineProfessionnelPhoneListSelected = 0;
var timelineProfessionnelPhoneContentSelected = 0;

var timelineProfessionnelPhoneListBtnUp = document.querySelector(
  ".timelineProfessionnelPhone-list #up"
);
var timelineProfessionnelPhoneListBtnDown = document.querySelector(
  ".timelineProfessionnelPhone-list #down"
);
var timelineProfessionnelPhoneList = document.querySelectorAll(
  ".timelineProfessionnelPhone-list ul li"
);
var timelineProfessionnelPhoneContentList = document.querySelectorAll(
  ".timelineProfessionnelPhone-content ul li"
);
timelineProfessionnelPhoneListClick(1);
timelineProfessionnelPhoneListClick(0);

function timelineProfessionnelPhoneListClick(id) {
  timelineProfessionnelPhoneContentView(id);
  timelineProfessionnelPhoneListSelected = id;
}

function timelineProfessionnelPhoneContentView(id) {
  timelineProfessionnelPhoneContentList[
    timelineProfessionnelPhoneListSelected
  ].classList.add("hidden");
  timelineProfessionnelPhoneContentList[
    timelineProfessionnelPhoneListSelected
  ].children[0].classList.add("hidden");
  timelineProfessionnelPhoneContentList[
    timelineProfessionnelPhoneListSelected
  ].children[0].children[0].classList.add("hidden");
  timelineProfessionnelPhoneContentList[
    timelineProfessionnelPhoneListSelected
  ].children[0].children[1].classList.add("hidden");
  timelineProfessionnelPhoneContentList[
    timelineProfessionnelPhoneListSelected
  ].children[1].classList.add("hidden");

  timelineProfessionnelPhoneContentList[id].classList.remove("hidden");
  timelineProfessionnelPhoneContentList[id].children[0].classList.remove(
    "hidden"
  );
  timelineProfessionnelPhoneContentList[
    id
  ].children[0].children[0].classList.remove("hidden");
  timelineProfessionnelPhoneContentList[
    id
  ].children[0].children[1].classList.remove("hidden");
  timelineProfessionnelPhoneContentList[id].children[1].classList.remove(
    "hidden"
  );
}

function timelineProfessionnelPhoneListClickUp() {
  if (timelineProfessionnelPhoneListSelected != 0) {
    timelineProfessionnelPhoneListClick(
      timelineProfessionnelPhoneListSelected - 1
    );
  }
}
function timelineProfessionnelPhoneListClickDown() {
  if (
    timelineProfessionnelPhoneListSelected !=
    timelineProfessionnelPhoneContentList.length - 1
  ) {
    timelineProfessionnelPhoneListClick(
      timelineProfessionnelPhoneListSelected + 1
    );
  }
}

timelineProfessionnelPhoneListBtnUp.addEventListener("click", function() {
  timelineProfessionnelPhoneListClickUp();
});
timelineProfessionnelPhoneListBtnDown.addEventListener("click", function() {
  timelineProfessionnelPhoneListClickDown();
});

/*
      End TimelineProfessionnelPhone
*/

/*
      TimelineProfessionnel
*/

var timelineProfessionnelListSelected = 0;
var timelineProfessionnelContentSelected = 0;

var timelineProfessionnelListBtnUp = document.querySelector(
  ".timelineProfessionnel-list #up"
);
var timelineProfessionnelListBtnDown = document.querySelector(
  ".timelineProfessionnel-list #down"
);
var timelineProfessionnelList = document.querySelectorAll(
  ".timelineProfessionnel-list ul li"
);
var timelineProfessionnelContentList = document.querySelectorAll(
  ".timelineProfessionnel-content ul li"
);
timelineProfessionnelListClick(1);
timelineProfessionnelListClick(0);

function timelineProfessionnelListClick(id) {
  for (let i = 0; i < timelineProfessionnelList.length; i++) {
    const size = 30 - Math.abs(4 * (id - i));
    const opacity = 1 - Math.abs(0.45 * (id - i));
    if (opacity <= 0) {
      timelineProfessionnelList[i].setAttribute("class", "hidden");
    } else {
      timelineProfessionnelList[i].removeAttribute("class", "hidden");
      timelineProfessionnelList[i].style.fontSize = size + "px";
      timelineProfessionnelList[i].children[0].style.fontSize =
        size - 10 + "px";
    }
    timelineProfessionnelList[i].style.opacity = opacity;
  }
  timelineProfessionnelContentView(id);
  timelineProfessionnelListSelected = id;
}

function timelineProfessionnelContentView(id) {
  timelineProfessionnelContentList[
    timelineProfessionnelListSelected
  ].classList.add("hidden");
  timelineProfessionnelContentList[
    timelineProfessionnelListSelected
  ].children[0].classList.add("hidden");
  timelineProfessionnelContentList[
    timelineProfessionnelListSelected
  ].children[0].children[0].classList.add("hidden");
  timelineProfessionnelContentList[
    timelineProfessionnelListSelected
  ].children[0].children[1].classList.add("hidden");
  timelineProfessionnelContentList[
    timelineProfessionnelListSelected
  ].children[1].classList.add("hidden");

  timelineProfessionnelContentList[id].classList.remove("hidden");
  timelineProfessionnelContentList[id].children[0].classList.remove("hidden");
  timelineProfessionnelContentList[id].children[0].children[0].classList.remove(
    "hidden"
  );
  timelineProfessionnelContentList[id].children[0].children[1].classList.remove(
    "hidden"
  );
  timelineProfessionnelContentList[id].children[1].classList.remove("hidden");
}

function timelineProfessionnelListClickUp() {
  if (timelineProfessionnelListSelected != 0) {
    timelineProfessionnelListClick(timelineProfessionnelListSelected - 1);
  }
}
function timelineProfessionnelListClickDown() {
  if (
    timelineProfessionnelListSelected !=
    timelineProfessionnelList.length - 1
  ) {
    timelineProfessionnelListClick(timelineProfessionnelListSelected + 1);
  }
}

timelineProfessionnelListBtnUp.addEventListener("click", function() {
  timelineProfessionnelListClickUp();
});
timelineProfessionnelListBtnDown.addEventListener("click", function() {
  timelineProfessionnelListClickDown();
});

for (let i = 0; i < timelineProfessionnelList.length; i++) {
  timelineProfessionnelList[i].addEventListener("click", function() {
    timelineProfessionnelListClick(i);
  });
}

/*
      End TimelineProfessionnel
*/
