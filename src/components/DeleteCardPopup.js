import Popup from "./Popup.js";

export default class DeleteCardPopup extends Popup {
  constructor(selectorPopup, submitHandler) {
    super(selectorPopup);
    this._form = this._popup.querySelector(".popup__form");
    this._submitHandler = submitHandler;
    this._submitForm = this._submitForm.bind(this);
    this._submitButton = this._form.querySelector(".popup__submit_delete");
  }

  open(card, cardId) {
    super.open();
    this._card = card;
    this._cardId = cardId;
  }

  _submitForm(e){
    e.preventDefault();
    this._submitHandler(this._card, this._cardId, this._submitButton)
  }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitForm)
  }

  removeEventListener(){
    super.removeEventListener();
    this._form.removeEventListener('submit', this._submitForm)
  }
}
