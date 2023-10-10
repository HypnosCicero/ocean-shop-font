import axios from 'axios'
import { ElMessageBox, ElMessage } from 'element-plus'
// create an axios instance
const service = axios.create({
    baseURL : process.env.VUE_APP_BASE_API,
    timeout : 5000
})

// request interceptor
service.interceptors.request.use(
    config => {
        // TODO 需要进行使用pinia进行判断是否能拿到cookie
        // do something before request is sent
        alert(config.headers)
        return config
    },
    error => {
        // do something with request error
        console.log(error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
        const code:number = res.code || 200
        if(code !== 200){
            ElMessage({
                message: res.message || 'Error',
                type: 'error',
                duration: 5*1000
            })
            //TODO 需要定义登出的状态码
            if(code === -1){
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