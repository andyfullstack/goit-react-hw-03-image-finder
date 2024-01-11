import { Div, Input } from './Filter.styled';

const Filter = props => {
  return (
    <Div style={{ margin: 'auto' }}>
      <label htmlFor="filter">Find contacts by name</label>
      <Input type="text" name="filter" onChange={props.onInputChange} />
    </Div>
  );
};

export default Filter;
