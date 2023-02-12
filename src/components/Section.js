export default class Section {
    constructor({items, renderer}, containerSelector){
        this._container = containerSelector;
        this._initialArray = items;
        this._renderer = renderer;
        
    };

    addItem (element) {
        this._container.prepend(element)
    };

    renderItems(){
        this._initialArray.forEach(item =>{
            this._renderer(item)
        })
        };
    
}
