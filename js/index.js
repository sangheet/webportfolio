import { Showcase } from "./Showcase";
import { Slides } from "./Slides";
import { Cursor } from "./Cursor";
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/3.jpg';
import { link } from "fs";

const container = document.getElementById("app");
const cursor = new Cursor(document.querySelector('.cursor'));
const slidesData = [
  {
    image: image1,
    title: "Attlaris",
    meta: "Software Factory - Lima, Perú",
    more: "a1.html"
  },
  {
    image: image2,
    title: "Lofty",
    meta: "Web App UI-UX Design / USA",
    more: "a2.html"
  },
  {
    image: image3,
    title: "Málaga",
    meta: "Spain / Andalusia",
    more: "a3.html"
  },
  {
    image: image4,
    title: "Pamplona",
    meta: "Spain / Navarre",
    more: "a4.html"
  },
  {
    image: image5,
    title: "Bilbao",
    meta: "Spain / Biscay",
    more: "a5.html"
  },
  {
    image: image6,
    title: "Taboole",
    meta: "Morroco / Marrakesh",
    more: "a5.html"
  },
  {
    image: image7,
    title: "Krashmash",
    meta: "India / Banjeera",
    more: "a6.html"
  }
];

const slides = new Slides(slidesData);
const showcase = new Showcase(slidesData, {
  onActiveIndexChange: activeIndex => {
    slides.onActiveIndexChange(activeIndex);
  },
  onIndexChange: index => {
    slides.onMove(index);
  },
  onZoomOutStart: ({ activeIndex }) => {
    cursor.enter();
    slides.appear();
  },
  onZoomOutFinish: ({ activeIndex }) => {
  },
  onFullscreenStart: ({ activeIndex }) => {
    cursor.leave();
    slides.disperse(activeIndex);
  },
  onFullscreenFinish: ({ activeIndex }) => {
  }
});

showcase.mount(container);
slides.mount(container);
showcase.render();

window.addEventListener("resize", function() {
  showcase.onResize();
});

window.addEventListener("mousemove", function(ev) {
  showcase.onMouseMove(ev);
});
