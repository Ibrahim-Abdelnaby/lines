// JQuery Smooth Scroll
$(".menu a").on("click", function (e) {
  console.log(this.hash);
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

// The Booking Form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzYbJtGain4JHV90-B0kMPzzVKzXinorbkCy7KuFt1zhy1bBTpiiRULbys6QuaQ_RpYIQ/exec";

const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "post", body: new FormData(form) })
    .then((Response) =>
      alert("🎉 بنشكرك علي تأكيد الحجز، سيتم التواصل معك في أقرب وقت 🎉")
    )
    .catch((error) => console.error("Error!", error.message));
  const formReset = document.getElementById("selfclick");
  formReset.click();
});
