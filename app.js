
let colorFlipper = () => {

    const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue", "gray", "brown", "aqua", "black", "orange", "pink", "purple"];
    const btn = document.getElementById('btn');
    const color = document.querySelector('.color');

    btn.addEventListener("click", function(){
        // getRandomNumber fonksiyonumuzdan gelen random sayıları alıp colors dizimize index olarak verip, dizideki farklı değerleri getirelim. 
        const randomNumber = getRandomNumber();
        console.log(randomNumber);

        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber];
    });

    let getRandomNumber = () => {
        return Math.round(Math.random() * (colors.length-1));
    };

};

colorFlipper();
