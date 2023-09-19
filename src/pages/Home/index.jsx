import { useState, useEffect } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  function handleTagsSelected(tagName) {
    if (tagName === "All") {
      return setTagsSelected([]);
    }

    const alreadySelected = tagsSelected.includes(tagName);

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected((prevState) => [...prevState, tagName]);
    }
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      );
      setNotes(response.data);
    }
    fetchNotes();
  }, [tagsSelected, search]);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />

      <Menu>
        <li>
          <ButtonText
            title="All"
            onClick={() => handleTagsSelected("All")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagsSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>

      <Search>
        <Input
          placeholder="Search for title"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="My notes"></Section>
        {notes.map((note) => (
          <Note key={String(note.id)} data={note} />
        ))}
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Create note
      </NewNote>
    </Container>
  );
}
