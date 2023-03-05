import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(selectorPopup, handleSubmitForm){
        super(selectorPopup);
        this._form = this._popup.querySelector(".popup__form");
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._button = this._form.querySelector('.popup__submit');
        this._submitButtonText = this._button.textContent;
        this._handleSubmitForm = handleSubmitForm;
        console.log(this._handleSubmitForm)
    }

    _getInputValues(){
        const data = {};
        this._inputList.forEach(input =>{
            data[input.name] = input.value
        });
        return data;
    }
    

    close(){
        this._form.reset();
        super.close();
    }

    setInput(data){
        this._inputList.forEach(input =>{
            input.value = data[input.name]
        })
    }

    renderLoading(isLoading, buttonText="Сохранение..."){
        if (isLoading){
            this._button.textContent = buttonText;
        }else {
            this._button.textContent = this._submitButtonText;
        }
    }


    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt)=> {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
        })
    }
    
}