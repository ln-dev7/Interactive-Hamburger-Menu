import "./style.scss";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

CustomEase.create("customEase", "M0,0 C0.25,0.1 0.25,1 1,1");

const duration = 0.75;

const options = document.querySelectorAll(".menu-options > *");
const menu = document.querySelector(".menu");
const more = document.querySelector(".more");
const close = document.querySelector(".close");
const cover = document.querySelector(".cover");

more.addEventListener("click", () => {
  gsap.to(options, { x: -42, duration: duration, ease: "customEase" });
  gsap.to(menu, { height: 590, duration: duration, ease: "customEase" });
  gsap.to(cover, {
    width: 220,
    height: 500,
    right: 16,
    top: "50%",
    y: "-50%",
    borderRadius: 32,
    duration: duration,
    ease: "customEase",
  });
  gsap.to(".profile", { opacity: 0, duration: 0.5 });
});

close.addEventListener("click", () => {
  gsap.to(options, { x: 0, duration: duration, ease: "customEase" });
  gsap.to(menu, { height: 65, duration: duration, ease: "customEase" });
  gsap.to(cover, {
    width: 384,
    height: 650,
    right: 0,
    top: 0,
    y: 0,
    borderRadius: 40,
    duration: duration,
    ease: "customEase",
  });
  gsap.to(".profile", { opacity: 1, duration: 0.5 });
});
