import {
  Section,
  Caption,
  Icon,
  TableButton,
  Table,
  TableHead,
  CardModel,
  CardNumber,
  TableHeadRows,
  TableRows,
  HeadColumn,
  Name,
  Body,
} from './GeneralSales.styled';
import pokemon from '../../icons/pocemonImg.jpg';
import sprite from '../../icons/sprite.svg';

const GeneralSales = ({ statisticsData }) => {
  const {
    model: { name },
    card_name,
    card_number,
    type,
    limited,
    operations,
    date,
    rating,
    status,
    price,
  } = statisticsData.general_sales_time[0];

  return (
    <Section>
      <Caption>
        General Sales / Time
        <TableButton type="button">
          <Icon width="24" height="24">
            <use href={`${sprite}#setting`}></use>
          </Icon>
          Table settings
          <Icon width="20" height="20">
            <use href={`${sprite}#arrow-down`}></use>
          </Icon>
        </TableButton>
      </Caption>
      <Table>
        <TableHead>
          <HeadColumn>
            <TableHeadRows className="model">Card model</TableHeadRows>
            <TableHeadRows className="name">Card name</TableHeadRows>
            <TableHeadRows className="type">Type</TableHeadRows>
            <TableHeadRows className="limited">Limited</TableHeadRows>
            <TableHeadRows className="operations">№ Operations</TableHeadRows>
            <TableHeadRows className="date">
              Date of lost operations
            </TableHeadRows>
            <TableHeadRows className="rating">Rating</TableHeadRows>
            <TableHeadRows className="status">Status</TableHeadRows>
            <TableHeadRows className="price">Price</TableHeadRows>
            <TableHeadRows className="options">Options</TableHeadRows>
          </HeadColumn>
        </TableHead>
        <Body>
          <HeadColumn>
            <TableRows>
              <CardModel>
                <img src={pokemon} alt="pokemon pictures" />
                <Name>{name}</Name>
              </CardModel>
            </TableRows>
            <TableRows>
              {card_name} <CardNumber>Card {card_number}</CardNumber>
            </TableRows>
            <TableRows>{type}</TableRows>
            <TableRows>{limited}</TableRows>
            <TableRows>{operations}</TableRows>
            <TableRows>{date}</TableRows>
            <TableRows>{rating}%</TableRows>
            <TableRows>{status}</TableRows>
            <TableRows>{price}</TableRows>
            <TableRows>Options</TableRows>
          </HeadColumn>
          <HeadColumn>
            <TableRows>
              <CardModel>
                <img src={pokemon} alt="pokemon pictures" />
                <Name>{name}</Name>
              </CardModel>
            </TableRows>
            <TableRows>
              {card_name} <CardNumber>Card {card_number}</CardNumber>
            </TableRows>
            <TableRows>{type}</TableRows>
            <TableRows>{limited}</TableRows>
            <TableRows>{operations}</TableRows>
            <TableRows>{date}</TableRows>
            <TableRows>{rating}%</TableRows>
            <TableRows>{status}</TableRows>
            <TableRows>{price}</TableRows>
            <TableRows>Options</TableRows>
          </HeadColumn>
          <HeadColumn>
            <TableRows>
              <CardModel>
                <img src={pokemon} alt="pokemon pictures" />
                <Name>{name}</Name>
              </CardModel>
            </TableRows>
            <TableRows>
              {card_name} <CardNumber>Card {card_number}</CardNumber>
            </TableRows>
            <TableRows>{type}</TableRows>
            <TableRows>{limited}</TableRows>
            <TableRows>{operations}</TableRows>
            <TableRows>{date}</TableRows>
            <TableRows>{rating}%</TableRows>
            <TableRows>{status}</TableRows>
            <TableRows>{price}</TableRows>
            <TableRows>Options</TableRows>
          </HeadColumn>
          <HeadColumn>
            <TableRows>
              <CardModel>
                <img src={pokemon} alt="pokemon pictures" />
                <Name>{name}</Name>
              </CardModel>
            </TableRows>
            <TableRows>
              {card_name} <CardNumber>Card {card_number}</CardNumber>
            </TableRows>
            <TableRows>{type}</TableRows>
            <TableRows>{limited}</TableRows>
            <TableRows>{operations}</TableRows>
            <TableRows>{date}</TableRows>
            <TableRows>{rating}%</TableRows>
            <TableRows>{status}</TableRows>
            <TableRows>{price}</TableRows>
            <TableRows>Options</TableRows>
          </HeadColumn>
          <HeadColumn>
            <TableRows>
              <CardModel>
                <img src={pokemon} alt="pokemon pictures" />
                <Name>{name}</Name>
              </CardModel>
            </TableRows>
            <TableRows>
              {card_name} <CardNumber>Card {card_number}</CardNumber>
            </TableRows>
            <TableRows>{type}</TableRows>
            <TableRows>{limited}</TableRows>
            <TableRows>{operations}</TableRows>
            <TableRows>{date}</TableRows>
            <TableRows>{rating}%</TableRows>
            <TableRows>{status}</TableRows>
            <TableRows>{price}</TableRows>
            <TableRows>Options</TableRows>
          </HeadColumn>
        </Body>
      </Table>
    </Section>
  );
};

export default GeneralSales;
