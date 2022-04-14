let is_ok = true;

const customFetch = (time, task) => {
    return new Promise ((resolve,reject) => {
        if (is_ok){
            setTimeout(() => {
            resolve (task);
        }, time);
        }else {
            reject ('ko');
        }
    });
}

export default customFetch;