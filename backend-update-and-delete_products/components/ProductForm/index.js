import { StyledForm, StyledHeading, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";

const newFish = { name: "", description: "", price: 0, currency: "EUR" };

export default function ProductForm({
  onSubmit,
  state,
  initalValues = newFish,
}) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledHeading>{state ? "Edit Fish" : "Add a new Fish"}</StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={initalValues.name}
        />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={initalValues.description}
        />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          defaultValue={initalValues.price}
        />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select
          id="currency"
          name="currency"
          defaultValue={initalValues.currency}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
