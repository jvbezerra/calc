var buttons = [
  { op: '7', class: 'bttn', type: 'num' },
  { op: '8', class: 'bttn', type: 'num' },
  { op: '9', class: 'bttn', type: 'num' },
  { op: 'del', class: 'bttn bttn--secondary', type: 'act' },
  { op: '4', class: 'bttn', type: 'num' },
  { op: '5', class: 'bttn', type: 'num' },
  { op: '6', class: 'bttn', type: 'num' },
  { op: '+', class: 'bttn', type: 'op' },
  { op: '1', class: 'bttn', type: 'num' },
  { op: '2', class: 'bttn', type: 'num' },
  { op: '3', class: 'bttn', type: 'num' },
  { op: '-', class: 'bttn', type: 'op' },
  { op: '.', class: 'bttn', type: 'num' },
  { op: '0', class: 'bttn', type: 'num' },
  { op: '/', class: 'bttn', type: 'op' },
  { op: 'x', class: 'bttn', type: 'op' },
  { op: 'reset', class: 'bttn bttn--secondary', type: 'act' },
  { op: '=', class: 'bttn bttn--detail', type: 'act' },
]

var html = "";
for (var props of buttons) {
  var bttn = `<button class="${props.class}" onclick="press('${props.op}', '${props.type}')">${props.op}</button>`
  html += bttn
}

(function(window, document){
  window.onload = function() {
    document.getElementsByClassName("keyboard")[0].innerHTML = html;
  }
})(window, document);