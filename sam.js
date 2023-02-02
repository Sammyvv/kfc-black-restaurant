function knopje1() {
  document.getElementById("eerste_foto").style.display = 'block';
  document.getElementById("tweede_foto").style.display = 'none';
  document.getElementById("derde_foto").style.display = 'none';
  document.getElementById("vierde_foto").style.display = 'none';
} var audio = document.getElementById("audio1");
  audio.play();

function knopje2() {
  document.getElementById("eerste_foto").style.display = 'none';
  document.getElementById("tweede_foto").style.display = 'block';
  document.getElementById("derde_foto").style.display = 'none';
  document.getElementById("vierde_foto").style.display = 'none';
} var audio = document.getElementById("audio2");
  audio.play();

function knopje3() {
  document.getElementById("eerste_foto").style.display = 'none';
  document.getElementById("tweede_foto").style.display = 'none';
  document.getElementById("derde_foto").style.display = 'block';
  document.getElementById("vierde_foto").style.display = 'none';
  var audio = document.getElementById("audio3");
  audio.play();
  
}

function knopje4() {
  document.getElementById("eerste_foto").style.display = 'none';
  document.getElementById("tweede_foto").style.display = 'none';
  document.getElementById("derde_foto").style.display = 'none';
  document.getElementById("vierde_foto").style.display = 'block';
  var audio = document.getElementById("audio4");
  audio.play();
  
}
