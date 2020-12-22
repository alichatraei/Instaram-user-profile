class UI {
  showData(data) {
    let dataArray = data,
      {
        display_resources: {
          2: { src },
        },
        video_url,
        is_video,
      } = dataArray;
    //log for test
    console.log(dataArray);
    //show Elements
    this.showResult();
    //set data into elements
    this.showDataInElements(src, video_url, is_video);
  }
  //display : flex
  showResult() {
    //get element
    let elements = document.querySelectorAll(".showResult");
    //processing in the nodeList
    elements.forEach((value) => {
      value.setAttribute("style", "display:flex !important");
    });
  }
  //set data into elements
  showDataInElements(src, video_url, isVideo) {
    //get elements
    let imgDisplay = document.querySelector("#display-pic"),
      downloadLink = document.querySelector("#downloadLink"),
      figureCaption = document.querySelector(".figure-caption"),
      dataType = "";
    //set data
    imgDisplay.setAttribute("src", src);
    isVideo === true ? (dataType = "ویدیو") : (dataType = "عکس");
    isVideo === true
      ? downloadLink.setAttribute("href", video_url)
      : downloadLink.setAttribute("href", src);

    figureCaption.textContent = `نوع داده : ${dataType}`;
  }
  //validate Input Data
  validateInput(input) {
    input.setAttribute("style", "border-color:red;");
    input.placeholder = `لطفا لینک پست خود را وارد کنید`;
    setTimeout(() => {
      input.removeAttribute("style");
      input.placeholder = `https://www.instagram.com/p/CI_Aa5mASYF`;
    }, 3000);
  }
  //show error message when catch function called
  invalidStatusError() {
    let spinner = document.querySelector("#spinnerNav"),
      p = document.createElement("p");
    p.setAttribute("class", "alert alert-danger");
    p.textContent = `خطایی رخ داده است، لطفا از صحت لینک اطمنیان حاصل فرمایید و مجددا تلاش کنید`;
    spinner.appendChild(p);
    setTimeout(() => {
      p.remove();
    }, 3000);
  }
}
