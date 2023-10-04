const Component = require('./component.js');

class Text extends Component {
  render(text) {
    this.text = text
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${text}</text>`;
  }
}

module.exports = Text;