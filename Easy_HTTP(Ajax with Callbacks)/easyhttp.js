function easyHTTP() {
  this.http = new XMLHttpRequest();
}
// make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("error: " + self.http.status);
    }
  };
  this.http.send();
};

// Make an HTTP POST Request

// MAke an HTTP PUT Request

// Make an HTTP DELETE Request
