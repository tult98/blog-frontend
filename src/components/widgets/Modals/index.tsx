import { useRecoilValue } from 'recoil'
import { modalState } from '~/recoil/atoms/modalState'

const Modal = () => {
  const { title, message, onConfirm, isLoading } = useRecoilValue(modalState)

  return (
    <>
      <input type="checkbox" id="global-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label htmlFor="global-modal" className="btn">
              Cancel
            </label>
            <button
              className={`btn btn-primary ${
                isLoading ? 'loading btn-disabled' : ''
              }`}
              onClick={onConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
