class Api {
  constructor(config) {
    this.url = config.baseUrl;
    this.headers = config.headers;
  }

  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
    }).then(this._parseResponse);
  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
    }).then(this._parseResponse);
  }

  setUserInfo(name, about) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._parseResponse);
  }

  setNewAvatar(avatar) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then(this._parseResponse);
  }

  addNewCard(title, link) {
    return fetch(`${this.url}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: title,
        link: link,
      }),
    }).then(this._parseResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._parseResponse);
  }

  toggleLike(cardId, isLiked) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this.headers,
    }).then(this._parseResponse);
  }
}

const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-21",
  headers: {
    authorization: "d8273a5f-78fb-4b97-a734-1bffa72aa238",
    "Content-Type": "application/json",
  },
};

const api = new Api(config);
export default api;
