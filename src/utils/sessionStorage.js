export const getSessionData=(key)=>{
    try{

        let data= JSON.parse(sessionStorage.getItem(key));
        return data
    }catch(err){
return undefined;
    }
}

export const setSessionData=(key,value)=>{
    sessionStorage.setItem(key,JSON.stringify(value));
}
export const removeSessionData=(key)=>{
    sessionStorage.removeItem(key);
}