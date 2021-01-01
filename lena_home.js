var myVar;
            
            function myFunction() {
              myVar = setTimeout(showPage, 3000);
            }
            
            function showPage() {
              document.getElementById("loader").style.display = "none";
              document.getElementById("loading").style.display = "block";
            }
            var header = document.getElementById("icon-bar");
var btns = header.getElementsByClassName("bt");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}