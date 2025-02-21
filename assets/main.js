// Let Javascript know about my buttons and elements 
let showImageButton= document.querySelector('#pic-folder')
let showMediaButton= document.querySelector('#media-folder')
let showAllButton = document.querySelector('#all-folder')
 
// Add onclick for my buttons
showImageButton.onclick = () => {
	// when i click show all, it should remove show-video 
	channelBlocks.classList.add('pic-folder')
	channelBlocks.classList.remove('all-folder')
}

showMediaButton.onclick =m () => {
	//when I click show videos, it should add show-video class
	channelBlocks.classList.add('media-folder')
	channelBlocks.classList.remove('pic-folder)
}

showAllButton.onclick = () => {
	// when I click show all, it should remove show-video 
	channelBlocks.classList.remove('show-video')
	channelBlocks.classList.remove('show-image')
}

// close popup
const popup = document.getElementById("popup-close")
const popContainer = document.getElementById("popup-container")
popup.addEventListener("click", function(){
	console.log("hello")

	// hide the current popup
	let popContainer;
	popContainer.style.display = 'none'
})