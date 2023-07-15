
// İleri Seviye ve Daha Kullanışlı Proje
let colorFlipperAdvanced = () => {

    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    // # Renkler,(hexadecimal olarak) hex dizisinde yazmış olduğumuz, sayı ve rakamlar arasındaki kombinasyonlarla oluşur. #f15025 gibi...

    const btn = document.getElementById('btn');
    const color = document.querySelector('.color');

    btn.addEventListener("click", function(){
        let hexColor = '#';
        
        for (let i = 0; i < 6; i++) {
            hexColor += hex[getRandomNumber()];
        }
        color.textContent = hexColor;
        document.body.style.backgroundColor = hexColor;
    });

    let getRandomNumber = () => {
        return Math.round(Math.random() * (hex.length-1));
    };

};

colorFlipperAdvanced();