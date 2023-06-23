function startClassification()//Funcão para acessar o microfone.
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/IzKDXbTEJ/model.jsom',modelReady);//Funcão pre definida da biblioteca ml5cjs, ultilizada para acionar clasificação de voz
    //poup
}
function modelReady()
{
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;

function gotResults(error, result){
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    document.getElementById("result_label").innnerHTML = 'Som detectado de - '+ result[0].label;
    document.getElementById("result_count").innnerHTML = 'Cachorro detectado - '+dog+ 'Gato detectado - '+cat;
    document.getElementById("result_label").style.color = "rbg ("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rbg ("+random_number_r+","+random_number_g+","+random_number_r+")";
     img = document.getElementById('animal_imge');

     if (results[0].label == "Latido") {
      img.src = 'bark.gif';
      dog = dog+1;
     }
     else if (result[0].label == "Miado") {
      img.src = 'meow.gif';
      cat = cat+1;
     }
     else {
      img.src = 'listen.gif';
     }
  }
}
