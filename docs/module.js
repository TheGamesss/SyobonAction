var Module = {
  print: function() {
    text = Array.prototype.slice.call(arguments).join(' ');
    console.log(text);
  },
  printErr: function() {
    text = Array.prototype.slice.call(arguments).join(' ');
    console.error(text);
  },
  canvas: document.getElementById('canvas')
};

var chimeSounds = [];

function LoadSound(index, id) {
  data = document.getElementById(id);
  if (!data) {
    console.error('failed to assign ' + id + ' to ' + index);
    return;
  }
  chimeSounds[index] = new chime.Sound(data.text);
}

function PlaySound(index, channel) {
  if (!chimeSounds[index]) {
    console.error('missing sound: ' + index);
    return;
  }
  if (channel == 0)
    chime.bgm(chimeSounds[index]);
  else
    chime.effect(chimeSounds[index]);
}


(function () {
  LoadSound(0, 'stop');
  LoadSound(1, 'field');
  LoadSound(2, 'dungeon');
  LoadSound(3, 'star4');
  LoadSound(4, 'castle');
  LoadSound(5, 'puyo');
  LoadSound(6, 'jump');
  LoadSound(7, 'brockbreak');
  LoadSound(8, 'brockcoin');
  LoadSound(9, 'humi');
  LoadSound(10, 'koura');
  LoadSound(11, 'dokan');
  LoadSound(12, 'brockkinoko');
  LoadSound(13, 'powerup');
  LoadSound(14, 'kirra');
  LoadSound(15, 'goal');
  LoadSound(16, 'death');
  LoadSound(17, 'Pswitch');
  LoadSound(18, 'jumpBlock');
  LoadSound(19, 'hintBlock');
  LoadSound(20, '4-clear');
  LoadSound(21, 'allclear');
  LoadSound(22, 'tekifire');
})();
