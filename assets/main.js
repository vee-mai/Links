
// opening folder to view blocks
const picfolder = document.getElementById("picfolder")
picfolder.addEventListener("click",function(){
	console.log("testing")
	const infodiv = document.getElementById("info-here")
	const mainWin = document.createElement("div")
	mainWin.className = "popupPic";
	mainWin.innerHTML = `
		<div class="popup-container" id="main-window">
			<header id="popup-msg">
				<div class="popup-bar">
					<div class="popup-text">Project</div>
					<div id="popup-close">X</div>
				</div>

				<div class="projectScroll">
					<div class="aboutProject">
						<p> Click on a project to learn more.</p>
					</div>
						<h1 id="channel-title"></h1>
						<div id="channel-blocks"></div>
						<div class="channel-users"> </div>
					</div>
			</header>
		</div>
`;
	infodiv.appendChild(mainWin)
})

// close popup
const popup = document.getElementById("popup-close")
const popContainer = document.getElementById("popContainer")
popup.addEventListener("click", function(){
	// console.log("hello")

	// hide the current popup
	popContainer.style.display = "none"
})

const blackScreen=document.getElementByID("black-screen")
popup.addEventListener("click", function(){
	blackScreen.style.display = "none"
})

// cursor
function myFunction (){
	document.getElementById("popup-close").style.cursor="pointer";
}
