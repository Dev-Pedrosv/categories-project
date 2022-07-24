import { ContainerItem, Item } from "./style";

function List({ data, openModal }) {
  return (
    <ContainerItem>
      {data &&
        data.map((item, index) => (
          <Item key={index}>
            <button onClick={() => openModal(item)}>
              <img src={item.images[0].asset.url} alt={item.images[0].alt} />
              <p>{item.name}</p>
            </button>
          </Item>
        ))}
    </ContainerItem>
  );
}

export default List;
