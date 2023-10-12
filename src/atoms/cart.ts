import { atom } from 'recoil';
import { ICartTypes, IProductTypes, products } from '../apis/mock-data';
export const cartAtom = atom<ICartTypes[]>({
  key: '',
  default: []
});
export const productAtom = atom<IProductTypes[]>({
  key: '',
  default: products
});
