import {
  Box,
  Field,
  File as FileComponent,
  Section,
  Title,
} from 'devfractal-ui-core'
import React from 'react'

const BasicFileExample: React.FC = () => (
  <Section>
    <Title size="4">File</Title>
    <Field>
      <FileComponent fileLabel="choose file" />
    </Field>
  </Section>
)

const FileModifiersExample: React.FC = () => (
  <Section>
    <Title size="4">Modifiers</Title>
    <Box>
      <Field>
        <FileComponent fileLabel="choose file" fileName>
          Screen Shot 2017-07-29 at 15.54.25.png
        </FileComponent>
      </Field>

      <Field>
        <FileComponent fileLabel="Rightside file" fileName alignment="right">
          Screen Shot 2017-07-29 at 15.54.25.png
        </FileComponent>
      </Field>

      <Field>
        <FileComponent fileLabel="Fullwidth file" fileName fullWidth>
          Screen Shot 2017-07-29 at 15.54.25.png
        </FileComponent>
      </Field>
      <Field>
        <FileComponent fileLabel="choose file" boxed />
      </Field>
      <Field>
        <FileComponent boxed fileLabel="choose file" fileName>
          Screen Shot 2017-07-29 at 15.54.25.png
        </FileComponent>
      </Field>
    </Box>
  </Section>
)

const FileColorExample: React.FC = () => (
  <Section>
    <Title size="4">Colors</Title>
    <Field>
      <FileComponent variant="primary" fileLabel="Primary file" />
    </Field>
    <Field>
      <FileComponent variant="info" fileLabel="Info file" fileName>
        Screen Shot 2017-07-29 at 15.54.25.png
      </FileComponent>
    </Field>
    <Field>
      <FileComponent
        variant="warning"
        size="medium"
        boxed
        fileLabel="Warning file"
      />
    </Field>
    <Field>
      <FileComponent
        variant="danger"
        size="large"
        boxed
        fileName
        fileLabel="Danger file"
      >
        Screen Shot 2017-07-29 at 15.54.25.png
      </FileComponent>
    </Field>
  </Section>
)

const FileSizeExample: React.FC = () => (
  <Section>
    <Title size="4">Sizes</Title>
    <Box>
      <Field>
        <FileComponent size="small" fileLabel="Small file" />
      </Field>
      <Field>
        <FileComponent fileLabel="Normal file" />
      </Field>
      <Field>
        <FileComponent size="medium" fileLabel="Medium file" />
      </Field>
      <Field>
        <FileComponent size="large" fileLabel="Large file" />
      </Field>
    </Box>

    <Box>
      <Field>
        <FileComponent size="small" fileLabel="Small file" boxed />
      </Field>
      <Field>
        <FileComponent fileLabel="Normal file" boxed />
      </Field>
      <Field>
        <FileComponent size="medium" fileLabel="Medium file" boxed />
      </Field>
      <Field>
        <FileComponent size="large" fileLabel="Large file" boxed />
      </Field>
    </Box>
    <Box>
      <Field>
        <FileComponent boxed size="small" fileLabel="small file" fileName>
          Screen Shot 2017-07-29 at 15.54.25.png
        </FileComponent>
      </Field>
      <Field>
        <FileComponent boxed fileLabel="Normal file" fileName>
          Screen Shot 2017-07-29 at 15.54.25.png
        </FileComponent>
      </Field>
      <Field>
        <FileComponent boxed size="medium" fileLabel="Medium file" fileName>
          Screen Shot 2017-07-29 at 15.54.25.png
        </FileComponent>
      </Field>
      <Field>
        <FileComponent boxed size="large" fileLabel="Large file" fileName>
          Screen Shot 2017-07-29 at 15.54.25.png
        </FileComponent>
      </Field>
    </Box>
  </Section>
)

const FileAlignmentExample: React.FC = () => (
  <Section>
    <Title size="4">Alignment</Title>
    <Box>
      <Field>
        <FileComponent
          boxed
          variant="success"
          alignment="centered"
          fileLabel="Centered file"
          fileName
        >
          Screen Shot 2017-07-29 at 15.54.25.png
        </FileComponent>
      </Field>
      <Field>
        <FileComponent
          variant="info"
          alignment="right"
          fileLabel="Right file"
          fileName
        >
          Screen Shot 2017-07-29 at 15.54.25.png
        </FileComponent>
      </Field>
    </Box>
  </Section>
)

export const File: React.FC = () => (
  <>
    <BasicFileExample />
    <FileModifiersExample />
    <FileColorExample />
    <FileSizeExample />
    <FileAlignmentExample />
  </>
)
