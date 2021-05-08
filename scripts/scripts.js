const foldApp = {};

foldApp.element = document.getElementById("landingImage");
foldApp.openText = document.querySelector(".open");

foldApp.startingPosition = () => {
  const folded = new OriDomi(foldApp.element, {
    vPanels: 10,
  });
  folded.accordion(75).wait(1200).setSpeed(2000).unfold();
};

foldApp.hideOpenText = () => {
  const folded = document.querySelector(".oridomi-panel oridomi-panel-v");
  console.log(folded);
};

foldApp.init = () => {
  foldApp.startingPosition();
  foldApp.hideOpenText();
};

foldApp.init();
