<<<<<<< HEAD
const videoElement = document.getElementById('video')
const button = document.getElementById('button')

//prompt to select a media stream, pass to video elemnt then p lay
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () =>{
            videoElement.play()
        }
    } catch(error){
    }
}

button.addEventListener('click', async () =>{
    // Disaable button
    button.disabled=true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    // resetbutton
    button.disabled=false()
});

//onLoad
=======
const videoElement = document.getElementById('video')
const button = document.getElementById('button')

//prompt to select a media stream, pass to video elemnt then p lay
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () =>{
            videoElement.play()
        }
    } catch(error){
    }
}

button.addEventListener('click', async () =>{
    // Disaable button
    button.disabled=true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    // resetbutton
    button.disabled=false()
});

//onLoad
>>>>>>> 4ca431c156efd70961f3b4aedb50a1c5e873d753
selectMediaStream()