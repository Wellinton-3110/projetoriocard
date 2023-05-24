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
          <Dialog.Content className="bg-black/10 w-[100vw] h-[100vh] absolute top-0 left-0">
            <Form.Root
              onSubmit={getData}
              className="FormRoot w-[25vw] h-[45vh] p-5 text-center rounded-lg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-60%] bg-slate-400"
            >
              <Dialog.Title className="DialogTitle ">ACESSO</Dialog.Title>
              <Form.Field className="FormField">
                <div>
                  <Form.Label className="FormLabel">Login</Form.Label>
                  <Form.Message
                    className="FormMessage text-red-400 text-[10px] ml-5"
                    match="valueMissing"
                  >
                    Preencha o seu login
                  </Form.Message>
                </div>

                <Form.Control asChild>
                  <input
                    className="rounded-md w-[15vw]"
                    id="login"
                    name="login"
                    type="text"
                    required
                  />
                </Form.Control>
              </Form.Field>

              <Form.Field className="FormField">
                <div className="">
                  <Form.Label className="FormLabel">Senha</Form.Label>
                  <Form.Message
                    className="FormMessage text-red-400 text-[10px] ml-5"
                    match="valueMissing"
                  >
                    Digite a senha
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input
                    className="rounded-md w-[15vw]"
                    id="senha"
                    name="senha"
                    type="text"
                    required
                  />
                </Form.Control>
              </Form.Field>

              <div className="flex gap-3 justify-center mt-2">
                <Form.Submit>
                  <button className="Button">acessar</button>
                </Form.Submit>
                <Link>cadastro</Link>
              </div>
            </Form.Root>
            <Dialog.Close className="absolute w-8 h-8 top-10 bg-red-500 right-5 rounded-[40%]">
              <button>X</button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
