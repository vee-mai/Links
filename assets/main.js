// Let Javascript know about my buttons and elements 
let channelBlocks = document.querySelector('#channel-blocks')
let showImageButton= document.querySelector('#pic-folder')
let showMediaButton= document.querySelector('#media-folder')
let showAllButton = document.querySelector('#all-folder')
 
// Add onclick for my buttons
showImageButton.onclick = () => {
	channelBlocks.classList.add('show-image')
	channelBlocks.classList.remove('show-all', 'show-video')
}

showMediaButton.onclick = () => {
	channelBlocks.classList.add('show-video')
	channelBlocks.classList.remove('show-all', 'show-image')
}

showAllButton.onclick = () => {
	channelBlocks.classList.add('show-all')
	channelBlocks.classList.remove('show-image', 'show-video')
}

// // close popup
// const popup = document.getElementById("popup-close")
// const popContainer = document.getElementById("popup-container")
// popup.addEventListener("click", function(){
// 	console.log("hello")

// 	// hide the current popup
// 	let popContainer;
// 	popContainer.style.display = 'none'
// })