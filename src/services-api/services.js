import {format} from 'date-fns';
import {nanoid} from 'nanoid';

class Services {
  urlBase = 'https://aviasales-test-api.java-mentor.com';

  imageCDN = 'https://pics.avs.io/99/36/';


  async getSearchId() {
    try {
      const res = await fetch(`${this.urlBase}/search`);
      return await res.json();
    } catch (err) {
      throw new Error('Error: Не могу получить id!');
    }
  }

  transformTicketsData(tickets) {
    return tickets.map((ticket) => {
      const {carrier, segments, price} = ticket
      const airCarrierLogo = `${this.imageCDN}${carrier}.png`;

      const formatTicketPrice = () => {
        const priceFormatted = new Intl.NumberFormat('ru-RU').format(price);
        return `${priceFormatted} Р`;
      };

      const ticketSegments = segments.map(({origin, destination, date, stops, duration}) => {
        const getTravelTime = () => `${Math.floor(duration / 60)}ч ${duration % 60}м`;

        const getRouteTimes = () => {
          const origDate = new Date(date);
          const destDate = new Date(origDate.getTime() + duration * 6e4);
          return `${format(origDate, 'HH:mm')} - ${format(destDate, 'HH:mm')}`;
        }

        const getStopsCountText = () => {
          switch (stops.length) {
            case 1:
              return '1 Пересадка';
            case 2:
            case 3:
              return `${stops.length} пересадки`;
            default:
              return 'Без пересадок';
          }
        };

        return {
          segmentID: nanoid(),
          origin,
          destination,
          deskTime: getRouteTimes(),
          duration,
          formatDuration: getTravelTime(),
          stops,
          stopsLabel: getStopsCountText()
        }
      });

      return {
        ...ticket,
        formatPrice: formatTicketPrice(),
        ticketID: nanoid(),
        logo: airCarrierLogo,
        segments: ticketSegments

      }
    })
  }

  async getTickets(searchID) {
    try {
      const response = await fetch(`${this.urlBase}/tickets?searchId=${searchID}`);
      const ticketsData = await response.json();
      return {...ticketsData, tickets: this.transformTicketsData(ticketsData.tickets)};
    } catch (err) {
      throw new Error('ERROR: Ошибка при получении данных о билете!');
    }
  }
}

const apiTickets = new Services();

export default apiTickets;
