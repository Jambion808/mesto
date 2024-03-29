export default class Section {
    constructor({ renderer}, containerSelector){
        this._container = containerSelector;
   
        this._renderer = renderer;
        
    };

    addItem(element) {
        this._container.prepend(element)
    };


    renderItems(items){
        items.reverse().forEach(item =>{
            this._renderer(item)
        })
        };
    
}
