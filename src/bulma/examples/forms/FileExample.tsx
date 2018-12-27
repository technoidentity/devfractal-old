import React from 'react'
import { Field, File } from '../../form'

export const FileExample: React.SFC = () => (
  <div>
    <Field>
      <File
        variant="primary"
        alignment="centered"
        boxed
        fileLabel="choose file"
        fileName
      >
        Screen Shot 2017-07-29 at 15.54.25.png
      </File>
    </Field>
    <Field>
      <File variant="primary" alignment="right" fileLabel="choose file" />
    </Field>
    <Field>
      <File variant="info" fileLabel="choose file" fileName>
        Screen Shot 2017-07-29 at 15.54.25.png
      </File>
    </Field>
    <Field>
      <File
        size="small"
        alignment="right"
        fullWidth
        fileLabel="small file"
        fileName
      >
        Screen Shot 2017-07-29 at 15.54.25.png
      </File>
    </Field>
    <Field>
      <File
        variant="primary"
        size="medium"
        alignment="centered"
        boxed
        fileLabel="mediumFile"
      />
    </Field>
    <Field>
      <File
        variant="primary"
        size="large"
        alignment="centered"
        fileLabel="largeFile"
        fileName
      >
        Screen Shot 2017-07-29 at 15.54.25.png
      </File>
    </Field>
  </div>
)
