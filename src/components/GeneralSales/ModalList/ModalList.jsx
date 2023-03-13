import { List, Item, Label } from './ModalList.styled';
import sprite from '../../../icons/sprite.svg';

export function ModalList() {
  return (
    <List>
      <Item>
        <Label>
          Source
          <svg width="24" height="24" className="selected">
            <use href={`${sprite}#selected`}></use>
          </svg>
          <svg width="24" height="24" className="unselected">
            <use href={`${sprite}#unselected`}></use>
          </svg>
          <input type="checkbox" name="source" />
        </Label>
      </Item>
      <Item>
        <label>
          Card model
          <svg width="24" height="24">
            <use href={`${sprite}#selected`}></use>
          </svg>
          <div>
            <input type="checkbox" name="source" />
            <div aria-hidden="true" class="theme-switch__marker"></div>
          </div>
          <svg width="24" height="24">
            <use href={`${sprite}#unselected`}></use>
          </svg>
        </label>
      </Item>
      <Item>
        <label>
          Card number
          <svg width="24" height="24">
            <use href={`${sprite}#selected`}></use>
          </svg>
          <div>
            <input type="checkbox" name="source" />
            <div aria-hidden="true" class="theme-switch__marker"></div>
          </div>
          <svg width="24" height="24">
            <use href={`${sprite}#unselected`}></use>
          </svg>
        </label>
      </Item>
      <Item>
        <label>
          Card name
          <svg width="24" height="24">
            <use href={`${sprite}#selected`}></use>
          </svg>
          <div>
            <input type="checkbox" name="source" />
            <div aria-hidden="true" class="theme-switch__marker"></div>
          </div>
          <svg width="24" height="24">
            <use href={`${sprite}#unselected`}></use>
          </svg>
        </label>
      </Item>
      <Item>
        <label>
          Type
          <svg width="24" height="24">
            <use href={`${sprite}#selected`}></use>
          </svg>
          <div>
            <input type="checkbox" name="source" />
            <div aria-hidden="true" class="theme-switch__marker"></div>
          </div>
          <svg width="24" height="24">
            <use href={`${sprite}#unselected`}></use>
          </svg>
        </label>
      </Item>
      <Item>
        <label>
          Itemmited
          <svg width="24" height="24">
            <use href={`${sprite}#selected`}></use>
          </svg>
          <div>
            <input type="checkbox" name="source" />
            <div aria-hidden="true" class="theme-switch__marker"></div>
          </div>
          <svg width="24" height="24">
            <use href={`${sprite}#unselected`}></use>
          </svg>
        </label>
      </Item>
      <Item>
        <label>
          № Operations
          <svg width="24" height="24">
            <use href={`${sprite}#selected`}></use>
          </svg>
          <div>
            <input type="checkbox" name="source" />
            <div aria-hidden="true" class="theme-switch__marker"></div>
          </div>
          <svg width="24" height="24">
            <use href={`${sprite}#unselected`}></use>
          </svg>
        </label>
      </Item>
      <Item>
        <label>
          {' '}
          Date of lost operations
          <svg width="24" height="24">
            <use href={`${sprite}#selected`}></use>
          </svg>
          <div>
            <input type="checkbox" name="source" />
            <div aria-hidden="true" class="theme-switch__marker"></div>
          </div>
          <svg width="24" height="24">
            <use href={`${sprite}#unselected`}></use>
          </svg>
        </label>
      </Item>
      <Item>
        <label>
          Rating
          <svg width="24" height="24">
            <use href={`${sprite}#selected`}></use>
          </svg>
          <div>
            <input type="checkbox" name="source" />
            <div aria-hidden="true" class="theme-switch__marker"></div>
          </div>
          <svg width="24" height="24">
            <use href={`${sprite}#unselected`}></use>
          </svg>
        </label>
      </Item>
      <Item>
        <label>
          Status
          <svg width="24" height="24">
            <use href={`${sprite}#selected`}></use>
          </svg>
          <div>
            <input type="checkbox" name="source" />
            <div aria-hidden="true" class="theme-switch__marker"></div>
          </div>
          <svg width="24" height="24">
            <use href={`${sprite}#unselected`}></use>
          </svg>
        </label>
      </Item>
    </List>
  );
}
