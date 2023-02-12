export default class UserInfo{
    constructor({nameProfile, infoProfile}){
        this._nameProf = document.querySelector(nameProfile);
        this._infoProf = document.querySelector(infoProfile);
    }

    getUserInfo(){
        return {
            nameProfile: this._nameProf.textContent,
            infoProfile: this._infoProf.textContent,
        }
    }

    setUserInfo(nameProfile, infoProfile){
        this._nameProf.textContent = nameProfile;
        this._infoProf.textContent = infoProfile;
    }
}