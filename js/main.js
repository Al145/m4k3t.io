let rating = document.querySelectorAll('.rating');
let ratingItem = document.querySelectorAll('.rating-item');

rating.forEach(el => {
    el.addEventListener('click', (e) => {
        let target = e.target;
        if(target.classList.contains('rating-item')){
            removeClass(ratingItem,'active');
        }
            target.classList.add('active');
    })
});

function removeClass(elements, className) {
  for (let i = 0; i < elements.length; i++) {
     elements[i].classList.remove(className);
  }
}
