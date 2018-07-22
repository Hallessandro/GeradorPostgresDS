const $ = document.querySelector.bind(document);

function validaCampos(){
    let versao = $("#versaoJboss");    
    let cliente = $("#cliente");
    let servidor = $("#servidor");
    let erros = [];
    if(!versao.value || versao.value === "0"){
        erros.push("Jboss: Campo obrigatório não informado!");
    }
    if(!cliente.value){
        erros.push("Cliente: Campo obrigatório não informado")
    }
    if(!servidor.value || servidor.value === "selecione"){
        erros.push("Servidor: Campo obrigatório não informado!")
    }
    if(erros.length > 0){
        len = erros.length;
        resultado = "<ul class='alert alert-danger'>";
        for (i = 0; i < len; i++) {
            resultado += "<li>" + erros[i] + "</li>";
        }
        resultado += "</ul>";
        document.getElementById("erros").innerHTML = resultado;
    }
}