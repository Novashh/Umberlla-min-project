// @ts-nocheck

let color_Btn = document.querySelectorAll(".color");

let leftImg = document.querySelector("#Left-sect img");

let btnBox = document.querySelector(".btn-box");

let preloader = document.querySelector("#preloader");

let fileInput = document.querySelector("#file");

let uploaded_image = "";

// 1rd --- loading/ preloader for color change/image change

let wind = window.addEventListener("load", hidden);

function hidden() {
  preloader.classList.add("hidden");
}

// 2st --for color buttons & change umbrella color

color_Btn.forEach((color) => {
  color.addEventListener("click", () => {
    let colorNameClass = color.className;

    if (!color.classList.contains("active-color")) {
      let colorName = colorNameClass.slice(
        colorNameClass.indexOf("-") + 1,
        colorNameClass.length
      );
      resetActiveBtn();
      color.classList.add("active-color");
      setNewColor(colorName);
      btnNewCol(colorName);
    }
  });
});

// resetting all color btns

function resetActiveBtn() {
  color_Btn.forEach((color) => {
    color.classList.remove("active-color");
  });
}

// function for image change umbrella and color change button

function setNewColor(color) {
  leftImg.src = `./Img/umbrella_${color}.png`;
}

function btnNewCol(color) {
  btnBox.style.background = `${color}`;
}

// background color change for diff function

function changeBodyBg(color) {
  document.body.style.background = color;
}

// 3th --- Uploaded image input on umbrella image

fileInput.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector(
      "#display-img"
    ).style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

// 5th--- button click upload image name show on the button

var loader = function (e) {
  let file = e.target.files;

  let show = "<span> Selected file : </span>" + file[0].name;

  let output = document.getElementById("selector");
  output.innerHTML = show;
  output.classList.add("active");
};
// add event listener for InputEvent
fileInput.addEventListener("change", loader);

// 6th -- form validation only png and jpg as well as 5MB file size

// It works fine but I didn't add

// var img = document.forms["form"]["img_up"];

// var validExt = ["png", "jpg"];

// function validation() {
//   if (img.value != "") {
//     var pos_of_dot = img.value.lastIndexOf(".") + 1;
//     var img_ext = img.value.substring(pos_of_dot);

//     var result = validExt.includes(img_ext);
//     if (result == false) {
//       alert("false");
//       return false;
//     } else {
//       if (parseFloat(img.files[0].size / (1024 * 1024)) >= 5) {
//         alert("Selected file should be less than 5 MB");
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }

//   return true;
// }
