import type { DriverFormState, PoolCar, PoolEvent } from '@/types/pool';

export const mockEvents: PoolEvent[] = [
  {
    id: 1,
    name: 'Something',
    description: 'Beach meetup and ride share for the weekend.',
    date: 'Aug 15',
    people: 3,
  },
  {
    id: 2,
    name: 'Concert Night',
    description: 'Heading downtown before the show starts.',
    date: 'Aug 18',
    people: 5,
  },
  {
    id: 3,
    name: 'Office Update',
    description: 'Shared commute to the regional office.',
    date: 'Aug 22',
    people: 2,
  },
];

export const initialCars: PoolCar[] = [
  {
    id: 1,
    driver: 'Allison',
    model: 'Toyota Prius',
    plate: 'QLD-241',
    description: 'Leaving from the station, 2 seats left.',
    passengers: ['Bob'],
    capacity: 5,
  },
  {
    id: 2,
    driver: 'Maya',
    model: 'Hyundai Kona',
    plate: 'NSW-471',
    description: 'Downtown stop, flexible timing.',
    passengers: [],
    capacity: 4,
  },
  {
    id: 3,
    driver: 'Jordan',
    model: 'Mazda 3',
    plate: 'VIC-865',
    description: 'Weekend ride to the event.',
    passengers: ['Nina', 'Sam'],
    capacity: 5,
  },
];

export const emptyDriverForm: DriverFormState = {
  name: '',
  model: '',
  plate: '',
  description: '',
  capacity: '5',
};
