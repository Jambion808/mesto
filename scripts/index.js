let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let profileEditButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let popupName = document.querySelector('.popup__name');
let popupDescriprion = document.querySelector('.popup__description');
let popupSubmit = document.querySelector('.popup__submit');
let popupClose = document.querySelector('.popup__close');

function openPopup(event) {
    event.preventDefault();
    popup.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupDescriprion.value = profileDescription.textContent;
}
profileEditButton.addEventListener('click', openPopup);

function closePopup(event) {
    popup.classList.remove('popup_opened');
}
popupClose.addEventListener('click', closePopup);

function saveSubmit(event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileDescription.textContent = popupDescriprion.value;
    closePopup();
}
popupSubmit.addEventListener('click', saveSubmit);






// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
 // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
