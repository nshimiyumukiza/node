export default function TokenResponse (res,statu,msg,token){
    return res.status(statu).json({
       massage:msg,
       token:token
    })

}