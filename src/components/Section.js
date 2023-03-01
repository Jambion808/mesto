export default class Section {
    constructor({ renderer}, containerSelector){//items,
        this._container = containerSelector;
        // this._initialArray = items;
        this._renderer = renderer;
        
    };

    addItem(element) {
        this._container.prepend(element)
    };

    // addNewItem(element) {
    //     this._container.append(element)
    // }

    renderItems(items){
        items.reverse().forEach(item =>{
            this._renderer(item)
        })
        };
    
}
