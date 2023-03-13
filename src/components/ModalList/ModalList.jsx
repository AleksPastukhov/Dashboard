import { useEffect, useState } from 'react';
import { List } from './ModalList.styled';
import { ModalListItem } from 'components/ModalListItem/ModalListItem';

export function ModalList() {
  const [listChecked, setListChecked] = useState(() => {
    return JSON.parse(window.localStorage.getItem('checkedList')) ?? [];
  });

  const handleCheckboxChange = event => {
    const key = event.target.name;
    setListChecked(prevState => {
      if (!prevState.includes(key)) {
        return [...prevState, key];
      } else {
        return prevState.filter(el => el !== key);
      }
    });
  };

  useEffect(() => {
    window.localStorage.setItem('checkedList', JSON.stringify(listChecked));
  }, [listChecked]);

  return (
    <List>
      <ModalListItem
        name="Source"
        listChecked={listChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <ModalListItem
        name="Card model"
        listChecked={listChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <ModalListItem
        name="Card number"
        listChecked={listChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <ModalListItem
        name="Card name"
        listChecked={listChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <ModalListItem
        name="Type"
        listChecked={listChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <ModalListItem
        name="Limited"
        listChecked={listChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <ModalListItem
        name="№ Operations"
        listChecked={listChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <ModalListItem
        name="Date of lost operations"
        listChecked={listChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <ModalListItem
        name="Rating"
        listChecked={listChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <ModalListItem
        name="Status"
        listChecked={listChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <ModalListItem
        name="Price"
        listChecked={listChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
    </List>
  );
}
