export default function SuccesseMessage (res,statu,msg,data){
    return res.status(statu).json({
       massage:msg,
       datas:data
    })

}