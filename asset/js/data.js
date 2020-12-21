class Data extends UI {
  constructor() {
    super();

    (this.key = "e6b6dc7894msh3e5fba24f14c7a4p10d06djsn31c3e0bcdab5"),
      (this.rapidApiHost = "instagram40.p.rapidapi.com");
  }
  async fetchData(postURL) {
    //Create URL for fetch API
    let URL = `https://instagram40.p.rapidapi.com/media-info-by-url?url=${postURL}`;
    //fetch API
    await fetch(URL, {
      method: "GET",
      headers: {
        "x-rapidapi-key": this.key,
        "x-rapidapi-host": this.rapidApiHost,
      },
    })
      .then((response) => {
        response.json().then((data) => this.showData(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
