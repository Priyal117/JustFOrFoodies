function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    var p, text;
    p = document.getElementById("numb").value;
    if (isNaN(p) || p < 1 || p > 10) {
         text = "Input not valid";
    } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}

