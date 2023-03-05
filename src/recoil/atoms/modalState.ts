import { atom } from 'recoil'

interface IModalState {
  title?: string
  message?: string
  isLoading?: boolean
  onConfirm?: () => void
}

export const modalState = atom<IModalState>({
  key: 'modalState',
  default: {},
})
