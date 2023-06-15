import { useState, useEffect } from "react";
import * as Form from "@radix-ui/react-form";
import "../styles/index.css";
import "../styles/styles.css";
import axios from "axios";

export function Cadastro() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios("https://novoappi.herokuapp.com/usuarios").then((r) => {
      return setUsers(r.data);
    });
  }, []);

  async function sendUser(e) {
    e.preventDefault();
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const login = document.getElementById("login");
    const senha = document.getElementById("senha");

    for (const user of users) {
      if (user.login === login.value) {
        alert(
          "Login já existente na base de dados, por favor escolha um login diferente"
        );
        return; // Sair da função sendUser
      }
    }

    const getData = new FormData(e.target);
    const data = Object.fromEntries(getData);

    axios.post("https://novoappi.herokuapp.com/usuarios", {
      nome: data.nome,
      email: data.email,
      login: data.login,
      senha: data.senha,
    });

    nome.value = "";
    email.value = "";
    login.value = "";
    senha.value = "";
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-black/40 flex items-center justify-center">
      <Form.Root
        onSubmit={sendUser}
        className="relative w-[43vw] h-[65vh] rounded-md bg-zinc-300 border-slate-500 border-[1px] overflow-hidden"
      >
        <h1 className="w-[43vw] h-[6vh] font-[roboto] font-bold [letter-spacing:2px] rounded-t-md text-[22px] bg-slate-400 flex items-center justify-center">
          <p>Cadastro</p>
        </h1>
        <Form.FormField
          name="nome"
          className="w-[43vw] flex flex-col items-center justify-center mt-5"
        >
          <div className="relative w-[40vw] h-8 flex items-center">
            <Form.Label className="FormLabel text-[17px] font-[roboto]">
              Nome
            </Form.Label>
            <Form.Message
              className="FormMessage absolute right-0 text-[12px] text-red-500"
              match="valueMissing"
            >
              Digite o seu nome
            </Form.Message>
          </div>
          <Form.Control asChild className="w-[40vw] h-7 rounded-md">
            <input type="text" id="nome" name="nome" className="" required />
          </Form.Control>
        </Form.FormField>

        <Form.FormField
          name="email"
          className="w-[43vw] flex flex-col items-center justify-center mt-5"
        >
          <div className="relative w-[40vw] h-8 flex items-center">
            <Form.Label className="FormLabel text-[17px] font-[roboto]">
              E-mail
            </Form.Label>
            <Form.Message
              className="FormMessage absolute right-0 text-[12px] text-red-500"
              match="valueMissing"
            >
              Por favor digite o e-mail
            </Form.Message>
            <Form.Message
              className="FormMessage absolute right-0 text-[12px] text-red-500"
              match="typeMismatch"
            >
              E-mail inválido
            </Form.Message>
          </div>
          <Form.Control asChild className="w-[40vw] h-7 rounded-md">
            <input type="email" id="email" name="email" className="" required />
          </Form.Control>
        </Form.FormField>

        <Form.FormField
          name="login"
          className="w-[43vw] flex flex-col items-center justify-center mt-5"
        >
          <div className="relative w-[40vw] h-8 flex items-center">
            <Form.Label className="FormLabel text-[17px] font-[roboto]">
              Login
            </Form.Label>
            <Form.Message
              className="FormMessage absolute right-0 text-[12px] text-red-500"
              match="valueMissing"
            >
              Preencha seu login
            </Form.Message>
          </div>
          <Form.Control asChild className="w-[40vw] h-7 rounded-md">
            <input type="login" id="login" name="login" className="" required />
          </Form.Control>
        </Form.FormField>
        <Form.FormField
          name="senha"
          className="w-[43vw] flex flex-col items-center justify-center mt-5"
        >
          <div className="relative w-[40vw] h-8 flex items-center">
            <Form.Label className="FormLabel text-[17px] font-[roboto]">
              Senha
            </Form.Label>
            <Form.Message
              className="FormMessage absolute right-0 text-[12px] text-red-500"
              match="valueMissing"
            >
              Por favor digite sua senha
            </Form.Message>
          </div>
          <Form.Control asChild className="w-[40vw] h-7 rounded-md">
            <input
              type="password"
              id="senha"
              name="senha"
              className=""
              required
            />
          </Form.Control>
        </Form.FormField>

        <Form.FormSubmit>
          <button className="absolute w-[270px] h-[45px] text-[17px] [letter-spacing:1px] font-[roboto] font-black rounded-md bottom-[11%] left-[50%] translate-x-[-50%] bg-slate-400 hover:bg-slate-500 [transition:1s] tall:bottom-[2%] tall:w-[170px] tall:h-[25px]">
            Cadastrar
          </button>
        </Form.FormSubmit>
      </Form.Root>
    </div>
  );
}
