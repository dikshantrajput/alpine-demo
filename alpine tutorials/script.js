//throttle

function apiCall(e){
    console.log(e)
x}

let limit = 2500
const betterApiCall = throttle(apiCall,limit,1)

function throttle(func,limit,arg){
    let flag = true
    return function(...args){
        if(flag){
            func(args[0])
            flag = false
            setTimeout(()=>{
                flag = true
            },limit)
        }    
        
    }
}

window.addEventListener('resize',betterApiCall)