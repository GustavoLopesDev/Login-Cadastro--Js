const Nome = document.getElementById("nome");
const LabelNome = document.getElementById("LabelNome");

const Usuario = document.getElementById("usuario");
const LabelUsuario = document.getElementById("LabelUsuario");

const Senha = document.getElementById("senha");
const LabelSenha = document.getElementById("LabelSenha");

const ConfirmSenha = document.getElementById("ConfirmSenha");
const LabelConfirm = document.getElementById("LabelConfirm");

const MenssageError = document.getElementById("Error");
const MenssageSaved = document.getElementById("Saved");

const Cadastro = document.getElementById("Cadastrar");

Nome.addEventListener('keyup', () => {
    if(Nome.value.length <= 3){
        LabelNome.setAttribute('style', 'color: red')
        Nome.setAttribute('style', 'border-color: red')

    }else{
        LabelNome.setAttribute('style', 'color: green')
        Nome.setAttribute('style', 'border-color: green')
    }
})
Usuario.addEventListener('keyup', () => {
    if(Usuario.value.length <= 3){
        LabelUsuario.setAttribute('style', 'color: red')
        Usuario.setAttribute('style', 'border-color: red')
        
    }else{
        LabelUsuario.setAttribute('style', 'color: green')
        Usuario.setAttribute('style', 'border-color: green')
    }
})

Senha.addEventListener('keyup', () => {
    if(Senha.value.length <= 7 ){
        LabelSenha.setAttribute('style', 'color: red')
        Senha.setAttribute('style', 'border-color: red')
        LabelSenha.innerHTML = 'Senha *Insira no minimo 8 caracteres'
    }else{
        LabelSenha.setAttribute('style', 'color: green')
        Senha.setAttribute('style', 'border-color: green')
        LabelSenha.innerHTML = 'Senha'
    } 
})
ConfirmSenha.addEventListener('keyup', () => {
    if(Senha.value != ConfirmSenha.value){
        LabelConfirm.setAttribute('style', 'color: red')
        ConfirmSenha.setAttribute('style', 'border-color: red')
        LabelConfirm.innerHTML = 'Confirmar Senha *As senhas não conferem'
    }else{
        LabelConfirm.setAttribute('style', 'color: green')
        ConfirmSenha.setAttribute('style', 'border-color: green')
        LabelConfirm.innerHTML = 'Confirmar Senha'
    } 
    
})


function CadastrarUsuario(){
    if(Nome.value !== '' && Usuario.value !== '' && Senha.value !== '' && ConfirmSenha.value !== '' && Senha.value.length >= 7 && Senha.value == ConfirmSenha.value && Usuario.value.length > 3 && Nome.value.length > 3){
        let ListaUsuario = JSON.parse(localStorage.getItem('ListaUsuario')|| '[]')
        
        ListaUsuario.push({
            Nome: Nome.value, 
            Usuario: Usuario.value,
            Senha: Senha.value
        })
        setTimeout(() => {
            window.location.href = "/login.html"
        }, 3000);
        localStorage.setItem('ListaUsuario', JSON.stringify(ListaUsuario))

        MenssageSaved.setAttribute('style', 'display: block')
        MenssageError.setAttribute('style', 'display: none')
    
    }else{
        MenssageError.setAttribute('style', 'display: block')
        MenssageSaved.setAttribute('style', 'display: none')
    }
}
Cadastro.addEventListener('click', CadastrarUsuario)