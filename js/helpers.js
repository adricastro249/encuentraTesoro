function randomNumber (size) {
    return Math.floor(Math.random() * size);
  }

let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
  }

function getDistanceHint (distance) {
    if (distance < 30) {
        return "Hirbiendo";
    } else if (distance < 100) {
        return "Muy caliente";
    } else if (distance < 200) {
        return "Caliente";
    } else if (distance < 300) {
        return "Tibio";
    } else if (distance < 580) {
        return "Frio";
    } else if (distance < 680) {
        return "Muy frio";
    } else {
        return "Congelado";
    }
}
