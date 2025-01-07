import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    input {
      border-radius: 6px;
      border: 0;
      padding: 1rem;

      background: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      border-radius: 6px;
      padding: 0 1.25rem;
      font-weight: bold;

      background: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};

      &:hover {
        background: ${(props) => props.theme["green-700"]};
        transition: background-color 0.2;
      }
    }
  }
`;

export const Close = styled(Dialog.Close)`
  position: absolute;
  border: 0;
  background: transparent;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  line-height: 0;
  color: ${(props) => props.theme["gray-500"]}

 
`;


interface TransactionTypeButtonProps {
    variant: 'income' | 'outcome'
}

export const TransactionType = styled(RadioGroup.Root)`

display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 0.5rem;
margin-top: 0.5rem;

`

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`

display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
border-radius: 6px;
border: 0;
padding: 1rem;

cursor: pointer;
background: ${(props) => props.theme["gray-700"]} ;
color: ${(props) => props.theme["gray-300"]};

svg {
    color: ${props => props.variant === 'income' ? props.theme["green-500"] : props.theme["red-300"]};
}

&[data-state='checked'] {

    color: ${(props) => props.theme.white};
    background: ${props => props.variant === 'income' ? props.theme["green-500"] : props.theme["red-300"]};

    svg{
        color: ${(props) => props.theme.white};
    }
    
}

`

