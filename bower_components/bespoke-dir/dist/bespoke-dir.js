/*!
 * bespoke-dir v0.0.0
 * https://github.com/ryanseddon/bespoke-dir
 *
 * Copyright 2013, Ryan Seddon
 * This content is released under the MIT license
 */

(function(bespoke) {

  bespoke.plugins.dir = function(deck) {
    var parent = deck.parent,
        lastSlide = 0;

    parent.classList.add('bespoke-dir-next');

    function direction(dir) {
      var dirClassPrefix = 'bespoke-dir-',
          dirClass = dirClassPrefix+dir,
          oppDirClass = dirClassPrefix+(dir === 'next' ? 'prev' : 'next');

      if(!parent.classList.contains(dirClass)) {
        parent.classList.add(dirClass);
      }

      parent.classList.remove(oppDirClass);
    }

    deck.on('activate', function(e) {
      if(lastSlide > e.index) {
        direction('prev');
      } else {
        direction('next');
      }

      lastSlide = e.index;
    });
  };

}(bespoke));
