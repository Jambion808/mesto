export default class UserInfo{
    constructor({nameProfile, infoProfile}){
        this._nameProf = document.querySelector(nameProfile);
        this._infoProf = document.querySelector(infoProfile);
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


}