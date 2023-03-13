import { useEffect, useState } from 'react';
import { Item, Label } from './ModalListItem.styled';
import sprite from '../../icons/sprite.svg';

export function ModalListItem({ listChecked, handleCheckboxChange, name }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (listChecked.includes(name)) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [listChecked, name]);

  return (
    <Item>
      <Label>
        {name}
        <svg width="24" height="24">
          <use
            href={isChecked ? `${sprite}#selected` : `${sprite}#unselected`}
          ></use>
        </svg>
        <input
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </Label>
    </Item>
  );
}
