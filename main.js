const curriculum = document.getElementById('curriculum')

function toggleCv () {
    curriculum.classList.toggle('active')
    document.body.classList.toggle('active')
}

const jobItems = document.querySelectorAll('.job-item')

setInterval(() => {
    jobItems.forEach(item => {
        item.classList.remove('active')
    })
    jobItems[Math.floor(Math.random() * jobItems.length)].classList.add('active')
}, 1000)
