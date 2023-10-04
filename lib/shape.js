const Component = require('./component.js');

class Triangle extends Component {
    render(){
        return `<polygon points="250,60 100,400 400,400" fill = "${this.color}">`
    }
}
class Circle extends Component{
    render(){
        return `<circle cx="125" cy="125" r="75" fill = "${this.color}">`
    }

}
class Square extends Component{
    render(){
        return `<rect x="90" y= "40" width="150" height = "150" fill = "${this.color}">`
    }

}
module.exports = Triangle
module.exports = Circle
module.exports = Square