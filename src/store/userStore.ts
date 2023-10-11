import { reactive } from "vue";
import { getToken,setToken,removeToken } from "../utils/auth";
import { defineStore } from "pinia";


export const userStateStore = defineStore('userStateStore',()=>{
    const user=reactive({
        token : getToken(),
        name : '',
        avatar : '',
    });

    function login(userInfo:any) {
        let userName = userInfo.userName;
        let password = userInfo.password;
        //TODO apiLogin 下面的值都是从里里面获得的
        user.token = userInfo.token;
        user.name = userInfo.name;
        user.avatar = userInfo.avatar;
        if(user.token === undefined){
            return;
        }
        setToken(user.token);
    }
    
    function logout(){
        user.token = '';
        user.name = '';
        user.avatar = '';
        removeToken();
    }
    
    function getUserToken(): string | undefined {
        return user.token;
    }
    return {user,login,logout,getUserToken};
})