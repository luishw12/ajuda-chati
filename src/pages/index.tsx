import { Inter } from "next/font/google";
import { Form, Input, Button } from "design-system-toshyro";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`${inter.className} flex h-screen w-screen items-center justify-center bg-gray-500`}
    >
      <Form>
        <Input label="Login" name="login" />
        <Input label="Senha" name="pass" type="password" />
        <Button title="Entrar" onSubmit={(e: any) => console.log(e)} />
      </Form>
    </div>
  );
}
