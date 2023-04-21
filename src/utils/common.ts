export interface IPagination {
  total: number
  page: number
  pageSize: number
  pageCount: number
}

export interface IMeta {
  pagination: IPagination
}

interface UploadFile {
  name?: string
  alternativeText?: string
  caption?: string
  width?: number
  height?: number
  size: number
  url: string
  previewUrl?: string
  provider: string
}

interface UploadFileEntity {
  id: string
  attributes: UploadFile
}

export interface UploadFileEntityResponse {
  data: UploadFileEntity
}
