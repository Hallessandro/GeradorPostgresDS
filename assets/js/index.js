var fs = require('fs');
var path = require("path");
var app = require('electron').remote; 
var dialog = app.dialog;

const $ = document.querySelector.bind(document);
const CAMINHO_JBOSS_5 = "";
const CAMINHO_JBOSS_4 = "";
var caminho_final = "";

document.querySelector("#form-dados").addEventListener("submit", function(event){
    event.preventDefault();
    let val = validaCampos();
    if(val){
        let bancoAdm = $("#bancoAdm");
        let usrAdm = $("#usrAdm");
        let senhaAdm = $("#senhaAdm");

        let bancoComum = $("#bancoComum");
        let usrComum = $("#usrComum");
        let senhaComum = $("#senhaComum");

        let bancoSigaa = $("#bancoSigaa");
        let usrSigaa = $("#usrSigaa");
        let senhaSigaa = $("#senhaSigaa");        

        let servidor = $("#servidor");
        let serverName = "";
        if(servidor.value === "preprod"){
            let cliente = $("#cliente");
            serverName = cliente.value; 
        }else if (servidor.value === "bdrestauracao"){
            serverName = "bdrestauracao";
        }
        let porta = $("#porta");
        let pastaJboss = $("#pasta-jboss");

        let resultado = montarArquivo(bancoAdm.value, usrAdm.value, senhaAdm.value, bancoSigaa.value, usrSigaa.value, senhaSigaa.value, 
                bancoComum.value, usrComum.value, senhaComum.value, serverName.toLowerCase(), porta.value, cliente.value.toLowerCase());
        console.log(resultado);
        gerarArquivo(resultado);
    }
});

function onChangePasta(){
    let pastaJboss = $("#pasta-jboss");
    console.log(pastaJboss.files[0].path);
    let inputJboss = $("#inputJboss");
    inputJboss.value = pastaJboss.files[0].path;
}

function popularCampos(){
    populaCampos();
}

function selecionarVersaoJboss(){
    let versao = $("#versaoJboss");    
    if(versao.value === "4"){
      caminho_final = CAMINHO_JBOSS_4 + "teste";
    }else {
        caminho_final = CAMINHO_JBOSS_5 + "teste";
    }
}

function gerarArquivo(conteudo){
    filename = 'teste.xml';
    // You can obviously give a direct path without use the dialog (C:/Program Files/path/myfileexample.txt)
    dialog.showSaveDialog((fileName) => {
        if (fileName === undefined){
            console.log("You didn't save the file");
            return;
        }

        // fileName is a string that contains the path and filename created in the save file dialog.  
        fs.writeFile(fileName, conteudo, (err) => {
            if(err){
                alert("Deu ruim: "+ err.message)
            }
                        
            alert("O arquivo foi salvo com sucesso!");
        });
    }); 
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

    let cliente = $("#cliente");

    if(servidor.value === "preprod"){
        porta.value = "15432";
        bancoAdm.value = "preprod_administrativo"
        bancoComum.value = "preprod_sistemas_comum";
        bancoSigaa.value = "preprod_sigaa";
        if(cliente.value){
            serverName.value = cliente.value.toUpperCase();
        }else {
            serverName.value = "";
        }
    }else if(servidor.value === "bdrestauracao"){
        porta.value = "5432";
        bancoAdm.value = cliente.value.toLowerCase() + "_administrativo_2018";
        bancoComum.value = cliente.value.toLowerCase() + "_sistemas_comum_2018";
        bancoSigaa.value = cliente.value.toLowerCase() + "_sigaa_2018";
        serverName.value = "bdrestauracao";
    }else {
        porta.value = "";
        bancoAdm.value = ""
        bancoComum.value = "";
        bancoSigaa.value = "";
    }

    if(servidor.value === "preprod" || servidor.value === "bdrestauracao"){
        usrAdm.value = "sipac"; 
        senhaAdm.value = "sipac";
        usrComum.value = "comum_user";
        senhaComum.value = "comum_user";
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
    let cliente = $("#cliente");
    let servidor = $("#servidor");    
    let erros = [];
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
        return false;
    }else{
        return true;
    }
}

