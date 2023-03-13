import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: calc(20 / 14);
  color: ${p => p.theme.colors.primaryTextColor};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 6px 16px 6px 24px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  & input {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }

  & .selected {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }

  & .unselected {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }

  & input:checked + & .selected {
    border: 2px solid transparent;
    background-color: red;
  }
`;

// // Checkbox

//   &__input:focus + &__icon {
//     border: 2px solid var(--accent-border-color);
//   }

// }

// export const List = styled.ul``;
// export const List = styled.ul``;
// export const List = styled.ul``;
// export const List = styled.ul``;
// export const List = styled.ul``;
// export const List = styled.ul``;
