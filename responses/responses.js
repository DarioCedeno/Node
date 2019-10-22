const successMessaje = (res, statusCode,messaje,body)=>{
    res.status(statusCode).json({
        status:statusCode,
        messaje:messaje,
        body:body,
        error:[]
    })
}

const errorMessaje= (res,statusCode,message,body)=>{
    res.status(statusCode).json({
        status:statusCode,
        message:message,
        body: [],
        error:body
    })
}
module.exports= {successMessaje,errorMessaje}