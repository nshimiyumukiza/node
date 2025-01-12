export default function ErrorMessage (res,statu,msg){
    return res.status(statu).json({
       massage:msg,
    })

}