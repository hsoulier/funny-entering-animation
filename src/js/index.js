import { gsap } from "gsap"
import Splitting from "splitting"
import { onResize } from "./utils"
import { Cursor } from "./utils/Cursor"
import { init, opening } from "./animations"
import LocomotiveScroll from "locomotive-scroll"
import "../style/main.scss"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import "locomotive-scroll/dist/locomotive-scroll.min.css"

class App {
	constructor() {
		Splitting()
		this.createDOM()
		this.DOM.body.classList.add("is-loaded")
		window.addEventListener("resize", onResize)
		onResize()
		window.addEventListener("load", () => {
			const scroll = new LocomotiveScroll({
				el: document.querySelector("[data-scroll-container]"),
				smooth: true,
				direaction: "vertical",
			})
			init(this.DOM)
			setTimeout(() => {
				this.DOM.body.classList.remove("is-loading")
				opening(this.DOM)
			}, 800)
			this.cursor = new Cursor()
		})
	}

	createDOM() {
		this.DOM = {
			body: document.body,
			homeSection: document.querySelector(".home"),
			title: [...document.querySelectorAll(".home h1 .char")],
			spansTitle: [
				...document.querySelectorAll(".home h1 span[data-splitting]"),
			],
			loadImg: [...document.querySelectorAll(".opening__img-wrapper")],
			imgWrapper: [...document.querySelectorAll(".home .img-wrapper")],
			img: [...document.querySelectorAll(".home .img-wrapper img")],
		}
	}
}

const loadImgs = () => {
	const imgs = document.querySelectorAll("img")
	let imagesIndex = 0
	;[...imgs].forEach((element) => {
		const image = new Image()
		image.src = element.src
		image.onload = (_) => {
			imagesIndex += 1
			if (imagesIndex === imgs.length) {
				const app = new App()
			} else {
				console.log(
					`Need to load ${imgs.length - imagesIndex} more images`
				)
			}
		}
	})
}

window.addEventListener("DOMContentLoaded", () => {
	loadImgs()
})
