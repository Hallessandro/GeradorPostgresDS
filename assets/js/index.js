const $ = document.querySelector.bind(document);

document.querySelector("#form-dados").addEventListener("submit", function(event){
    event.preventDefault();
    validaCampos();
});

function popularCampos(){
    populaCampos();
}

function selecionarVersaoJboss(){
    let versao = $("#versaoJboss");    
}

function gerarArquivo(){
    console.log("OK");
}

function populaCampos(){
    let servidor = $("#servidor");
    let porta = $("#porta");

    let bancoAdm = $("#bancoAdm");
    let usrAdm = $("#usrAdm");
    let senhaAdm = $("#senhaAdm");

    let bancoComum = $("#bancoComum");
    let usrComum = $("#usrComum");
    let senhaComum = $("#senhaComum");

    let bancoSigaa = $("#bancoSigaa");
    let usrSigaa = $("#usrSigaa");
    let senhaSigaa = $("#senhaSigaa");

    if(servidor.value === "preprod"){
        porta.value = "25432";
        bancoAdm.value = "preprod_administrativo"
        bancoComum.value = "preprod_comum";
        bancoSigaa.value = "preprod_sigaa";
    }else if(servidor.value === "bdrestauracao"){
        porta.value = "5432";
        bancoAdm.value = ""
        bancoComum.value = "";
        bancoSigaa.value = "";
    }else {
        porta.value = "";
    }

    if(servidor.value === "preprod" || servidor.value === "bdrestauracao"){
        usrAdm.value = "sipac"; 
        senhaAdm.value = "sipac";
        usrComum.value = "comum";
        senhaComum.value = "comum";
        usrSigaa.value = "sigaa";
        senhaSigaa.value = "sigaa";
    }else {
        usrAdm.value = ""; 
        senhaAdm.value = "";
        usrComum.value = "";
        senhaComum.value = "";
        usrSigaa.value = "";
        senhaSigaa.value = "";
    }
}

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

