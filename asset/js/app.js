//variables
let data = new Data(),
  ui = new UI(),
  btnSubmit = document.querySelector("#btnSubmit"),
  postURL = document.querySelector("#postURL");

//eventListeners
eventListeners();
function eventListeners() {
  //click on submit Button
  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    //empty validation
    if (postURL.value.length !== 0) data.fetchData(postURL.value);
    else ui.validateInput(postURL);
  });
}
