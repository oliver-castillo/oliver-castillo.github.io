document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('[id^="btnModal"]');
  changeCertificate(buttons)
})

let certificateImg = document.getElementById("certificateImg")

function changeCertificate (buttons) {
  buttons.forEach(function (btn) {
    switch (btn.id) {
      case "btnModalBachelor":
        changeCertificateImage(btn, "/static/img/certificates/bachelors_degree.jpg")
        break;
      case "btnModalEfset":
        changeCertificateImage(btn, "/static/img/certificates/efset.jpg")
        break;
      case "btnModalPython":
        changeCertificateImage(btn, "/static/img/certificates/python_essentials.jpg")
        break;
      default:
        break;
    }
  })
}

function changeCertificateImage (btn, route) {
  btn.addEventListener("click", function () {
    document.getElementById("certificateImg").setAttribute("src", route)
  })
}

