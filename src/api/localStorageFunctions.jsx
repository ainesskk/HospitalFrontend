//Функция сохранения токена пользователя в локальное хранилище.
export function setLsToken(token){
    sessionStorage.setItem('token', token);
}

//Функция получения токена пользователя из локального хранилища.
export function getLsToken(){
    return sessionStorage.getItem('token');
}

//Функция сохранения роли пользователя.
export function setLsRole(role){
    sessionStorage.setItem('role', role);
}

//Функция получения роли пользователя.
export async function getLsRole(){
    const role= sessionStorage.getItem('role');
    return role;
}
