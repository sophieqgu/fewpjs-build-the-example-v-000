// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMEventLoaded', () => {
  const likes = document.getElementByClassName('like');
  for (const like in likes) {
    like.addEventListener('click', function()) {
      mimicServerCall()
      .then()
    }
  }
})




function mimicServerCall() {
  fetch('')
  .then(response => response.json())
  .then(json => {
    if () {
      event.target.addClass(activated-heart);
    } else {
      event.target.removeClass(activated-heart);
    }
  })
  .catch(error => {
    const modal = document.getElementById('modal');
    modal.removeClass('hidden');
    modal.innerText = error.message;
    setTimeout(() => modal.addClass('hidden'), 5000);
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
