
import axios from 'axios'
export default function ajax(url,data={},type='GET'){
    return new Promise(function (resolve,reject) {
        let promise
            // 准备 url query 参数数据
        if(type==='get'){
            let dataStr = '' // 数据拼接字符串，将data连接到url
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            promise=axios.get(url)
        }else{
            promise=axios.post(url,data)
        }
        promise.then(function (res) {
            resolve(res.data)
        }).catch(function (err) {
            reject(err)
        })
        }
    )
    


}