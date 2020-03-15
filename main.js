saldoAdmin = 1000
const saldoAdminConst = 1000

//se eu tento mostrar o saldo do Novo Usuário essa parte some e não mostra a do admin
document.getElementById("user1").innerHTML = "Faça suas transações"
document.getElementById("saldo").innerHTML = "Saldo: "+saldoAdmin

function depositar(){
    var dest = document.getElementById("dest").value
    if(dest == "admin"){
       SaldoAdmin = saldoAdmin + parseInt(document.getElementById("deposito").value)
    }else if( dest != "admin"){
     saldoAdmin = saldoAdmin - parseInt(document.getElementById("deposito").value)
        if(saldoAdmin <0){
            saldoAdmin = saldoAdminConst
            alert("Você não tem dinheiro o suficiente para essa transação!")
        }
    }
    return document.getElementById("saldo").innerHTML = `Saldo: ${SaldoAdmin}`
}
//logando com a conta do admin
function logar(){
        var usuario= document.getElementById("name").value
        var senha = document.getElementById("password").value
       
        if(usuario == "admin" && senha == "admin"){
            window.open("file:///C:/Users/Victor/Desktop/Desafio%20TecnoVIX/admin.html")

        }else{
            alert("Usuário ou senha incorreto!")
        }
            
}

//crian do uma nova conta
function criarconta(){
    var novoUsuario = document.getElementById("newname").value
    var novaSenha = document.getElementById("newpassword").value
    var confirmpassword = document.getElementById("confirm-password").value
//confirmando se a senha cadastra sao iguais
        if(novaSenha == confirmpassword){
            window.open("file:///C:/Users/Victor/Desktop/Desafio%20TecnoVIX/newUser.html")
        }else{
            alert("As senhas não conferem")
        }
}



