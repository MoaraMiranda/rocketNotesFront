import { Background, Container, Form } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Save and manage your favorites links</p>

        <h2>Create your account</h2>
        <Input placeholder="Name" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />
        <Button title="Login" />

        <Link to="/">Back to login</Link>
      </Form>
    </Container>
  );
}
