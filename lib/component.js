class Component {
    constructor(){  
    }
    setcolor(color) {
        this.color = color
    }
    render(){
        throw new Error('Child class must implement a render() method.');
    }
}
  
  module.exports = Component;
  