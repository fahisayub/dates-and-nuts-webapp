
export const getData=(key)=>{
    try{

        let data= JSON.parse(localStorage.getItem(key));
        return data
    }catch(err){
return undefined;
    }
}

export const setData=(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value));
}