import express from "express";

const host = "0.0.0.0";
const port = 3000;
var listaUsuarios = [];

const app = express();
app.use(express.urlencoded({extended: true}));

app.get("/", (requisicao, resposta) =>{
  resposta.send(`
     <html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Pagina inicial do site</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Menu do site</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="/cadastroUsuarios">Cadastrar Usuário</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
</html>
    
    
    `);
    resposta.end();
});

app.get("/cadastroUsuarios", (requisicao, resposta) => {

    resposta.send(`
        
         <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Pagina inicial do site</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
        </head>
        <body> 
            <div class="container w-75 mb-5 m5-5">
                <form  method="POST" action="/cadastroUsuarios" class="row g-3 border p-2">
                <fieldset>
                 <legend class="text-center">Cadastros de Usuarios</legend>
                </fieldset>

                <div class="col-md-4">
                    <label for="nome"  class="form-label">Nome</label>
                    <input type="text" class="form-control is-valid" id="nome" name="nome" value="" required>
                    <div class="valid-feedback">
                    
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="sobrenome" class="form-label">Sobrenome</label>
                    <input type="text" class="form-control is-valid" id="sobrenome" sobrenome="sobrenome" value="" required>
                    <div class="valid-feedback">
                    
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="E-mail" class="form-label">E-mail</label>
                    <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend3">@</span>
                    <input type="text" class="form-control is-invalid" id="email" email="email" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
                    <div id="validationServerUsernameFeedback" class="invalid-feedback">
                    
                    </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="cidade" class="form-label">Cidade</label>
                    <input type="text" class="form-control is-invalid" id="cidade" aria-describedby="validationServer03Feedback" name="cidade" required>
                    <div id="validationServer03Feedback" class="invalid-feedback">
                    
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="estado" class="form-label">Estado</label>
                    <select class="form-select is-invalid" id="estado" name="estado" aria-describedby="validationServer04Feedback" required>
                    <option value="" selected>Selecione um estado</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="BA">Bahia</option>
                    <option value="RS">Rio Grande do Sul</option> <option value="" selected>Selecione um estado</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="BA">Bahia</option>
                    <option value="RS">Rio Grande do Sul</option>
                    </select>
                    <div id="validationServer04Feedback" class="invalid-feedback">
                
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="cep" class="form-label">CEP</label>
                    <input type="text" class="form-control is-invalid" id="cep" name="cep" aria-describedby="validationServer05Feedback" required>
                    <div id="validationServer05Feedback" class="invalid-feedback">
                    </div>
                </div>
                
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Cadastra Usuario</button>
                    <a class"btn-secondary" href=/">Voltar</a>
                </div>
                </form>
         </div>
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
        </html>
        
        `);
        resposta.end();
});

app.post("/cadastroUsuarios", (requisicao, resposta) => {

                            const nome = requisicao.body.nome;
                            const sobrenome = requisicao.body.sobrenome;
                            const email = requisicao.body.email;
                            const cep = requisicao.body.cep;
                            const cidade = requisicao.body.cidade;
                            const estado = requisicao.body.estado;

                            if(nome && sobrenome && e-mail && cidade && estado && cep){
                                listaUsuarios.push({
                                    nome: nome,
                                    sobrenome: sobrenome,
                                    email: email,
                                    cep: cep,
                                    cidade: cidade,
                                    estado: estado,

                            });
                         
                            resposta.redirect('/listaUsuarios');
                            }
                         
            else{

             let conteudo = `
                
                <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <title>Pagina inicial do site</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                </head>
                <body> 
                    <div class="container w-75 mb-5 m5-5">
                        <form  method="POST" action="/cadastroUsuarios" class="row g-3 border p-2">
                        <fieldset>
                        <legend class="text-center">Cadastros de Usuarios</legend>
                        </fieldset>

                        <div class="col-md-4"> `;
                        if(!nome){
                            conteudo = conteudo + `  
                            <label for="nome"  class="form-label">Nome</label>
                            <input type="text" class="form-control is-valid" id="validationServer01" name="nome" " required>
                            <span class="invalid-feedback">Campo obrigatório</span>;`
                        }
                        else{
                                conteudo = conteudo + `
                                <label for="nome"  class="form-label">Nome</label>
                                <input type="text" class="form-control is-valid" id="validationServer01" name="nome" value="${nome}" required>
                                 `
                            }
                            conteudo = conteudo +`</div>
                            <div class="col-md-4">`;
                              if(!sobrenome){
                                 conteudo = conteudo + `<label for="sobrenome" class="form-label">Sobrenome</label>
                                <input type="text" class="form-control is-valid" id="sobrenome" sobrenome="sobrenome" required>
                                <div class="valid-feedback">
                                <span class="invalid-feedback">Campo obrigatório</span>;`
                            }
                                else{
                                conteudo = conteudo + `
                                    <label for="Sobrenome" class="form-label">Sobrenome</label>
                                <input type="text" class="form-control is-valid" id="validationServer02" value="${sobrenome}" sobrenome="sobrenome" required>
                                <div class="valid-feedback">
                            
                                ´;
                                }
                            }    
                        `
                            
                            conteudo = conteudo + ` </div>
                        
                             <div class="col-md-4">
                            <label for="E-mail" class="form-label">E-mail</label>
                            <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend3">@</span>
                            <input type="text" class="form-control is-invalid" id="validationServerUsername" email="email" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
                            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            
                            </div>
                            </div>
                            </div>
                            <div class="col-md-6">
                            <label for="cidade" class="form-label">Cidade</label>
                            <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" name="cidade" value"${cidade}" required>
                            <div id="validationServer03Feedback" class="invalid-feedback">
                            
                            </div>
                            </div>
                            <div class="col-md-3">
                            <label for="estado" class="form-label">Estado</label>
                            <select class="form-select is-invalid" id="validationServer04" name="estado" aria-describedby="validationServer04Feedback" required>
                            <option value="" selected>Selecione um estado</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="BA">Bahia</option>
                            <option value="RS">Rio Grande do Sul</option> <option value="" selected>Selecione um estado</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="BA">Bahia</option>
                            <option value="RS">Rio Grande do Sul</option>
                            </select>
                            <div id="validationServer04Feedback" class="invalid-feedback">
                        
                            </div>
                            </div>
                            <div class="col-md-3">
                            <label for="cep" class="form-label">CEP</label>
                            <input type="text" class="form-control is-invalid" id="validationServer05" name="cep" aria-describedby="validationServer05Feedback" value"${cep}" required>
                            <div id="validationServer05Feedback" class="invalid-feedback">
                            </div>
                            </div>
                        
                           <div class="col-12">
                            <button class="btn btn-primary" border type="submit">Cadastra Usuario</button>
                            <a class"btn-secondary" href=/">Voltar</a>
                        </div>
                        </form>
                </div>
                </body>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
                </html>
                
                `;
            resposta.send(conteudo);
            resposta.end();
            }
       
         };
        }); 

app.get("/listaUsuarios", (requisicao, resposta) => {
   let conteudo=`
     <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Pagina inicial do site</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
        </head>
        <body> 
          <div class="container w-75 mb-5 mt-5">
           <table class="table table-striped" table-hover>
                <thead>
                <tr>
                <th scope "col">Nome </th>
                <th scope "col">Sobrenome </th>
                <th scope "col">E-mail </th>
                <th scope "col">Cidade </th>
                <th scope "col">CEP </th>
                <th scope "col">Estado </th>
                </tr>
                </thead>
                <tbody>`;
              for(let i=0; i < listaUsuarios.length; i++){
                  conteudo = conteudo + `
                   <tr>
                    <td>$(listaUsuarios[i].Nome</td>
                    <td>$(listaUsuarios[i].Sobrenome</td>
                    <td>$(listaUsuarios[i].E-mail</td>
                    <td>$(listaUsuarios[i].Cidade</td>
                    <td>$(listaUsuarios[i].CEP</td>
                    <td>$(listaUsuarios[i].Estado</td>
                   </tr> 
                    `;

              }

  conteudo =  conteudo + `  </tbody>
            </table>
            <a class="btn btn-secundary" href"/cadastroUsuarios">Continuar cadastrando</a>
          </div>
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
        </html>  
    resposta.send(conetudo);

   resposta.end();
 `});

 app.listen(port, host, ()=>{
 console.log('servidor rodando em http://${host}:${port}/');

 });