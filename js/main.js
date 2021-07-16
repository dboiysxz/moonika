

// PS! Brauseris soovitan kasutada "var"-i "const/let" asemel, kuna IE ei toeta consti ja leti
var isPopupVideoOpened = false;

function togglePopupVideo(state) {
    document.getElementById('openvid').classList.toggle('active', state);
    document.body.classList.toggle('active', state);
    isPopupVideoOpened = state;
}

function openPopupVideo() {
    togglePopupVideo(true)
}

function closePopupVideo() {
    togglePopupVideo(false)
}

// kui kasutad window.onloadi, siis saad olla kindel, et HTML on selleks ajaks ära laetud
window.onload = function(e) {

    // See kuulab kõiki klikke, mida kasutaja lehel teeb
    document.addEventListener('click', function(e) {
        var target = e.target;

        if (target.id == 'open-popup-video') {
            openPopupVideo();
        } else if (isPopupVideoOpened) {
            closePopupVideo();
        }
    })
}

// function toggleOpenvid () {
//     openvid.classList.toggle('active')
//     document.body.classList.toggle('active')
// }


// const curriculum = document.getElementById('curriculum')

function toggleCv () {
    curriculum.classList.toggle('active')
    document.body.classList.toggle('active')
}


// const openvid = document.getElementById('openvid')



const textElement = document.getElementById('text')
const words = textElement.dataset.words.split(',')
const typingSpeed = 100
const pauseTime = 2000
let count = 0

function typeWord(word) {
   let typeCount = 0

   const typeInterval = setInterval(() => {
       if (typeCount <= word.length) {
           textElement.innerHTML = word.slice(0, typeCount) + '<span class="cursor">|</span>'
           typeCount ++
       } else {
           clearInterval(typeInterval)
           setTimeout(() => {
               typeWord(nextWord())
           }, pauseTime)
       }

   }, typingSpeed)
}

function nextWord() {
   count ++
   return words[count % words.length]
}

typeWord(nextWord())
