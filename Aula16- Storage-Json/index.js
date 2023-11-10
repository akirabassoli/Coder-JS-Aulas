//armazenar uma informação é utilizado o setItem (fica armazenado até que se crie uma programação para apagar, mesmo desligando o computador ele permanece)
//(chave, valor)
localStorage.setItem('boas-vindas', 'Olá, Coder!')
localStorage.setItem('valido', true)
localStorage.setItem('numero', 20)

// para pegar a informação utilizamos o getItem
//na hora de recuperar ele sempre retorna em string

console.log(localStorage.getItem('boas-vindas'))
console.log(localStorage.getItem('valido'))
console.log(localStorage.getItem('numero'))

//SESSION STORAGE-----------
//armazena a informação somente até o usuário fechar a aba

//funciona da mesma maneiro que o localStorage


//ELIMINAR dados do storage-------------------

localStorage.removeItem('boas-vindas')

//localStorage.clear() // elimina toda informação armazenada



//JSON-------------------
