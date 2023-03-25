import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

interface Props {
  type: string
  id: string
  label?: string
  labelStyle?: string
  placeholder?: string
  icon?: JSX.Element
  error?: FieldError
  inputStyle?: string
  isDisable?: boolean
  register: UseFormRegisterReturn
}

const Input = ({ type, id, label, placeholder, icon, error, inputStyle, isDisable = false, register }: Props) => {
  return (
    <>
      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600 form-control">
        {label && (
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
        )}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">{icon}</div>

        <input
          {...register} // return onChange, onBur, name, ref
          id={id}
          type={type}
          disabled={isDisable}
          placeholder={placeholder}
          className={`${
            inputStyle ??
            'block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600'
          }`}
        />
      </div>
      <p className="error-message">{error?.message}</p>
    </>
  )
}

export default Input
