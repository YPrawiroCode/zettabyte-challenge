function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "EXPLORE";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "LESS TEXT";
      moreText.style.display = "inline";
    }
  }

function myFunction2() {
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");
  
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText2.innerHTML = "EXPLORE";
      moreText2.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText2.innerHTML = "LESS TEXT";
      moreText2.style.display = "inline";
    }
}