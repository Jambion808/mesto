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

  setLikes(is) {
    return fetch(
      "https://mesto.nomoreparties.co/v1/cohort-60/cards/${id}/likes",
      {
        method: "PUT",
        headers: this._headers,
      }
    ).then(processResponse);
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
