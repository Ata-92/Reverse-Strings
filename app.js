const text = prompt('Please enter a text: ');
let reversedText = '';
for (let i = text.length - 1; i >= 0; i--) reversedText += text[i];
document.getElementById("p").innerHTML = reversedText;
