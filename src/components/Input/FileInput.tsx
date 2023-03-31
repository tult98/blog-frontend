import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from 'react-hook-form'

interface Props {
  label: string
  accept?: string
  register: UseFormRegisterReturn
  isUploading?: boolean
  error?: Merge<FieldError, FieldErrorsImpl<{}>>
}

const FileInput = ({ label, accept, isUploading, register, error }: Props) => {
  return (
    <div className="w-full max-w-xs form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input type="file" className="w-full max-w-xs file-input file-input-bordered" accept={accept} {...register} />
      {isUploading && <p className="mt-1 text-sm text-content">Uploading your file...</p>}
      {error && <p className="error-message">{error?.message}</p>}
    </div>
  )
}

export default FileInput
