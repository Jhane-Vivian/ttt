//https://teachablemachine.withgoogle.com/models/ZEYfPcWhE/

function iniciar() {
  navigator.mediaDevices.getUserMedia({ audio: true, video: false });
  classifier = ml5.soundClassifier(
    "https://teachablemachine.withgoogle.com/models/ZEYfPcWhE/model.json",
    { probabilityThreshold: 0.7 },
    modelReady
  );
}

function modelReady() {
  classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("numero").innerHTML =
      "Som detectado de  - " + results[0].label;
    document.getElementById("audio").innerHTML =
      "Cachorro detectado - " + dog + " Gato detectado - " + cat;
    document.getElementById("numero").style.color =
      "rgb(" +
      random_number_r +
      "," +
      random_number_g +
      "," +
      random_number_r +
      ")";
    document.getElementById("audio").style.color =
      "rgb(" +
      random_number_r +
      "," +
      random_number_g +
      "," +
      random_number_r +
      ")";

    img = document.getElementById("animal_image");

    if(results[0].label == "Cachorro") {
      img.src = "cachorro-independente-1.jpg";
      dog = dog + 1;
    } else if (results[0].label == "Gato") {
      img.src = "enxoval-para-gato-Copia.jpg";
      cat = cat + 1;
    } else {
      img.src = "";
    }
  }
}
