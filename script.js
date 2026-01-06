const drop = document.querySelector('drop');
const heading = document.querySelector('#heading');
const head = document.querySelector('h1');
const genres = document.querySelectorAll('.genres');


drop.addEventListener('mouseover', () =>{
    genres.forEach((genre,t) =>{setTimeout(()=>genre.classList.add('genre'),t*500)})
})