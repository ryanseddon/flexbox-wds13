var flexbox = bespoke.horizontal.from('article', {
  bullets: 'ul:not(.nope) li, .bullet',
  hash: true,
  state: true,
  dir: true
});

(function(){

	var btn = document.querySelector('.button'),
		h1 = document.querySelector('.flex-foo');

	btn.addEventListener('click', function(){
		h1.classList.toggle('flex-mania');
	}, false);

}());
