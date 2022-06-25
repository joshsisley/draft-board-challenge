export type Player = {
  name: string;
  country: string;
  position: 'C' | 'LW' | 'RW' | 'D' | 'G';
  age: number;
};

export type Team = {
  name: string;
  draftedPlayers: Player[];
  onTheClock?: boolean;
  pick?: number;
};
