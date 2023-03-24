const Button = document.getElementById('Entrar')


function Verific(){
    const Usuario = document.getElementById('usuario')
    const LabelUsuario = document.getElementById('Labelusuario')
    
    const Senha = document.getElementById('senha')
    const LabelSenha = document.getElementById('Labelsenha')
    
    let ListaUser = []
    let ListaValid = {
        Nome: '',
        Usuario: '',
        Senha: ''
    }

    ListaUser = JSON.parse(localStorage.getItem('ListaUsuario'))
    
    ListaUser.forEach((item) => {
        if(Usuario.value == item.Usuario && Senha.value == item.Senha){
            ListaValid = {
                Nome: item.Nome,
                Usuario: item.Usuario,
                Senha: item.Senha
            }
        }
    });

    if(Usuario.value == ListaValid.Usuario && Usuario.value !== '' && Senha.value == ListaValid.Senha && Senha.value !== ''){
        LabelUsuario.setAttribute('style', 'color: green')
        Usuario.setAttribute('style', 'border-color: green')
        LabelSenha.setAttribute('style', 'color: green')
        Senha.setAttribute('style', 'border-color: green')
        document.getElementById('Saved').setAttribute('style', 'display: block')
        document.getElementById('error').setAttribute('style', 'display: none')
    
        setTimeout(() => {
            window.location.href = "https://gustavolopesdev.github.io/PortFolio/"
        }, 3000);

    }else{
        LabelUsuario.setAttribute('style', 'color: red')
        Usuario.setAttribute('style', 'border-color: red')
        LabelSenha.setAttribute('style', 'color: red')
        Senha.setAttribute('style', 'border-color: red')
        document.getElementById('Saved').setAttribute('style', 'display: none')
        document.getElementById('error').setAttribute('style', 'display: block')
        Usuario.focus()
    }


}






Button.addEventListener('click', Verific)