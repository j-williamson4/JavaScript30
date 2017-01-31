/* get our elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const expand = player.querySelector('.player__fsbutton');

// build out functions
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);    
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;    
}

function blowup() {
    if(video.requestFullScreen) {
    video.requestFullScreen();
  } else if(video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if(video.webkitRequestFullScreen) {
    video.webkitRequestFullScreen();
  }
}


// play or pause on a click
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);
// changes icon for play/pause
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// skip a timed range when clicked
skipButtons.forEach(button => button.addEventListener('click', skip));
// rapidly adjusts speed or time 
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

expand.addEventListener('click', blowup);