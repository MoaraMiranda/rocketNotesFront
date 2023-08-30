import { FiArrowLeft, FiMail, FiLock, FiUser, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/moaramiranda.png" alt="User Picture" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input placeholder="Name" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Current password" type="Password" icon={FiLock} />
        <Input placeholder="New password" type="Password" icon={FiLock} />
        <Button title="Save" />
      </Form>
    </Container>
  );
}
