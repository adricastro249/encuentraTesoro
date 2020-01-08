const width = 1085;
const heigh = 706;

let target = {
    x: randomNumber(width),
    y: randomNumber(heigh)
};

let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
clicks = 0;

mapa.addEventListener('click', function (e) {
    console.log('click');
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`;
  
    if (distance < 20 ) {
      alert(`Tesoro encontrado en ${clicks} clicks!`);
      location.reload();
    }
  });