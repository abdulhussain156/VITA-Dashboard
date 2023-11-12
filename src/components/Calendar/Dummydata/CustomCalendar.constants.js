import moment from 'moment';

export const color = {
  Pending: 'P',
  CheckedIn: 'CI',
};

export const EVENT_STATUS_COLORS = {
  P: {
    main: 'rgba(243, 182, 168, 0.5)',
    text: 'rgba(157, 121, 113, 1)',
  },
  CI: {
    main: 'rgba(159, 183, 242, 0.5)',
    text: 'rgba(72, 84, 114, 1)',
  },
};

export const EVENTS = [
  {
    start: moment('2023-11-13T10:00:00').toDate(),
    end: moment('2023-11-13T11:00:00').toDate(),
    data: {
      appointment: {
        title: 'Madame',
        name: 'Causcci Elisa',
        date: '12/07/1989  (33 ans)',
        contact: '06 27 85 61 25',
        message: 'Verifier retour mutuelle, et confirmer le RDV ',
        doctor: 'Dr Joseph Darmon',
        time: '27 octobre 14H30 -> 15H50',
        description: '@ RDV pris sur internet',
        status: 'P',
        history: [
          {
            name: 'RDV passé',
            total: 5,
          },
          {
            name: 'RDV à venir',
            total: 5,
          },
          {
            name: 'RDV non honoré',
            total: 5,
          },
        ],
      },
    },
    isDraggable: true,
  },
  {
    start: moment('2023-11-13T11:00:00').toDate(),
    end: moment('2023-11-13T11:40:00').toDate(),
    data: {
      appointment: {
        title: 'Mr',
        name: 'John Adams',
        date: '25/06/1995  (33 ans)',
        contact: '01 15 15 23 56',
        message: 'Verifier retour mutuelle, et confirmer le RDV ',
        doctor: 'Dr Nouman Dam',
        time: '27 octobre 14H30 -> 15H50',
        description: '@ booked here',
        status: 'CI',
        history: [
          {
            name: 'RDV passé',
            total: 6,
          },
          {
            name: 'RDV à venir',
            total: 2,
          },
          {
            name: 'RDV non honoré',
            total: 1,
          },
        ],
      },
    },
    isDraggable: true,
  },
  {
    start: moment('2023-11-14T11:40:00').toDate(),
    end: moment('2023-11-14T12:30:00').toDate(),
    data: {
      appointment: {
        title: 'Mrs',
        name: 'Olivia Casta',
        date: '02/11/1998  (33 ans)',
        contact: '06 27 85 61 25',
        message: 'Verifier retour mutuelle, et confirmer le RDV ',
        doctor: 'Dr Nobody man',
        time: '27 octobre 14H30 -> 15H50',
        description: '@ RDV pris sur internet',
        status: 'CI',
        history: [
          {
            name: 'RDV passé',
            total: 10,
          },
          {
            name: 'RDV à venir',
            total: 2,
          },
          {
            name: 'RDV non honoré',
            total: 3,
          },
        ],
      },
    },
    isDraggable: true,
  },
];
