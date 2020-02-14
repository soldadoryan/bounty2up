# Bounty 2 Up - Freela Task Internet

Controle de tarefas deve ser inspirado na aplicação Wrike;

## Funcionalidades

+ Crud de cargo;
+ Crud de setor;
+ Crud de usuários;
+ Login;
+ Quadro de tarefas por setor;
+ Crud de categoria de tarefas;
+ Crud de tarefas;
+ Crud de estados de tarefas por quadro;
+ Crud de produtos em loja;
+ Resgatar produto;


## Models 

**empresas**

+ id;
+ nome;


**cargo**

+ id;
+ nome;
+ gerenciar_economia;
+ gerenciar_loja;
+ gerenciar_usuarios;
+ gerenciar_tarefas;
+ gerenciar_permissoes;
+ gerenciar_setores;
+ gerenciar_cargos;
+ gerenciar_listas;


**setores**
+ id;
+ nome;


**categoria_tarefa**
+ id;
+ nome;
+ pontuacao;

**estados_tarefa**
+ id;
+ nome;
+ isPontuado;


**usuarios**

+ id;
+ nome;
+ email;
+ senha;
+ points;
+ id_empresa;


**tarefas**

+ id;
+ titulo;
+ descricao;
+ id_categoria;
+ id_estado_tarefa;
+ id_setor;
+ data_entrega;


**usuarios_tarefas**

+ id;
+ id_usuario;
+ id_tarefa;


**usuarios_cargos**

+ id;
+ id_usuario;
+ id_cargo;


**usuarios_setores**

+ id;
+ id_usuario;
+ id_cargo;



