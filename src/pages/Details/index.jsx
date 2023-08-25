import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Remove note" />
          <h1>Introduction to React</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularized in the 1960s
            with the release of Letra sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Alb
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Section title="Useful links">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Markers">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>
          <Button title="Back" />
        </Content>
      </main>
    </Container>
  );
}
