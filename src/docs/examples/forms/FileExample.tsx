import React from 'react'
import { Box, Field, File, Section, Title } from '../devfractal'

export const BasicFileExample: React.SFC = () => (
  <Section>
    <Title size="4">File</Title>
    <Field>
      <File fileLabel="choose file" />
    </Field>
  </Section>
)

export const FileModifiersExample: React.SFC = () => (
  <Section>
    <Title size="4">Modifiers</Title>
    <Box>
      <Field>
        <File fileLabel="choose file" fileName>
          Screen Shot 2017-07-29 at 15.54.25.png
        </File>
      </Field>

      <Field>
        <File fileLabel="Rightside file" fileName alignment="right">
          Screen Shot 2017-07-29 at 15.54.25.png
        </File>
      </Field>

      <Field>
        <File fileLabel="Fullwidth file" fileName fullWidth>
          Screen Shot 2017-07-29 at 15.54.25.png
        </File>
      </Field>
      <Field>
        <File fileLabel="choose file" boxed />
      </Field>
      <Field>
        <File boxed fileLabel="choose file" fileName>
          Screen Shot 2017-07-29 at 15.54.25.png
        </File>
      </Field>
    </Box>
  </Section>
)

export const FileColorExample: React.SFC = () => (
  <Section>
    <Title size="4">Colors</Title>
    <Field>
      <File variant="primary" fileLabel="Primary file" />
    </Field>
    <Field>
      <File variant="info" fileLabel="Info file" fileName>
        Screen Shot 2017-07-29 at 15.54.25.png
      </File>
    </Field>
    <Field>
      <File variant="warning" size="medium" boxed fileLabel="Warning file" />
    </Field>
    <Field>
      <File
        variant="danger"
        size="large"
        boxed
        fileName
        fileLabel="Danger file"
      >
        Screen Shot 2017-07-29 at 15.54.25.png
      </File>
    </Field>
  </Section>
)

export const FileSizeExample: React.SFC = () => (
  <Section>
    <Title size="4">Sizes</Title>
    <Box>
      <Field>
        <File size="small" fileLabel="Small file" />
      </Field>
      <Field>
        <File fileLabel="Normal file" />
      </Field>
      <Field>
        <File size="medium" fileLabel="Medium file" />
      </Field>
      <Field>
        <File size="large" fileLabel="Large file" />
      </Field>
    </Box>

    <Box>
      <Field>
        <File size="small" fileLabel="Small file" boxed />
      </Field>
      <Field>
        <File fileLabel="Normal file" boxed />
      </Field>
      <Field>
        <File size="medium" fileLabel="Medium file" boxed />
      </Field>
      <Field>
        <File size="large" fileLabel="Large file" boxed />
      </Field>
    </Box>
    <Box>
      <Field>
        <File boxed size="small" fileLabel="small file" fileName>
          Screen Shot 2017-07-29 at 15.54.25.png
        </File>
      </Field>
      <Field>
        <File boxed fileLabel="Normal file" fileName>
          Screen Shot 2017-07-29 at 15.54.25.png
        </File>
      </Field>
      <Field>
        <File boxed size="medium" fileLabel="Medium file" fileName>
          Screen Shot 2017-07-29 at 15.54.25.png
        </File>
      </Field>
      <Field>
        <File boxed size="large" fileLabel="Large file" fileName>
          Screen Shot 2017-07-29 at 15.54.25.png
        </File>
      </Field>
    </Box>
  </Section>
)

export const FileAlignmentExample: React.SFC = () => (
  <Section>
    <Title size="4">Alignment</Title>
    <Box>
      <Field>
        <File
          boxed
          variant="success"
          alignment="centered"
          fileLabel="Centered file"
          fileName
        >
          Screen Shot 2017-07-29 at 15.54.25.png
        </File>
      </Field>
      <Field>
        <File variant="info" alignment="right" fileLabel="Right file" fileName>
          Screen Shot 2017-07-29 at 15.54.25.png
        </File>
      </Field>
    </Box>
  </Section>
)

export const FileExample: React.SFC = () => (
  <>
    <BasicFileExample />
    <FileModifiersExample />
    <FileColorExample />
    <FileSizeExample />
    <FileAlignmentExample />
  </>
)
