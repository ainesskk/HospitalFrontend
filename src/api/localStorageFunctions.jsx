//Функция сохранения токена пользователя в локальное хранилище.
export function setLsToken(token){
    sessionStorage.setItem('token', token);
}

//Функция получения токена пользователя из локального хранилища.
export function getLsToken(){
    return sessionStorage.getItem('token');
}
