


// UUID = Universally unique idenfier

/*
function enviarEmail(para, id, assunto, texto){
    //Bibliote de envio de e-mail

    console.log(para, id, assunto, texto);
}



class EnviarEmailParaUsuario{
    send(){
        enviarEmail("demetrio.vd@hotmail.com", 9899, "Olá!", "Tudo Bem?")
    }
}
*/

interface DadosDeEnvioEmail{
    para: string;
    id: string;
    assunto: string;
    texto: string;
}

function enviarEmail({para, id, assunto, texto}: DadosDeEnvioEmail){
    console.log(para,id,assunto,texto);
    

}
class EnviarEmailParaUsuari{
    send(){
        enviarEmail(
            {
                para:"demetrio.vd@hotmail.com",
                id: "9899",
                assunto: "Olá!",
                texto: "Tudo Bem?"
            
            })
    }
}