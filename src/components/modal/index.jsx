import { Container, ContainerItem } from "./style";

const Modal = ({ open, closeModal, itemModal }) => {
  return (
    <Container open={open} onClick={closeModal}>
      <ContainerItem>
        <span onClick={closeModal}>X</span>
        <img
          src={itemModal?.images[0]?.asset?.url}
          alt={itemModal?.images[0]?.alt}
        />
        <p>{itemModal?.name}</p>
        <p>{itemModal?.shortDescription}</p>
      </ContainerItem>
    </Container>
  );
};

export default Modal;
