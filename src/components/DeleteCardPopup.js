import Popup from "./Popup.js";

export default class DeleteCardPopup extends Popup {
  constructor(selectorPopup, submitHandlerDeleteCard) {
    super(selectorPopup);
    this._submitHandlerDeleteCard = submitHandlerDeleteCard.bind(this);
    this._form = this._popup.querySelector(".popup__form");
    // this._submitButton = this._form.querySelector(".popup__submit");
    
  }

  open(card, cardId) {
    super.open();
    this._card = card;
    this._cardId = cardId;
  }

  setEventListeners(){
    this._popup.addEventListener('submit', (e) => {
      e.preventDefault();
      this._submitHandlerDeleteCard(this._card);
      // super.close();
    })

    super.setEventListeners();
  }

}
