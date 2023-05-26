import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";
import { Link } from "react-router-dom";
export function Login() {
  function getData(event) {
    const login = document.getElementById("login");
    const senha = document.getElementById("senha");
    const getData = new FormData(event.target);
    const data = Object.fromEntries(getData);
    console.log(data);
    login.value = "";
    senha.value = "";
  }
  return (
    <div className=" ">
      <Dialog.Root>
        <Dialog.Trigger>
          <button className="bg-black/20 font-[roboto] hover:bg-black/30 w-[100px] h-8 flex justify-center items-center rounded-sm relative right-[-4.1vw] sm:left-[400%] sm:top-[5%] sm:text-[14px] sm:w-14 sm:h-[27px] md:left-[330%] md:top-[3%]">
            Login
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content className="bg-black/20 w-[100vw] h-[100vh] absolute top-0 left-0">
            <Form.Root
              onSubmit={getData}
              className="FormRoot w-[25vw] h-[39vh] absolute p-5 flex flex-col items-center text-center rounded-md  top-1/2 left-1/2 translate-x-[-50%] translate-y-[-60%] bg-slate-500"
            >
              <Dialog.Title className="DialogTitle h-8 w-[25vw] absolute top-0 flex items-center justify-center rounded-t-md bg-slate-400 ">
                <p>ACESSO</p>
              </Dialog.Title>
              <Form.Field name="login" className="FormField flex flex-col mt-6">
                <div className="flex items-center w-[18vw]  mb-1 relative">
                  <Form.Label className="FormLabel text-left ">
                    Login
                  </Form.Label>
                  <Form.Message
                    className="FormMessage text-red-500 text-[9px] absolute right-0"
                    match="valueMissing"
                  >
                    Preencha o seu login
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    className="rounded-md w-[18vw] h-7"
                    id="login"
                    name="login"
                    type="text"
                    required
                  />
                </Form.Control>
              </Form.Field>

              <Form.Field name="senha" className="FormField mt-1">
                <div className="flex items-center w-[18vw] mb-1 relative">
                  <Form.Label className="FormLabel text-left">Senha</Form.Label>
                  <Form.Message
                    className="FormMessage text-red-500 text-[9px] absolute right-0"
                    match="valueMissing"
                  >
                    Digite a senha
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    className="rounded-md w-[18vw] h-7"
                    id="senha"
                    name="senha"
                    type="password"
                    required
                  />
                </Form.Control>
              </Form.Field>

              <div className="flex flex-col justify-center items-center gap-2 mt-3 mb-1 p-1 border-black/70 border-b-[1px] ">
                <Form.Submit>
                  <button className="Button w-[18vw] h-7 bg-zinc-300 hover:bg-zinc-400 rounded-md">
                    acessar
                  </button>
                </Form.Submit>
                <Link className="text-[12px] w-[90px] text-blue-400 hover:underline">
                  esqueci a senha
                </Link>
              </div>

              <Link
                to="/Cadastro"
                className="w-[11vw] text-[14px] mt-4 bg-zinc-300 hover:bg-zinc-400 rounded-md"
              >
                cadastre-se
              </Link>
            </Form.Root>
            <Dialog.Close className="absolute w-6 h-6 top-10 bg-red-600 right-10 rounded-[50%]">
              <button>X</button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
