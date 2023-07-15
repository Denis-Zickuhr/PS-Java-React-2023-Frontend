import { Form } from "semantic-ui-react";
import styled from "styled-components";

export const FormGroup = styled(Form.Group)`
  display: flex;
  justify-content: space-around;
`;

export const FormField = styled(Form.Field)`
  flex: 1;
  margin-right: 10px;
`;

export const FormInput = styled(Form.Input)`
  input {
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  input:focus {
    outline: none;
    border-color: #535bf2;
    box-shadow: 0 2px 6px rgba(83, 91, 242, 0.5);
  }

  input::placeholder {
    color: #aaa;
  }

  label {
    font-weight: bold;
    padding: 0.5em;
  }
`;

export const FormButton = styled(Form.Button)`
    margin-top: 25px;
    margin-left: auto;
`
export const CustomForm = styled(Form)`
  width: 100%;
  margin-bottom: 15px;
  padding: 30px;
`;