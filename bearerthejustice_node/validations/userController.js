function userName(value){
    if(value.length <= 0) throw 'O campo nome ou sobrenome está vazio!'
    if(!/[a-zA-Z]/.test(value)) throw 'Por favor, apenas letras no nome ou sobrenome!'
    if(value.length < 3) throw 'Por favor, nome ou sobrenome precisar ter mais de 3 caracter!'
};

function userEmail(value){
    if(value.length <= 0) throw 'O campo e-mail está vazio!'
    if(!/[@]/.test(value)) throw 'Por favor, formato errado. Exemplo: rafael@gmail.com.'
    if(value.length < 5) throw 'Por favor, e-mail precisar ter mais de 5 caracter!'
};

function userPassword(value){
    if(value.length <= 0) throw 'O campo senha está vazio!'
    if(!/[a-z]/.test(value)) throw 'Por favor, senha tem que ter letras!'
    if(!/[A-Z]/.test(value)) throw 'Por favor, senha tem que ter uma letra MAIUSCULA!'
    if(!/[0-9]/.test(value)) throw 'Por favor, senha tem que ter números!'
    if(!/[@!#$%¨&*()]/.test(value)) throw 'Por favor, senha precisa de um caracter especial!'
    if(value.length < 6) throw 'Por favor, senha precisar ter mais de 6 caracter!'
}

function iqualOrError(value, value2){
    if(value != value2) throw 'Senhas não se combinam!'
}

module.exports = { userName, userEmail, userPassword, iqualOrError }