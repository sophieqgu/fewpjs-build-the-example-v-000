// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likes = document.getElementByClassName('like');
likes.addEventListener('click', function()) {
  mimicServerCall();
}

function mimicServerCall() {
  fetch('')
  .then(response => response.json())
  .then(json => {})
  .catch(error => {
    const modal = document.getElementById('modal');
    modal.removeClass('hidden');
    modal.innerText = error.message;
    setTimeout(() => modal.addClass('hidden'), )
  })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
