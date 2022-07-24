import { Container, Typography, Select } from "./style";

function Search({ options, onChange }) {
  return (
    <Container>
      <Typography>Categories</Typography>
      <Select onChange={(e) => onChange(e.target.value)}>
        <option>All</option>
        {options.map((option, index) => (
          <option key={index} value={option._id}>
            {option.name}
          </option>
        ))}
      </Select>
    </Container>
  );
}

export default Search;
