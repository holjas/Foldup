const foldApp = {};

foldApp.element = document.getElementById("landingImage");
foldApp.openText = document.querySelector(".background");

foldApp.startingPosition = () => {
  const folded = new OriDomi(foldApp.element, {
    vPanels: 10,
  });

  folded.accordion(70, function () {
    foldApp.openText.style.display = "flex";
  });
};

foldApp.init = () => {
  foldApp.startingPosition();
};

foldApp.init();
