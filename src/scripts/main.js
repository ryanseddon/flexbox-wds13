var flexbox = bespoke.horizontal.from('article', {
  bullets: 'ul:not(.nope) li, .bullet',
  hash: true,
  state: true
});

(function(){
	var zoomedOut = false;
	document.addEventListener('keydown', function(e) {
		console.log(e.which);
		if(e.which === 90 && !zoomedOut) { // z
			zoomedOut = true;
			console.log(flexbox.parent);
			flexbox.parent.classList.add('bespoke-zoomedout');
		} else {
			if(e.which === 90 && zoomedOut) {
				zoomedOut = false;
				console.log(flexbox.parent);
				flexbox.parent.classList.remove('bespoke-zoomedout');
			}
		}
	}, false);
}())