
  function dogmode() {
    document.getElementById("dogLeft").classList.toggle("imageDogLeft")
    document.getElementById("dogCenter").classList.toggle("imageDogCenter")
    document.getElementById("dogRight").classList.toggle("imageDogRight")
    document.getElementById("wordsLeft").classList.toggle("imageWordsLeft")
    document.getElementById("wordsCenter").classList.toggle("imageWordsCenter")
    document.getElementById("wordsRight").classList.toggle("imageWordsRight")
    document.getElementById("dogButton").classList.toggle("dogButtonSelected")

    var x = document.getElementById("instaButton");
    if (x.innerHTML === "say woof on instagram") {
      x.innerHTML = "say hi on instagram";
      } else {
        x.innerHTML = "say woof on instagram";
      }
  }


  function menu() {
    document.getElementById("menu").classList.toggle("expandedMenu")
    document.getElementById("backgroundCover").classList.toggle("hideBackgroundCover")
  }



  function homeMenu() {

    document.getElementById("homeLink").classList.add("menuItemSelected")
    document.getElementById("aboutLink").classList.remove("menuItemSelected")


    setTimeout(() => {
      menu();
      document.getElementById("homePage").classList.remove("hideHomePage")
      document.getElementById("aboutPage").classList.add("hideAboutPage")
      document.getElementById("dogButtonContainer").classList.remove("hideDogButton")
    }, 350);
  }

  function aboutMenu() {

    document.getElementById("homeLink").classList.remove("menuItemSelected")
    document.getElementById("aboutLink").classList.add("menuItemSelected")


    setTimeout(() => {
    menu();
    document.getElementById("homePage").classList.add("hideHomePage")
    document.getElementById("aboutPage").classList.remove("hideAboutPage")
    document.getElementById("dogButtonContainer").classList.add("hideDogButton")
  }, 350);
  }


  function shopMenu() {
    document.getElementById("homeLink").classList.add("menuItemSelected")
    document.getElementById("aboutLink").classList.remove("menuItemSelected")


    setTimeout(() => {
      menu();
      document.getElementById("homePage").classList.remove("hideHomePage")
      document.getElementById("aboutPage").classList.add("hideAboutPage")
      document.getElementById("dogButtonContainer").classList.remove("hideDogButton")
    }, 350);
  }



const list = document.querySelector('.heroContainer');
const items = Array.from(document.querySelectorAll('.imageColumn'));
const indicators = Array.from(document.querySelectorAll('.indicatorDot'));

const observer = new IntersectionObserver(onIntersactionObserved,
  {
    root: list,
    threshold: 0.5
  });

  items.forEach(item => {
    observer.observe(item);
  });

  function onIntersactionObserved(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const intersectingIndex = items.indexOf(entry.target);
        activateIndicator(intersectingIndex);
      }
    });
  }

function activateIndicator(index) {
  indicators.forEach((indicator,i) => {
    indicator.classList.toggle('indicatorDotActive', i===index);
  });
}
