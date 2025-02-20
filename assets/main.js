
// opening folder to view blocks
// const picfolder = document.getElementById("picfolder")

// picfolder.addEventListener("click",function(){
// 	console.log("testing")

// 	const infodiv = document.getElementById("info-here")
// 	const mainWin = document.createElement("div")
// 	mainWin.className = "popupPic";
// 	mainWin.innerHTML = `
// 	<div class="popup-container" id="main-window">
// 			<div id="popup-msg">
// 				<div class="popup-bar">
// 					<div class="popup-text">Project</div>
// 					<div id="popup-close">X</div>
// 				</div>

// 				<div class="projectScroll">
// 					<div class="aboutProject">
// 						<p> Click on a project to learn more</p>
// 					</div>
// 					<div>
// 						<h1 id="channel-title"></h1>
// 						<p><a id="channel-link">See on Are.na</a></p>
// 						<section id="channel-description"></section>
// 					</div>	 
// 				</div>
// 				<main>
// 					<section>
// 						<h2>All blocks</h2>
// 						<ul id="channel-blocks"></ul>
// 						<p><span id="channel-count"></span>blocks</p>
// 					</section>
// 				</main>
// 				<footer>
// 					<h2>Your authors</h2>
// 					<section id="channel-users"></section>
// 				</footer>
// 			</div>
// 		</div>
// `;
// 	infodiv.appendChild(mainWin)
// })


// Let Javascript know about my buttons and elements 
let channelBlocks = document.querySelector ('#channel-blocks')
//let showImageButton= document.querySelector('#picfolder')
let showVideoButton= document.querySelector('#show-video-button')
let showAllButton = document.querySelector('#show-all-buttonr')
 
// Add onclick for my buttons
showVideoButton.onclick =m () => {
	//when I click show videos, it should add show-video class
	channelBlocks.classList.add('show-video')
	channelBlocks.classList.remove('show-image')
}

showImageButton.onclick = () => {
	// when i click show all, it should remove show-video 
		channelBlocks.classList.add('show-image')
		channelBlocks.classList.remove('show-video')
}

showAllButton.onclick = () => {
	// when I click show all, it should remove show-video 
	channelBlocks.classList.remove('show-video')
// 	channelBlocks.classList.remove('show-image')
// }



// close popup
const popup = document.getElementById("popup-close")
const popContainer = document.getElementById("popup-container")
popup.addEventListener("click", function(){
	console.log("hello")

	// hide the current popup
	let popContainer;
	popContainer.style.display = 'none'
})

// cursor
function myFunction (){
	document.getElementById("popup-close").style.cursor="pointer";
}
