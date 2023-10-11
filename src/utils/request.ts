import axios from 'axios'
import { ElMessageBox, ElMessage } from 'element-plus'
import { userStateStore } from '@/store/userStore';
import { getToken } from './auth';

// create an axios instance
const service = axios.create({
    baseURL : process.env.VUE_APP_BASE_API,
    timeout : 5000
})
const userStore = userStateStore();

// request interceptor
service.interceptors.request.use(
    config => {
        //进行使用userStore拿到cookie
        // do something before request is sent
        console.log("header is :" + config.headers);
        if (userStore.user.token) {
            config.headers['token'] = getToken();
        }
        return config;
    },
    error => {
        // do something with request error
        console.log("error is :" + error);
        return Promise.reject(error);
    }
)

service.interceptors.response.use (
    response => {
        const res = response.data;
        const code:number = res.code || 200;
        if (code !== 200) {
            ElMessage({
                message: res.message || 'Error',
                type: 'error',
                duration: 5*1000
            })
            //TODO 需要定义登出的状态码 现在的假设为-1
            if (code === -1) {
                ElMessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
                    confirmButtonText: 'Re-Login',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(()=>{
                    //sotre.dispatch('user/resetToken').then(()=>{location.reaload()})
                })
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error)
        ElMessage({
            message: error.message,
            type: 'error',
            duration: 5*1000
        })
        return Promise.reject(error)
    }
)

export default service