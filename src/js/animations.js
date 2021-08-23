import { gsap } from "gsap"

export const opening = (DOM) => {
	const tl = gsap.timeline()
	tl.to(DOM.loadImg, {
		y: "-95vh",
		stagger: 0.3,
		duration: 2.8,
	})
		.to(
			DOM.loadImg,
			{
				opacity: 0,
				stagger: 0.3,
				duration: 0.8,
			},
			"-=2.4"
		)
		.set(DOM.loadImg, {
			visibility: "hidden",
		})
		.fromTo(
			DOM.spansTitle,
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
		.to(
			DOM.spansTitle,
			{
				width: "100%",
			},
			"+=.2"
		)
		.to(DOM.title, {
			ease: "power3.inOut",
			opacity: 1,
			yPercent: 0,
			duration: 1.2,
			stagger: 0.014,
		})

		.to(
			DOM.imgWrapper,
			{
				y: 0,
				duration: 0.8,
				stagger: 0.3,
			},
			"-=.2"
		)
		.to(
			DOM.img,
			{
				opacity: 1,
				y: 0,
				stagger: 0.3,
				duration: 0.8,
				onComplete: () => {
					document.body.style.overflowY = "auto"
				},
			},
			"-=1.4"
		)
}

export const init = (DOM) => {
	gsap.set(DOM.homeSection, {
		opacity: 1,
	})
	gsap.set(DOM.spansTitle, {
		width: 0,
		opacity: 0,
	})
	gsap.set(DOM.title, {
		opacity: 0,
		yPercent: 100,
	})
	gsap.set(DOM.imgWrapper, {
		y: "81vh",
	})
	gsap.set(DOM.img, {
		y: "-81vh",
		opacity: 0,
	})
}
