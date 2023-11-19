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
  N: {
    main: 'grey',
    text: 'black',
  },
};

export const EVENTS = [
  {
    start: moment('2023-11-20T09:00:00').toDate(),
    end: moment('2023-11-20T09:30:00').toDate(),
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
    start: moment('2023-11-20T10:00:00').toDate(),
    end: moment('2023-11-20T11:00:00').toDate(),
    data: {
      appointment: {
        title: 'Mister',
        name: 'Alex',
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
    start: moment('2023-11-20T11:00:00').toDate(),
    end: moment('2023-11-20T11:30:00').toDate(),
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
        status: 'CI',
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
    start: moment('2023-11-21T13:30:00').toDate(),
    end: moment('2023-11-21T15:00:00').toDate(),
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
        status: 'CI',
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
];
