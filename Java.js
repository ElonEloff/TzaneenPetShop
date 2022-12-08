function myFunction(x) {
    if (x.matches) {
        const myDiv = document.getElementById("big");
        const parent = myDiv.parentNode;
        parent.removeChild(myDiv);
    } else {
        const myDiv = document.getElementById("small");
        const parent = myDiv.parentNode;
        parent.removeChild(myDiv);
    }
  }
