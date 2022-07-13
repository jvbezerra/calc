var math = {
	'+': (a, b) => (Number(a) + Number(b)).toString(),
	'-': (a, b) => (Number(a) - Number(b)).toString(),
	'x': (a, b) => (Number(a) * Number(b)).toString(),
	'/': (a, b) => (Number(a) / Number(b)).toString(),
}

var state = { prev: '', main: '', op: '' }

var actions = {
  'num': function(payload) {
    if (state.main == '0') state.main = payload
    else state.main = state.main+payload
  },
  'op': function(payload) {
    const { prev, main, op } = state
    if (!main) return;
    if (op && prev) {
      state.prev = math[op](prev, main)
      return;
    }

    state = { prev: main, main: '0', op: payload }
  },
  'act': function(payload) {
    const { prev, main, op } = state
    switch (payload) {
      case 'reset':
        state = { prev: '', main: '0', op: '' }
        break;
      case 'del':
        if (main !== '0') state.main = main.slice(0, -1)
        if (main.length == 1) state.main = '0'
        break;
      case '=':
        if (prev && main && op) {
          state = { prev: '', main: math[op](prev, main), op: '' }
        }
        break;
      default:
        break;
    }
  }
}

function press(value, type) {
  var previous = document.getElementById('previousDisplay')
  var display = document.getElementById('mainDisplay')
  actions[type](value)
  previous.innerText = state.prev
  display.innerText = state.main
}