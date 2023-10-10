import { ref, computed,reactive } from "vue";
import { getToken,setToken,removeToken } from "../utils/auth";
import { defineStore } from "pinia";



export const userCounterStore = defineStore('userStore',()=>{
    const user=reactive({
        token : '',
        name : '',
        avatar : '',
    })

    function login(userInfo:any){
        let userName = userInfo.userName;
        let password = userInfo.password;
        //TODO apiLogin 下面的值都是从里里面获得的
        user.token = userInfo.token;
        user.name = userInfo.name;
        user.avatar = userInfo.avatar;
        setToken(user.token);
    }
    
    function logout(){
        user.token = '';
        user.name = '';
        user.avatar = '';
        removeToken();
    }
    
})