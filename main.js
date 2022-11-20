const text1_options = [
    "happy bday bubu",
    "look how cute u are",
    "look how busuk u are (⊙ˍ⊙)",
    "goodluck, big journey oncoming!!!"
  ];
  const text2_options = [
    "69 min. read",
    "7 min. read",
    "8 min. read",
    "87,658.1277 min. read"
  ];
  const color_options = ["#EBB9D2", "#b0e6ff", "#fdaf89", "#dbffdb"];
  const image_options = [
    "https://media.discordapp.net/attachments/852920269826686986/1036785345250983936/IMG_2565.jpg?width=901&height=676",
    "https://media.discordapp.net/attachments/852920269826686986/1041866425549197322/IMG_3474.jpg?width=901&height=676",
    "https://media.discordapp.net/attachments/852920269826686986/1037398811812843581/IMG_2623.jpg?width=901&height=676",
    "https://media.discordapp.net/attachments/852920269826686986/1041866425549197322/IMG_3474.jpg?width=901&height=676"
  ];
  var i = 0;
  const currentOptionText1 = document.getElementById("current-option-text1");
  const currentOptionText2 = document.getElementById("current-option-text2");
  const currentOptionImage = document.getElementById("image");
  const carousel = document.getElementById("carousel-wrapper");
  const mainMenu = document.getElementById("menu");
  const optionPrevious = document.getElementById("previous-option");
  const optionNext = document.getElementById("next-option");
  
  currentOptionText1.innerText = text1_options[i];
  currentOptionText2.innerText = text2_options[i];
  currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  mainMenu.style.background = color_options[i];
  
  optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];
  
    currentOptionText2.dataset.nextText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");
    
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-next");
    }, 650);
  };
  
  optionPrevious.onclick = function () {
    if (i === 0) {
      i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];
  
    currentOptionText2.dataset.previousText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-previous");
    }, 650);
  };
  