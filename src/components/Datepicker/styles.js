import styled from "styled-components";
import {
  FormGroup,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

export const DatePickerContainer = styled.div`
  position: relative;
`;

export const DatePickerFormGroup = styled(FormGroup)`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  border: 2px solid #06c;
  border-radius: 5px;
  overflow: hidden;
`;

export const DatePickerInput = styled(Input)`
  padding: 1rem 2rem;
  font-weight: 500;
  font-size: 1rem;
  color: #333;
  box-shadow: none;
  border: 2px solid #06c;
  border-radius: 5px;
  text-align: center;
  letter-spacing: 1px;
  background: transparent !important;
  display: flex;
  align-items: center;

  ::placeholder {
    color: #999;
    font-size: 0.9rem;
  }
`;

export const DatePickerDropdown = styled(Dropdown)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 2px;
  left: 0;
`;

export const DatePickerDropdownToggle = styled(DropdownToggle)`
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  opacity: 0;
  filter: alpha(opacity=0);
`;

export const DatePickerDropdownMenu = styled(DropdownMenu)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: none;
  padding: 0;
  margin: 0;
  transform: none !important;
`;
