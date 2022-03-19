const blessed = require('blessed');
const { name } = require('../costants');

const ui = async () => {
    let screen = blessed.screen({
        smartCSR: true
      });

      screen.title = 'my window title';

      let box = blessed.box({
        top: 'center',
        left: 'center',
        width: '50%',
        height: '50%',
        content: 'Hello {bold}world{/bold}!',
        tags: true,
        border: {
          type: 'line'
        },
        style: {
          fg: 'white',
          bg: 'magenta',
          border: {
            fg: '#f0f0f0'
          },
          hover: {
            bg: 'green'
          }
        }
      });

      screen.append(box);

      let icon = blessed.image({
        parent: box,
        top: 0,
        left: 0,
        type: 'overlay',
        width: 'shrink',
        height: 'shrink',
        file: __dirname + '/my-program-icon.png',
        search: false
      });

      box.on('click', function(data) {
        box.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}');
        screen.render();
      });

      box.key('enter', function(ch, key) {
        box.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
        box.setLine(1, 'bar');
        box.insertLine(1, 'foo');
        screen.render();
      });

      screen.key(['escape', 'q', 'C-c'], function(ch, key) {
        return process.exit(0);
      });

      box.focus();

      screen.render();
}

module.exports = { ui };