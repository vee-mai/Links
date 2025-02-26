
// This allows us to process/render the descriptions, which are in Markdown!
// More about Markdown: https://en.wikipedia.org/wiki/Markdown
let markdownIt = document.createElement('script')
markdownIt.src = 'https://cdn.jsdelivr.net/npm/markdown-it@14.0.0/dist/markdown-it.min.js'
document.head.appendChild(markdownIt)

// Okay, Are.na stuff!
let channelSlug = 'time-machine-5d-vxzzssb4' // The “slug” is just the end of the URL

// First, let’s lay out some *functions*, starting with our basic metadata:
let placeChannelInfo = (data) => {
	// Target some elements in your HTML:

	let channelTitle = document.getElementById('channel-title')
	let channelDescription = document.getElementById('channel-description')
	let channelCount = document.getElementById('channel-count')
	let channelLink = document.getElementById('channel-link')

	// Then set their content/attributes to our data:
	channelTitle.innerHTML = data.title
	channelDescription.innerHTML = window.markdownit().render(data.metadata.description) // Converts Markdown → HTML
	channelCount.innerHTML = data.length
	channelLink.href = `https://www.are.na/channel/${channelSlug}`
}

// Then our big function for specific-block-type rendering:
let renderBlock = (block) => {
	// To start, a shared `ul` where we’ll insert all our blocks
	let channelBlocks = document.getElementById('channel-blocks')

	// Links!
	if (block.class == 'Link') {
		let linkItem =
			`
			<li class="link-block">

			<button class="preview">
				<img class="link-png" src="assets/link.png">
				<figure>
					<figcaption>link_preview</figcaption>
				</figure>
			</button>

			<dialog class="content-modal">
				<div class="modal-message">
					<div class="modal-bar">
						<h1 class="modal-text">${ block.title }</h1>
					</div>
					<div>
						<button class="modal-close">X</button>
					</div>
				</div>
				<div class="modal-contents">
					<div class="image-container">
						<img class="modal-image" src="${ block.image.original.url}">
					</div>
					<div>
						<p>${ block.description_html }</p>
						<p>Added By ${block.connected_by_username}</p>
						<p><a href="${ block.source.url }"> See the original ↗ </a></p>
					</div>
				</div>
			</dialog>
			</li>
			`
		channelBlocks.insertAdjacentHTML('beforeend', linkItem)
		
		let initInteraction = () => {
		let linkBlocks = document.querySelectorAll('.link-block')
		linkBlocks.forEach((block) => {
			let openButton = block.querySelector('button')
			let dialog = block.querySelector('dialog')
			let closeButton = dialog.querySelector('button')
	
			openButton.onclick = () => {
				dialog.showModal()
			}
	
			closeButton.onclick = () => {
				dialog.close()
			}
	
			dialog.onclick = (event) => {
				if (event.target == dialog) {
					dialog.close()
				}
			}
		})
	}
	initInteraction();
}

	// Images
	else if (block.class == 'Image') {
		let imageItem =
			`
		<li class="image-block">
		<button class="preview">
			<img src="assets/preview.png">
			<figure>
				<figcaption>image_preview</figcaption>
			</figure>
		</button>
		<dialog class="content-modal">
				<div class="modal-message">
					<div class="modal-bar">
						<h1 class="modal-text">${ block.title }</h1>
					</div>
					<div>
						<button class="modal-close">X</button>
					</div>
				</div>
				<div class="modal-contents">
					<div class="image-container">
						<img src="${ block.image.large.url}">
						<p>${ block.description_html }</p>
						<p>Added By ${block.connected_by_username}</p>
					</div>
				</div>
		</dialog>
		</li>
		`
	channelBlocks.insertAdjacentHTML('beforeend', imageItem)
}

	// Text!
	else if (block.class == 'Text') {
		let textItem =
		`
		<li class="text-block">
		<button class="preview">
			<img class="text-png" src="assets/text.png">
			<figure>
				<figcaption>text_preview</figcaption>
			</figure>
		</button>
		<dialog class="content-modal">
			<div class="modal-message">
				<div class="modal-bar">
				<p>${ block.title }</p>
			</div>
			<div>
			<button class="modal-close">X</button>
			</div>
			<div>
				<p>link to download LimeWire</p>
				<p>${ block.description_html }</p>
			<div>
		</dialog>
		</li>
		`
	channelBlocks.insertAdjacentHTML('beforeend', textItem)
	let initInteraction = () => {
		let textItem = document.querySelectorAll('.text-block')
		textItem.forEach((block) => {
			let openButton = block.querySelector('button')
			let dialog = block.querySelector('dialog')
			let closeButton = dialog.querySelector('button')
	
			openButton.onclick = () => {
				dialog.showModal()
			}
	
			closeButton.onclick = () => {
				dialog.close()
			}
	
			dialog.onclick = (event) => {
				if (event.target == dialog) {
					dialog.close()
				}
			}
		})
	}
	initInteraction();
	
	}
	
	// Uploaded (not linked) media…
	else if (block.class == 'Attachment') {
		let attachment = block.attachment.content_type // Save us some repetition
		console.log(attachment)
		
		// Uploaded videos!
		
		if (attachment.includes('video')) {
			// …still up to you, but we’ll give you the `video` element:
			let attachment=
				`
				<li class="attachment-block">
				<button class="preview">
					<img src="assets/video.png" class"attachment-png">
					<figure>
					<figcaption>attachment_preview</figcaption>
					</figure>
				</button>
				<dialog class="content-modal">
					<div class="modal-message">
						<div class="modal-bar">
							<h1 class="modal-text">${ block.title }</h1>
						</div>
						<div>
							<button class="modal-close">X</button>
						</div>
					</div>
					<div>
						<video class="video-size" controls src="${ block.attachment.url }"></video>
						<p>${ block.description_html }</p>
					</div>
				</dialog>
				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend',attachment)
			let initInteraction = () => {
				let attachment= document.querySelectorAll('.attachment-block')
				attachment.forEach((block) => {
					let openButton = block.querySelector('button')
					let dialog = block.querySelector('dialog')
					let closeButton = dialog.querySelector('button')
			
					openButton.onclick = () => {
						dialog.showModal()
					}
			
					closeButton.onclick = () => {
						dialog.close()
					}
			
					dialog.onclick = (event) => {
						if (event.target == dialog) {
							dialog.close()
						}
					}
				})
			}
			initInteraction();
			
			// More on video, like the `autoplay` attribute:
			// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
		}

		// Uploaded PDFs!
		else if (attachment.includes('pdf')) {
			// …up to you!
			let pdfItem =
			`
			<li class="pdf-block">
			<button class="preview">
				<img class="pdf-png" src="assets/pdf.png">
				<figure>
				<figcaption>pdf_preview</figcaption>
				</figure>
			</button>
			<dialog class="content-modal">
				<div class="modal-message">
					<div class="modal-bar">
						<p>${ block.title }</p>
					</div>
					<div>
						<button class="modal-close">X</button>
					</div>
				</div>
				<div>
					<img src="${ block.image.thumb.url }">
					<p>${ block.description_html }</p>
				</div>
			</dialog>
			</li>
			`
		channelBlocks.insertAdjacentHTML('beforeend', pdfItem)

		let initInteraction = () => {
			let pdfItem= document.querySelectorAll('.pdf-block')
			pdfItem.forEach((block) => {
				let openButton = block.querySelector('button')
				let dialog = block.querySelector('dialog')
				let closeButton = dialog.querySelector('button')
		
				openButton.onclick = () => {
					dialog.showModal()
				}
		
				closeButton.onclick = () => {
					dialog.close()
				}
		
				dialog.onclick = (event) => {
					if (event.target == dialog) {
						dialog.close()
					}
				}
			})
		}
		initInteraction();	
		}

		// Uploaded audio!
		else if (attachment.includes('audio')) {
			// …still up to you, but here’s an `audio` element:
			let audioItem =
				`
				<li class="audio-block">
				<button class="preview">
					<img class="link-png" src="assets/files.png">
					<figure>
						<figcaption>audio_preview</figcaption>
					</figure>
				</button>
				<dialog class="content-modal">
					<div class="modal-message">
						<div class="modal-bar">
							<h1 class="modal-text">${ block.title }</h1>
						</div>
						<div>
							<button class="modal-close">X</button>
						</div>
					</div>
						<div>
							<img class="modal-image" src="${ block.image.original.url}">
							<audio controls src="${ block.attachment.url }" class="audio-size"></audio>
							<p>${ block.description_html}</p>
						</div>
				</dialog>
				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend', audioItem)
			// More on audio: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
			let initInteraction = () => {
				let audioItem = document.querySelectorAll('.audio-block')
				audioItem.forEach((block) => {
					let openButton = block.querySelector('button')
					let dialog = block.querySelector('dialog')
					let closeButton = dialog.querySelector('button')
			
					openButton.onclick = () => {
						dialog.showModal()
					}
			
					closeButton.onclick = () => {
						dialog.close()
					}
			
					dialog.onclick = (event) => {
						if (event.target == dialog) {
							dialog.close()
						}
					}
				})
			}
			initInteraction();
		}
	}

	// Linked media…
	else if (block.class == 'Media') {
		let embed = block.embed.type

		// Linked video!
		if (embed.includes('video')) {
			// …still up to you, but here’s an example `iframe` element:
			let linkedVideoItem =
				`
				<li class="media-block">
				<button class="preview">
					<img class="media-png" src="assets/media.png">
					<figure>
						<figcaption>media_preview</figcaption>
					</figure>
				</button>

				<dialog class="content-modal">
					<div class="modal-message">
						<div class="modal-bar">
							<h1 class="modal-text">${ block.title }</h1>
						</div>
						<div>
							<button class="modal-close">X</button>
						</div>
					</div>
					<div class="modal-contents">
						<iframe ${block.embed.html} </iframe>
						<p>${ block.description_html }</p>
						<p>Added By ${block.connected_by_username}</p>
						<p><a href="${ block.source.url }"> See the original ↗ </a></p>
					<div>
				</dialog>
				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend', linkedVideoItem)
			// More on iframe: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
			let initInteraction = () => {
				let linkedVideoItem= document.querySelectorAll('.media-block')
				linkedVideoItem.forEach((block) => {
					let openButton = block.querySelector('button')
					let dialog = block.querySelector('dialog')
					let closeButton = dialog.querySelector('button')
			
					openButton.onclick = () => {
						dialog.showModal()
					}
			
					closeButton.onclick = () => {
						dialog.close()
					}
			
					dialog.onclick = (event) => {
						if (event.target == dialog) {
							dialog.close()
						}
					}
				})
			}
			initInteraction();	
		}
		// // Linked audio!
		// else if (embed.includes('rich')) {
		// 	// …up to you!
		// }
	}
}


// It‘s always good to credit your work:
let renderUser = (user, container) => { // You can have multiple arguments for a function!
	let userAddress =
		`
		<address>
			<img src="${ user.avatar_image.display }">
			<h3>${ user.first_name }</h3>
			<p><a href="https://are.na/${ user.slug }">Are.na profile ↗</a></p>
		</address>
		`
	container.insertAdjacentHTML('beforeend', userAddress)
}

// image-blocks
let initInteraction = () => {
	let  imageBlocks = document.querySelectorAll('.image-block')
	imageBlocks.forEach((block) => {
		let openButton = block.querySelector('button')
		let dialog = block.querySelector('dialog')
		let closeButton = dialog.querySelector('button')||""

		openButton.onclick = () => {
			dialog.showModal()
		}

		closeButton.onclick = () => {
			dialog.close()
		}

		dialog.onclick = (event) => {
			if (event.target == dialog) {
				dialog.close()
			}
		}
	})
}



// Now that we have said what we can do, go get the data:
fetch(`https://api.are.na/v2/channels/${channelSlug}?per=100`, { cache: 'no-store' })
	.then((response) => response.json()) // Return it as JSON data
	.then((data) => { // Do stuff with the data
		console.log("DATA",data) // Always good to check your response!
		placeChannelInfo(data) // Pass the data to the first function

		// Loop through the `contents` array (list), backwards. Are.na returns them in reverse!
		data.contents.reverse().forEach((block) => {
			// console.log(block) // The data for a single block
			renderBlock(block) // Pass the single block data to the render function
		})

		initInteraction();

		// Also display the owner and collaborators:
		let channelUsers = document.getElementById('channel-users') // Show them together
		data.collaborators.forEach((collaborator) => renderUser(collaborator, channelUsers))
		renderUser(data.user, channelUsers)
	})

