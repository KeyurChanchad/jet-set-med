import React from 'react'
import { FileUploader } from "react-drag-drop-files";

const FileUploadWithDrag = ({ fileTypes, handleChange, style }) => {
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} style={style} />
  )
}

export default FileUploadWithDrag