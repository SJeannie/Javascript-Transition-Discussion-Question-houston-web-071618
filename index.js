// $('#save_lincoln').click(function() {
//   let duration = $('#duration').val();
//   saveLincoln(parseInt(duration));
// });

let fadeTarget = document.getElementById('foreground');

let duration = document.getElementById('duration');

document.getElementById('save_lincoln').addEventListener('click', function() {
  saveLincoln(parseInt(duration.value));
});

document.getElementById('kill_lincoln').addEventListener('click', function() {
  fadeTarget.style.opacity = 1;
});

function saveLincoln(duration) {
  if (isNaN(duration)) {
    duration = 5000;
  }
  console.log(duration); // This is when duration

  fadeOutEffect();
  // $('#foreground').fadeOut(interval);

  function fadeOutEffect() {
    console.log('Work!');
    let interval = duration / 10;
    let fadeEffect = setInterval(function() {
      if (!fadeTarget.style.opacity) {
        fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
        fadeTarget.style.opacity -= 0.1;
        console.log(
          `Oh yay, I'm coming back... x${fadeTarget.style.opacity * 10}`
        );
      } else {
        clearInterval(fadeEffect);
      }
    }, interval);
  }
}
