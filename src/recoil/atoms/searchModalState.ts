import { atom } from 'recoil'

interface IModalState {
  isOpen: boolean
}

export const searchModalState = atom<IModalState>({
  key: 'searchModalState',
  default: { isOpen: false },
})
