function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2I0k368d-/model.json',modelReady);
}
function modelRead(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else {
        console.error("gotResults")
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'vai ser legal' + results[0].label;
        document.getElementById("result_cofidence").innerHTML = "confie em min" + (results[0].cofidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
}img = document.getElementById('cachorro');
img1 = document.getElementById('gato');
img2 = document.getElementById('leao');
img3 = document.getElementById('baleia');
if (results[0].label == "cachorro") {
    img.src = 'cachorro'
    img1.src = ''
    img2.src = ''
    img3.src = ''
}
else if (results[0].label == "gato") {
    img.src = ''
    img1.src = 'gato'
    img2.src = ''
    img3.src = ''
}
else if (results[0].label == "leao") {
    img.src = ''
    img1.src = ''
    img2.src = 'leao'
    img3.src = ''
}
else if (results[0].label == "background noise") {
    img.src = ''
    img1.src = ''
    img2.src = ''
    img3.src = 'baleia'
}
}


}