import React from 'react'
import { File } from '../form/File'
export const FileExample: React.SFC = () => (
  <div>
    <File
      variant="primary"
      alignment="centered"
      modifier="boxed"
      fileLabel="choose file"
    >
      Screen Shot 2017-07-29 at 15.54.25.png
    </File>
    <File variant="primary" alignment="right" fileLabel="choose file">
      Screen Shot 2017-07-29 at 15.54.25.png
    </File>
    <File variant="info" fileLabel="choose file">
      Screen Shot 2017-07-29 at 15.54.25.png
    </File>
    <File
      className="is-primary"
      size="small"
      alignment="centered"
      modifier="boxed"
      fileLabel="small file"
    >
      Screen Shot 2017-07-29 at 15.54.25.png
    </File>
    <File
      variant="primary"
      size="medium"
      alignment="centered"
      modifier="boxed"
      fileLabel="mediumFile"
    >
      Screen Shot 2017-07-29 at 15.54.25.png
    </File>
    <File
      variant="primary"
      size="large"
      alignment="centered"
      modifier="boxed"
      fileLabel="largeFile"
    >
      Screen Shot 2017-07-29 at 15.54.25.png
    </File>
  </div>
)
