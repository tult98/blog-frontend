import { ChangeEvent } from 'react'

interface Props {
  label: string
  accept?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const FileInput = ({ label, accept, onChange }: Props) => {
  return (
    <div className="w-full max-w-xs form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="file"
        className="w-full max-w-xs file-input file-input-bordered"
        accept={accept}
        onChange={onChange}
      />
    </div>
  )
}

export default FileInput
