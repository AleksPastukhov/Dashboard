import { Section, Caption, Icon, TableButton } from './GeneralSales.styled';
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
      <table>
        <thead>
          <tr>
            <th>Card model</th>
            <th>Card name</th>
            <th>Type</th>
            <th>Limited</th>
            <th>№ Operations</th>
            <th>Date of lost operations</th>
            <th>Rating</th>
            <th>Status</th>
            <th>Price</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={pokemon} alt="pokemon pictures" />
              {name}
            </td>
            <td>{card_name}</td>
            <td>{card_number}</td>
            <td>{type}</td>
            <td>{limited}</td>
            <td>{operations}</td>
            <td>{date}</td>
            <td>{rating}</td>
            <td>{status}</td>
            <td>{price}</td>
          </tr>
          <tr>
            <td>
              <img src={pokemon} alt="pokemon pictures" />
              {name}
            </td>
            <td>{card_name}</td>
            <td>{card_number}</td>
            <td>{type}</td>
            <td>{limited}</td>
            <td>{operations}</td>
            <td>{date}</td>
            <td>{rating}</td>
            <td>{status}</td>
            <td>{price}</td>
          </tr>
          <tr>
            <td>
              <img src={pokemon} alt="pokemon pictures" />
              {name}
            </td>
            <td>{card_name}</td>
            <td>{card_number}</td>
            <td>{type}</td>
            <td>{limited}</td>
            <td>{operations}</td>
            <td>{date}</td>
            <td>{rating}</td>
            <td>{status}</td>
            <td>{price}</td>
          </tr>
          <tr>
            <td>
              <img src={pokemon} alt="pokemon pictures" />
              {name}
            </td>
            <td>{card_name}</td>
            <td>{card_number}</td>
            <td>{type}</td>
            <td>{limited}</td>
            <td>{operations}</td>
            <td>{date}</td>
            <td>{rating}</td>
            <td>{status}</td>
            <td>{price}</td>
          </tr>
          <tr>
            <td>
              <img src={pokemon} alt="pokemon pictures" />
              {name}
            </td>
            <td>{card_name}</td>
            <td>{card_number}</td>
            <td>{type}</td>
            <td>{limited}</td>
            <td>{operations}</td>
            <td>{date}</td>
            <td>{rating}</td>
            <td>{status}</td>
            <td>{price}</td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
};

export default GeneralSales;
