import "./style/main.scss"
import { gsap } from "gsap"
import { onResize } from "./utils"
import { Cursor } from "./utils/Cursor"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"

class App {
	constructor() {
		Splitting()
		this.createDOM()
		this.DOM.body.classList.add("is-loaded")
		window.addEventListener("resize", onResize)
		onResize()
		window.addEventListener("load", () => {
			gsap.set(this.DOM.spansTitle, {
				width: 0,
				opacity: 0,
			})
			gsap.set(this.DOM.title, {
				opacity: 0,
				yPercent: 100,
			})
			gsap.set(this.DOM.imgWrapper, {
				y: "81vh",
			})
			gsap.set(this.DOM.img, {
				y: "-81vh",
			})
			setTimeout(() => {
				this.DOM.body.classList.remove("is-loading")
				this.opening()
			}, 800)
			const cursor = new Cursor()
		})
	}

	opening() {
		const tl = gsap.timeline()
		tl.to(this.DOM.loadImg, {
			y: "-95vh",
			stagger: 0.3,
			duration: 2.8,
		})
			.to(
				this.DOM.loadImg,
				{
					opacity: 0,
					stagger: 0.3,
					duration: 0.8,
				},
				"-=2.4"
			)
			.set(this.DOM.loadImg, {
				visibility: "hidden",
			})
			.fromTo(
				this.DOM.spansTitle,
				{
					opacity: 0,
				},
				{
					repeat: 2,
					ease: "power3.inOut",
					opacity: 1,
					duration: 0.14,
				}
			)
			.to(this.DOM.spansTitle, {
				width: "auto",
			}, "+=.2")
			.to(this.DOM.title, {
				ease: "power3.inOut",
				opacity: 1,
				yPercent: 0,
				duration: 1.2,
				stagger: 0.014,
			})

			.to(
				this.DOM.imgWrapper,
				{
					y: 0,
					duration: 0.8,
					stagger: 0.3,
				},
				"-=.2"
			)
			.to(
				this.DOM.img,
				{
					y: 0,
					stagger: 0.3,
					duration: 0.8,
				},
				"-=1.4"
			)
	}

	createDOM() {
		this.DOM = {
			body: document.body,
			title: [...document.querySelectorAll("#app h1 .char")],
			spansTitle: [
				...document.querySelectorAll("#app h1 span[data-splitting]"),
			],
			loadImg: [...document.querySelectorAll(".opening__img-wrapper")],
			imgWrapper: [...document.querySelectorAll("#app .img-wrapper")],
			img: [...document.querySelectorAll("#app .img-wrapper img")],
		}
	}
}

window.addEventListener("DOMContentLoaded", () => {
	const app = new App()
})
