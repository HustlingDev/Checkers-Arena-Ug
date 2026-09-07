// Small entrance animation
document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll(
    ".hero-content, .hero-logo, .feature, .download-box"
  );

  elements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";

    setTimeout(() => {
      element.style.transition =
        "opacity .7s ease, transform .7s ease";

      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, 120 + index * 80);
  });

});
