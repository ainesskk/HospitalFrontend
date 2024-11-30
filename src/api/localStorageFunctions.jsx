//Функция сохранения токена пользователя в локальное хранилище.
export function setLsToken(token){
    localStorage.setItem('token', token);
}

//Функция получения токена пользователя из локального хранилища.
export function getLsToken(){
    return localStorage.getItem('token');
}

//Функция сохранения пользовательских данных в локальное хранилище.
export function setLsUserData(userData){

}