
TweenMax.to(".home__primary", 2, {
  width: "100%",
  ease: Expo.easeInOut,
});
gsap.from(".color-box", { opacity: 0, duration: 2, delay: 1.5, y: 100 });
gsap.from(".home__title", { opacity: 0, duration: 2, delay: 1.5, y: 100 });
gsap.from(".home__img img", { opacity: 0, duration: 2, delay: 1.5, y: -100 });
gsap.from(".icons", { opacity: -1, duration: 2, delay: 1.5, y: -100 });
gsap.from(".r-m-btn", { opacity: 0, duration: 2, delay: 1.5, y: 100 });


TweenMax.to(".home__secondary", 2.5, {
  width: "100%",
  ease: Expo.easeInOut,
});
gsap.from(".home__year", { opacity: -1, duration: 1.5, delay: 1.5, x: 100 });
gsap.from(".avater", { opacity: -1, duration: 1.5, delay: 1.5, x: 100 });
gsap.from(".EffectP", { opacity: -1, duration: 1.5, delay: 1.5, x: 100 });

function changeImage(imageUrl) {
  var mainImage = document.getElementById("mainImage");
  mainImage.src = imageUrl;
}
