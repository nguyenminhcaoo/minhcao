var playVideo = document.querySelector('.container__experience-video-icon-play-js')
var modal = document.querySelector('.modal-js')
var closeModal = document.querySelector('.modal-icon__close-js')
var modalVideoYtb = document.querySelector('.modal-video--ytb')

function showVideoExperience() {
    modal.classList.add('open')
}

function EndShowVideoExperience() {
    modal.classList.remove('open')
}
playVideo.addEventListener('click', showVideoExperience)
closeModal.addEventListener('click', EndShowVideoExperience)
modal.addEventListener('click', EndShowVideoExperience)

modalVideoYtb.addEventListener('click', function(event) {
    // biến even trong function có thể ngăn hành vi mặc định
    event.stopPropagation()
})