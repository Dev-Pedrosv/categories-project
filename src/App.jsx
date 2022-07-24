import React, { useState } from "react";

import Search from "./components/search";
import List from "./components/list";

import { data } from "./data/data.js";
import Container from "./components/container";
import Header from "./components/header";
import Modal from "./components/modal";

function App() {
  const { nodes, categories } = data;
  const [items, setItems] = useState(nodes);
  const [open, setOpen] = useState(false);
  const [itemModal, setItemModal] = useState(null);

  const handleCategories = (value) => {
    if (value === "All") return setItems(nodes);
    setItems(nodes.filter((item) => item.category._id === value));
  };

  const openModal = (item) => {
    setItemModal(item);
    setOpen(true);
  };
  const closeModal = () => {
    setItemModal(null);
    setOpen(false);
  };

  return (
    <>
      <Container>
        <Header />
        <Search
          options={categories}
          onChange={(value) => handleCategories(value)}
        />
        <List data={items} openModal={(item) => openModal(item)} />
      </Container>

      <Modal open={open} closeModal={closeModal} itemModal={itemModal} />
    </>
  );
}

export default App;
