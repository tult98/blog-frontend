import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import Icon from '~/components/elements/Icon'
import LoadingIndicator from '~/components/elements/LoadingIndicator'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
}

const ResumeViewer = ({ onClose }: { onClose: () => void }) => {
  const [file, _] = useState('./TuLeThanh_resume.pdf')

  const onDocumentLoadSuccess = () => {
    console.info('pdf file is loaded')
  }

  const onDocumentLoadError = (error: any) => {
    console.error(error)
  }

  const renderLoadingComponent = () => {
    return (
      <div className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <LoadingIndicator />
        <p>Loading resume...</p>
      </div>
    )
  }

  return (
    <div className="fixed z-30 w-full h-full overflow-y-auto -translate-x-1/2 -translate-y-1/2 bg-white min-w-[612px] md:z-10 top-1/2 left-1/2 md:w-auto md:h-5/6">
      <div className="relative z-20 w-full bg-white">
        <Icon
          name="close"
          style="w-6 h-6 text-gray-500 absolute right-2 top-2 cursor-pointer"
          onClick={onClose}
        />
      </div>
      <Document
        file={file}
        options={options}
        loading={renderLoadingComponent}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}

export default ResumeViewer
