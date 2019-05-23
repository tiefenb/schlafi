class App {

  constructor() {
    if(document.readyState !== "loading") {
      this.start()
    } else {
      document.addEventListener("DOMContentLoaded", this.start);
    }
  }

  start() {

    let timeToSleep = moment('22:30', 'hh:mm');

    $("#clock").countdown(timeToSleep.format("YYYY/M/D HH:mm"), function(event) {

      if(event.offset.totalSeconds <= 0) {
        $(this).html("Nix schlafi? <br><br> Probier: <br><br> <a href='https://www.youtube.com/results?search_query=asmr+sleep' target='_blank'>das hier.</a>");
      } else {
        $(this).html(event.strftime("Schlafi in <br><br> %H:%M:%S"));
        document.title = event.strftime("Schlafi in %H:%M:%S");
      }
    });

  }

  reset() {
    this.start();
  }

}

const app = new App();

setInterval(() => {
 app.reset();
}, 900000);
