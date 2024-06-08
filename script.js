// necessary variables:
const body = document.querySelector("body");
const colorCode = document.querySelector(".color-code");
const generateBtn = document.querySelector(".generate-button");
const hextCode = document.querySelector(".hex-code");
const hslCode = document.querySelector(".hsl-code");

// random number generateor
const randomNum = () => Math.floor(Math.random() * 256);
// rgbToHsl function
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h,
    s,
    l = (max + min) / 2;

  if (delta === 0) {
    h = s = 0; // achromatic
  } else {
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
        break;
      case g:
        h = ((b - r) / delta + 2) * 60;
        break;
      case b:
        h = ((r - g) / delta + 4) * 60;
        break;
    }
  }

  return [h, s, l];
}

generateBtn.addEventListener("click", () => {
  // rgb variables
  const red = randomNum();
  blue = randomNum();
  green = randomNum();

  // hex variables
  hexRed = red.toString(16);
  hexGreen = green.toString(16);
  hexBlue = blue.toString(16);

  // hsl string
  hslStr = rgbToHsl(red, green, blue);

  colorText = `rgb(${red},${green},${blue})`;
  hexText = `#${hexRed}${hexGreen}${hexBlue}`;

  // dark bg visibility function
  if(red<20 && blue<30 && green<30){
    body.style.color = 'white'
  }else{
    body.style.color = 'black'
  }
  body.style.backgroundColor = hexText;
  colorCode.textContent = colorText;
  hextCode.textContent = `Hex:${hexText}`;
  hslCode.textContent = `hsl:${Math.round(hslStr[0])},${Math.round(
    hslStr[1]
  )},${Math.round(hslStr[2])}`;
});
