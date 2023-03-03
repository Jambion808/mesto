export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getInfoAboutUser() {
    return fetch("https://nomoreparties.co/v1/cohort-60/users/me", {
      headers: this._headers,
    }).then(processResponse);
  }

  getCardsUser() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-60/cards", {
      headers: this._headers,
    }).then(processResponse);
  }

  setInfoAboutUser(name, about) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-60/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(processResponse);
  }

  setAddUserCard(name, link) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-60/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(processResponse);
  }

  setLikes(id) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-60/cards/${id}/likes`,{
        method: "PUT",
        headers: this._headers,
      }
    ).then(processResponse);
  }

  deleteLike(id){
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-60/cards/${id}/likes`,
      {
        method: "DELETE",
        headers: this._headers,
      }
    ).then(processResponse);
  }

  deleteCard(id){
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-60/cards/${id}`,
      {
        method: "DELETE",
        headers: this._headers,
      }
    ).then(processResponse);
  }

  setUserAvatarProfile(data) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-60/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      }),
    }).then(processResponse);
  }


}

const processResponse = (res) => {
  if (res.ok) {
    const response = res.json();
    console.log(response);
    return response;
  }
  return Promise.reject(new Error("Ошибка"));
};
