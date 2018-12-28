import React from 'react'
import { Column, Columns } from '../../columns'
import { Title } from '../../elements'
import { Field, File } from '../../form'
import { Section } from '../../layout'

export const FileExample: React.SFC = () => (
  <div>
    <Columns columnCentered>
      <Column size="half">
        <Section>
          <Field>
            <File fileLabel="choose file" />
          </Field>
        </Section>

        <Section>
          <Title size="4">Modifiers</Title>
          <Field>
            <File fileLabel="choose file" fileName>
              Screen Shot 2017-07-29 at 15.54.25.png
            </File>
          </Field>

          <Field>
            <File fileLabel="choose file" fileName alignment="right">
              Screen Shot 2017-07-29 at 15.54.25.png
            </File>
          </Field>

          <Field>
            <File fileLabel="choose file" fileName fullWidth>
              Screen Shot 2017-07-29 at 15.54.25.png
            </File>
          </Field>
          <Field>
            <File alignment="right" fileLabel="choose file" boxed />
          </Field>
          <Field>
            <File alignment="centered" boxed fileLabel="choose file" fileName>
              Screen Shot 2017-07-29 at 15.54.25.png
            </File>
          </Field>
        </Section>

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
            <File
              variant="warning"
              size="medium"
              boxed
              fileLabel="Warning file"
            />
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

        <Section>
          <Title size="4">Sizes</Title>
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
        </Section>
        <Section>
          <Field>
            <File size="small" fileLabel="Small file" fileName>
              Screen Shot 2017-07-29 at 15.54.25.png
            </File>
          </Field>
          <Field>
            <File fileLabel="Normal file" fileName>
              Screen Shot 2017-07-29 at 15.54.25.png
            </File>
          </Field>
          <Field>
            <File size="medium" fileLabel="Medium file" fileName>
              Screen Shot 2017-07-29 at 15.54.25.png
            </File>
          </Field>
          <Field>
            <File size="large" fileLabel="Large file" fileName>
              Screen Shot 2017-07-29 at 15.54.25.png
            </File>
          </Field>
        </Section>
        <Section>
          <Field>
            <File alignment="right" fileLabel="choose file" boxed />
          </Field>
        </Section>

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
      </Column>
    </Columns>
  </div>
)
