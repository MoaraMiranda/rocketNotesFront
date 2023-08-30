import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Create note</h1>
            <Link to="/">Back</Link>
          </header>
          <Input placeholder="Title" />
          <Textarea placeholder="Observations" />
          <Section title="Useful links">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="New link" />
          </Section>
          <Section title="Markers">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="New Tag" />
            </div>
          </Section>

          <Button title="Save" />
        </Form>
      </main>
    </Container>
  );
}
