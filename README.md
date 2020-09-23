# Desafio Back-end Mestres da WEB

> Desafio usando Node 

<h3 align="center">
  <img alt="NodeJS Logo" 
    src="https://camo.githubusercontent.com/cd88c471b7792557ac0b208fe9d8d7da19173cb7/68747470733a2f2f61727261796f75746f66696e6465782e66696c65732e776f726470726573732e636f6d2f323031372f30362f6e6f64652e706e67" width="180px"/>
</h3>

<hr/>

## 💡 Sobre o desafio:

https://github.com/Mestres-da-Web/desafio-backend.

## ⚙️ Tecnologias:

- **NodeJS**
- Yarn
- knex
- Sqlite
- Jwt

## ⛏ Ferramentas:

- [Visual Studo Code](https://code.visualstudio.com/download)
- [Insomnia](https://insomnia.rest/download/)

## 🏁 Instruções:

Para executar esse projeto em sua máquina,  

1 - De o clone no repositório:

```bash
$ https://github.com/lucassbarcelos/master-challenge.git
```

2 - Execute esse comando na raiz de seu projeto para puxar as dependências:

```bash
yarn
```

---

3 - É necessario criar uma chave hash para autenticação:

caminho do hash src/config/auth.json

    {

      secrete: (hash)
  
    }

4 - Comando para criar banco 

```bash
knex migrate:latest
```

---

5 - Import workspace to insominia

/docs/Insomnia_master_challenge.json
