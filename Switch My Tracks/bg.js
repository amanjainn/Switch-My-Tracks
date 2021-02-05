chrome.runtime.onMessage.addListener((msg,sender,response)=>{
    if(msg.name==="playTrack"){

        var trackName=msg.track;
        var audioElem=document.querySelector('.audio-element');
        audioElem.src=trackName+'.mp3'
        audioElem.play();
    }

    if(msg.name==="pauseTrack"){

        var audioElem=document.querySelector('.audio-element');
        audioElem.pause();
    }
})