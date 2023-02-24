import { ChangeEvent } from 'react'

interface Props {
  type: string
  name: string
  id: string
  placeholder?: string
  value: string
  icon?: JSX.Element
  error?: string
  onValidate: (event: ChangeEvent<HTMLInputElement>) => void
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  type,
  name,
  id,
  placeholder,
  value,
  icon,
  error,
  onValidate,
  onChange,
}: Props) => {
  return (
    <>
      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {icon}
        </div>

        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
          value={value}
          onBlur={onValidate}
          onChange={onChange}
        />
      </div>
      <p className="error-message">{error}</p>
    </>
  )
}

export default Input
