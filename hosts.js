// PRODUCTION 
//...
//DEVELOPMENT
const eleicoes_seguras = '192.168.3.2:8080'; //Eleições Seguras
const ango_restapi = '192.168.3.2:8081'; //Rest API 
const ango_realtime = '192.168.3.2:8082'; //Realtime API 
const melhor_preco = '192.168.3.2:8083'; //Melhor Preço 
const ango_denuncia = '192.168.3.2:8084'; //Ango Denúncia 
const ango_db_server = 'localhost'; //DB server - 192.168.3.2
const ango_db_port = 3306; //DB port
const eleicoes_seguras_db = 'eleicoes_seguras'; //DB eleicoes_seguras
const melhor_preco_db = 'melhor_preco'; //DB melhor_preco
const ango_denuncia_db = 'ango_denuncia'; //DB ango_denuncia
const db_user = 'angosoftwares'; //DB user  
const db_user_password = '1234'; //DB user password
const git = 'https://github.com/mafone?tab=repositories'; //Git server
const angoMailServer = 'hotmail'; //Mail server
const angoMail = 'angosoftwares@hotmail.com'; //email
const angoMailPassword = 'softwaresangola@2022'; //email password
module.exports = {//Begin exporting all variables
    eleicoes_seguras,
    ango_restapi,
    ango_realtime,
    melhor_preco,
    ango_denuncia,
    ango_db_server,
    ango_db_port,
    eleicoes_seguras_db,
    melhor_preco_db,
    ango_denuncia_db,
    db_user,
    db_user_password,
    git,
    angoMailServer,
    angoMail,
    angoMailPassword
}; //End exporting all variables
