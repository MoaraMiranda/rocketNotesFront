import { useState } from "react";
import { Background, Container, Form } from "./styles";
import { useAuth } from "../../hooks/auth";
import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Save and manage your favorites links</p>

        <h2>Log in now</h2>
        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Login" onClick={handleSignIn} />
        <Link to="register">Create your account</Link>
      </Form>

      <Background />
    </Container>
  );
}
