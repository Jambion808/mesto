import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(selectorPopup){
        super(selectorPopup)
        this._photo = this._popup.querySelector('.popup__image-photo');
        this._title = this._popup.querySelector('.popup__image-description')
    }

    open({name, link}){
        this._photo.src = link;
        this._photo.alt = name;
        this._title.textContent = name;

        super.open();
    }
}