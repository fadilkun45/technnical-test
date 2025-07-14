export interface Contact {
  key: string;
  name: string;
  job: string;
  email: string;
  phone: string;
  mobile: string;
}


export const contacts: Contact[] = [
  {
    key: '1',
    name: 'Albert',
    job: 'CEO',
    email: 'einstein@gmail.com',
    phone: '021123456',
    mobile: '0811234567',
  },
  {
    key: '2',
    name: 'Isaac',
    job: 'Mgr Proc',
    email: 'newton@gmail.com',
    phone: '021654321',
    mobile: '0811765432',
  },
  {
    key: '3',
    name: 'Nikola',
    job: 'R&D Lead',
    email: 'tesla@power.com',
    phone: '021998877',
    mobile: '0812123456',
  },
];
