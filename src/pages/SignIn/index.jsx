import { Background, Container, Form } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Save and manage your favorites links</p>

        <h2>Log in now</h2>
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />
        <Button title="Login"/>
        <a href="#">Create your account</a>
      </Form>

      <Background  />
    </Container>
  );
}
