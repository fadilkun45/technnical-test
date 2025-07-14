export interface Group {
  key: string;
  name: string;
  value: string;
  active: boolean;
}

export const groupList: Group[] = [
  {
    key: '1',
    name: 'Industry',
    value: 'Manufacture',
    active: true
  },
  {
    key: '2',
    name: 'Telkom Group',
    value: 'Non Telkom Group',
    active: true
  }
];
