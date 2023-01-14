// @ts-nocheck
// for color buttons & change umbrella color

let color_Btn = document.querySelectorAll(".color");

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
  document.querySelector("#Left-sect img").src = `./Img/umbrella_${color}.png`;
}

function btnNewCol(color) {
  document.querySelector(".btn-box").style.background = `${color}`;
}

// background color change for diff function

function changeBodyBg(color) {
  document.body.style.background = color;
}

// loading/ preloader for color change/image change

let preloader = document.querySelector("#preloader");

window.addEventListener("load", hidden);
function hidden() {
  preloader.classList.add("hidden");
}

// Uploaded image input on umbrella image

let fileInput = document.querySelector("#file");

let uploaded_image = "";

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

// button click upload image name show on the button

var loader = function (e) {
  let file = e.target.files;

  let show = "<span>Selected file : </span>" + file[0].name;

  let output = document.getElementById("selector");
  output.innerHTML = show;
  output.classList.add("active");
};
// add event listener for InputEvent
fileInput.addEventListener("change", loader);

// form validation only png and jpg as well as 5MB file size

// var img = document.forms['myform']['img_up'];

// var validExt = ["png", "jpg"];

// function validation() {
//   if (img.value != '') {
//     var pos_of_dot = img.value.lastIndexOf('.') + 1;
//     var img_ext = img.value.substring(pos_of_dot);

//     var result = validExt.include(img_ext);
//     if (result == false) {
//       return false;
//     }
//     else {
//       if (parseFloat(img.files[0].size / (1024 * 1024)) >= 5) {
//         alert('Selected file should be less than 5 MB');
//         return false;
//       }
//     }
//   }
//   else {
//     return false;
//   }

//   return true;
// }
