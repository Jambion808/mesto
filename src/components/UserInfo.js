export default class UserInfo{
    constructor({nameProfile, infoProfile, _id, avatarProfile}){
        this._nameProf = document.querySelector(nameProfile);
        this._infoProf = document.querySelector(infoProfile);
        this._id = _id;
        this._avatar = document.querySelector(avatarProfile);
    }

    getUserInfo(){
       const name = this._nameProf.textContent
       const about = this._infoProf.textContent
        return {name,about}
    }

    setUserInfo(values){
        this._nameProf.textContent = values.name;
        this._infoProf.textContent = values.about;
    }

    setUserAvatar(avatar){
        this._avatar.src = avatar;
    }

    getUserId(){
        return this._id;
    }



}