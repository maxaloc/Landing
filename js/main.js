var Tone = require('tone');
var synth = new Tone.Synth().toMaster();

var namer = require('color-namer');
var maxMenuWidth = -1510;
var minMenuWidth = -2920;


for (var i = 0; i < 10; i++) {
  var n = "8n";
  var r = Math.floor(Math.random() * (255 - 0));
  var g = Math.floor(Math.random() * (255 - 0));
  var b = Math.floor(Math.random() * (255 - 0));
  var color = 'rgb('+r+','+g+','+b+')';
  var parent = document.getElementById('colors');
  var frequency =   Math.round(120+(r+g*16+b*256)/100);

  var element = document.createElement('div');
  element.className = 'color';
  element.style.background = color;
  parent.appendChild(element);
  element.frequency = frequency;

  element.addEventListener('click', function(frequency){
      synth.triggerAttackRelease(this.frequency, "8n" );
  })
}

$('.tabName').each(function() {
  var menuWidth = $(this).outerWidth();
  maxMenuWidth = maxMenuWidth + menuWidth;
   var menuWidth = $(this).outerWidth();
  minMenuWidth = minMenuWidth + menuWidth;
});

$("#TabLabels").draggable({
  axis: "x",
  cursor: "move",
  drag: function(event, ui) {
    var leftPosition = ui.position.left;
    var rightPosition = ui.position.left;

    if (leftPosition > maxMenuWidth) {
      ui.position.left = maxMenuWidth;
    }

    if (leftPosition < minMenuWidth ) {
      ui.position.left = minMenuWidth;
    }
  }
});

$.fn.nextOrFirst = function(selector) {
    var next = this.next(selector);
    return (next.length) ? next : this.prevAll(selector).last();
}

  $(function() {
    $('.help div:eq(0)').addClass("active");
    $('.help div:gt(0)').hide();
    $('.help-text div:eq(0)').addClass("yes");
    setInterval(function() {
        $('.active:eq(0)').fadeOut( 1000 ).removeClass("active").nextOrFirst('div').addClass("active").fadeIn( 1000 ).end()
        $('.yes:eq(0)').removeClass("yes").nextOrFirst('div').addClass("yes").end()
    }, 4000);
});
