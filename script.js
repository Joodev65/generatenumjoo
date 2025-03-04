let sound = new Audio('click.mp3'); // Tambahkan file "click.mp3" di folder yang sama
function generateNumber() {
    sound.play();
    let randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('result').innerHTML = "Angka Keberuntunganmu: <br> 🎰 <b>" + randomNumber + "</b> 🎰";
}
