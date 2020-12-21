class UI {
  showData(data) {
    let dataArray = data,
      {
        display_resources: {
          2: { src },
        },
        video_url,
      } = dataArray,
      imgDisplay = document.querySelector("#display-pic"),
      downloadLink = document.querySelector("#downloadLink");
    // console.log(src);
    // console.log(video_url);
    // console.log(dataArray);
    imgDisplay.setAttribute("src", src);
    downloadLink.setAttribute("href", video_url);
  }
}
