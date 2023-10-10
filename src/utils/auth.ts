import Cookies from 'js-cookie'

const TokenKey:string = 'vue_admin_template_token';

export function getToken() {
    return Cookies.get(TokenKey);
}

// this is return the cookie value
export function setToken(token:string){
    return Cookies.set(TokenKey,token);
}

export function removeToken(){
    Cookies.remove(TokenKey)
}