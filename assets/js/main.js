const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const buttons = $$("button");
const modals = $$(".modal");

// Modal
buttons.forEach((button) => {
  let idButton = button.dataset.target;
  button.addEventListener("click", function () {
    if (!idButton) return;
    modals.forEach((modal) => {
      let idModal = modal.getAttribute("id");
      const btnClose = modal.querySelector(".modal-close");
      if (
        idButton.slice(1).includes(idModal) ||
        idButton.slice(1) === idModal
      ) {
        modal.classList.add("active");

        if (
          modal.classList.value.includes("modal active") &&
          btnClose !== null
        ) {
          btnClose.addEventListener("click", function () {
            modal.classList.remove("active");
          });

          document.body.addEventListener("click", function (event) {
            if (!event.target.matches(".modal.active")) {
              event.target.parentNode.classList.remove("active");
            }
          });
        }
      }
    });
  });
});

// Slider
const btnActionControls = $$(".btn-slider-control");
const sliders = $$(".slider");

function scrollSlider(direction) {
  sliders.forEach(function (slider) {
    const listSliderItem = slider.querySelectorAll(".slider-item");
    for (let i = 0; i < listSliderItem.length; i++) {
      let item = listSliderItem[i];
      const itemWidth = item.offsetLeft + item.offsetWidth;
      const sliderWidth = slider.offsetLeft + slider.offsetWidth + 15;

      let widthTranslateX = 0;
      if (direction === "previous") {
        widthTranslateX += sliderWidth;
        slider.style.transform = `translateX(${widthTranslateX}px)`;
      } else {
        widthTranslateX += sliderWidth;
        slider.style.transform = `translateX(-${widthTranslateX}px)`;
      }
    }
  });
}

btnActionControls.forEach(function (btnControl) {
  btnControl.addEventListener("click", function () {
    if (btnControl.classList.contains("btn-slider-prev")) {
      scrollSlider("previous");
    } else {
      scrollSlider("next");
    }

    // sliders.forEach(function (slider) {
    //   const listSliderItem = slider.querySelectorAll(".slider-item");
    //   listSliderItem.forEach(function (sliderItem) {
    //     const sliderItemWidth = sliderItem.offsetWidth;
    //     slider.style.transform = `translateX(${sliderItemWidth}px)`;
    //   });
    // });
  });
});
