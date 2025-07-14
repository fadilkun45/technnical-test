export type SupplierStatus = 'Active' | 'In Progress' | 'Blocked';

export interface Supplier {
  key: string;
  name: string;
  code: string;
  id: string;
  alias: string;
  address: string;
  contact: string;
  status: SupplierStatus;
}


export const suppliers: Supplier[] = [
  {
    key: '1',
    name: 'PT Setoram Indonesia',
    code: 'STRM',
    id: '51000012',
    alias: 'Setoram',
    address: 'Jakarta, Indonesia',
    contact: 'Albert Einstein',
    status: 'Active',
  },
  {
    key: '2',
    name: 'PT Suka Suka',
    code: 'SKSK',
    id: '41000003',
    alias: 'Sukasuka',
    address: 'Bandung, Indonesia',
    contact: 'James Lee',
    status: 'In Progress',
  },
  {
    key: '3',
    name: 'PT Angin Ribut',
    code: 'ARIB',
    id: '43000014',
    alias: 'Angin',
    address: 'Denpasar, Indonesia',
    contact: 'Maria Chen',
    status: 'Blocked',
  },
  {
    key: '4',
    name: 'PT Batu Karang',
    code: 'BTKR',
    id: '53000055',
    alias: 'Karang',
    address: 'Surabaya, Indonesia',
    contact: 'Tony Stark',
    status: 'Active',
  },
  {
    key: '5',
    name: 'PT Maju Jaya',
    code: 'MJY',
    id: '41000222',
    alias: 'Maju',
    address: 'Yogyakarta, Indonesia',
    contact: 'Steve Rogers',
    status: 'In Progress',
  },
  {
    key: '6',
    name: 'PT Laut Biru',
    code: 'LTBR',
    id: '52000123',
    alias: 'Laut',
    address: 'Makassar, Indonesia',
    contact: 'Bruce Banner',
    status: 'Blocked',
  }
];