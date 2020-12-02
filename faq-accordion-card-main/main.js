const accordion = document.getElementsByClassName("accordion");
let i;

/*iterate over each element in accordion and add/remove active class to trigger hover states*/
/* TODO: change onClick state to black from red*/
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");

    /* select panel element, toggle between active/inactive panel (for each click event )*/
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
