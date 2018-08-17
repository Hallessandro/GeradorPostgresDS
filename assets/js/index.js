const $ = document.querySelector.bind(document);
const { Client } = require('pg');
var fs = require('fs');
var path = require("path");
var app = require('electron').remote; 
var dialog = app.dialog;
const shell = require('electron').shell;
const {BrowserWindow} = require('electron').remote;
var nedb = require('nedb');
var db = new nedb({filename: 'banco.db', autoload: true});

document.querySelector("#form-dados").addEventListener("submit", function(event){
    event.preventDefault();
    let val = validaCampos();
    if(val){
        let resultado = salvarResultado();
        gerarArquivo(resultado);
    }
});

function salvarResultado(){
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
    return resultado; 
}

//Exibe o modal com o resultado em
const btnGerarEmTela = document.getElementById('btn-exibir-em-tela')

btnGerarEmTela.addEventListener('click', (event) => {
  let val = validaCampos();
  if(val){
    let resultado = salvarResultado();
    gerarArquivo(resultado);
  }
  let win = new BrowserWindow({ frame: false })

  win.on('close', () => { win = null })
  win.loadFile("pages/resultadoTela.html")
  win.show()
})

function onChangePasta(){
    let pastaJboss = $("#pasta-jboss");
    console.log(pastaJboss.files[0].path);
    let inputJboss = $("#inputJboss");
    inputJboss.value = pastaJboss.files[0].path;
}

function popularCampos(){
    populaCampos();
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

    let usrAdm = $("#usrAdm");
    let senhaAdm = $("#senhaAdm");
    
    let usrComum = $("#usrComum");
    let senhaComum = $("#senhaComum");
    
    let usrSigaa = $("#usrSigaa");
    let senhaSigaa = $("#senhaSigaa");

    let cliente = $("#cliente");
    
    let _elementoSigaa = $(".input-sigaa");
    let _elementoComum = $(".input-comum");
    let _elementoAdm = $(".input-adm");

    if(servidor.value === "preprod"){
        _elementoAdm.innerHTML = `<input type="text" class="form-control" id="bancoAdm" placeholder="Banco Administrativo">`
        _elementoComum.innerHTML = `<input type="text" class="form-control" id="bancoComum" placeholder="Banco Sigaa">`
        _elementoSigaa.innerHTML = `<input type="text" class="form-control" id="bancoSigaa" placeholder="Banco Sigaa">`

        let bancoAdm = $("#bancoAdm");
        let bancoComum = $("#bancoComum");
        let bancoSigaa = $("#bancoSigaa");
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
        const client = new Client({
            user: 'sipac',
            host: 'bdrestauracao',
            database: 'postgres',
            password: 'sipac',
            port: 5432,
        })
        porta.value = "5432";
        serverName.value = "bdrestauracao";
        var listaAdm = []; 
        var listaSigaa = [];
        var listaComum = [];

        client.connect()
        client.query(`SELECT datname FROM pg_database where datname ilike '${cliente.value}_%' order by datname desc;`)
            .then(res => {
                resultados = res.rows; 
                for (r in resultados){
                    if(resultados[r].datname.includes('administrativo')){
                        listaAdm.push(resultados[r].datname);
                    }else if(resultados[r].datname.includes("sistemas_comum")){
                        listaComum.push(resultados[r].datname);
                    }else if(resultados[r].datname.includes("sigaa")){
                        listaSigaa.push(resultados[r].datname)
                    }
                }
                client.end();

                _elementoSigaa.innerHTML = montaSelect(listaSigaa, 'Sigaa');
                _elementoComum.innerHTML = montaSelect(listaComum, 'Comum');
                _elementoAdm.innerHTML = montaSelect(listaAdm, 'Adm'); 
                
            })
            .catch((err) => { 
                bancoAdm.value = cliente.value.toLowerCase() + "_administrativo_2018";
                client.end();
            });            
            bancoComum.value = cliente.value.toLowerCase() + "_sistemas_comum_2018";
            bancoSigaa.value = cliente.value.toLowerCase() + "_sigaa_2018";
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

function levarParaBlog(){
    shell.openExternal("http://hallessandro.github.io");
}

function montaSelect(lista, banco){
    return `
    <div>
    <select class="form-control" id="banco${banco}">
        <option selected disabled>--SELECIONE--</option>
        ${lista.map(banco => 
        `
        <option value="${banco}">${banco}</option>
        `
        )}
    </select>
    </div>
    `;
}

function carregaServidores(){
    db.find({}, function (err, res) {
        if(err)return console.log(err);        
        geraSelectServidores(res);
    });
}

function geraSelectServidores(lista){
    resultado = `
    <div>
    <select class="form-control" id="servidor" onchange="populaCampos()">
        <option selected disabled>--SELECIONE--</option>
        ${lista.map(res => 
        `
        <option value="${res._id}">${res.servidor}</option>
        `
        )}
    </select>
    </div>
    `;
    document.getElementById("div-server").innerHTML = resultado;
}

carregaServidores();