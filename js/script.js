let slides = document.querySelectorAll("img")

let i = 0

document.querySelector(".btnNext").onclick = (event) =>{
	i++
	
	if (i >= slides.length) {

		slides[i-1].classList.remove("block")

		i = 0

		slides[i].classList.add("block")
	} else {
		slides[i-1].classList.remove("block")

		slides[i].classList.add("block")
	}
}