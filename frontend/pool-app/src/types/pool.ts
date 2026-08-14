export type PoolCar = {
  id: number;
  driver: string;
  model: string;
  plate: string;
  description: string;
  passengers: string[];
  capacity: number;
};

export type PoolEvent = {
  id: number;
  name: string;
  description: string;
  date: string;
  people: number;
};

export type DriverFormState = {
  name: string;
  model: string;
  plate: string;
  description: string;
  capacity: string;
};
