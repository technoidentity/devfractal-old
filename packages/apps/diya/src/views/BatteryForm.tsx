import React from 'react'
import {
  Box,
  Button,
  Column,
  Columns,
  CreateLink,
  formComponent,
  Image,
  links,
  Media,
  MediaContent,
  positive,
  required,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import * as yup from 'yup'
import { BatteryAdd } from '../common'
import { HeadTitle } from '../components'

const batteryLinks = links('batteries')

const schema = yup.object().shape({
  cycles: yup
    .number()
    .required('this is a required field')
    .nullable(),
})

export const BatteryForm = formComponent(
  BatteryAdd,
  ({ onSubmit, edit, initial }) => (
    <>
      <Section>
        <HeadTitle>{edit ? 'Update' : 'Add'} Battery</HeadTitle>
      </Section>
      <CreateLink alignment="right" variant="primary" to={batteryLinks.list}>
        Back
      </CreateLink>
      <Section>
        <Title textAlignment="left" size="5" textColor="info">
          Battery Details
        </Title>

        <Simple.Form
          initialValues={initial}
          onSubmit={onSubmit}
          validationSchema={schema}
        >
          <Columns>
            <Column>
              <Simple.Text
                label="Battery Make"
                name="make"
                validations={[required()]}
              />
              <Simple.Text
                label="Battery Model"
                name="model"
                validations={[required()]}
              />
              <Simple.Date
                dateFormat="dd/MM/yyyy"
                label="Last Charged"
                name="lastCharged"
              />
            </Column>

            <Column>
              <Simple.Text
                label="Capacity"
                name="capacity"
                validations={[required()]}
              />
              <Simple.Number
                label="Battery Cycles"
                name="cycles"
                validations={[positive()]}
              />
              <Simple.Date
                dateFormat="dd/MM/yyyy"
                label="Waranty Valid UpTo"
                name="warrantyUpto"
              />
            </Column>

            <Column narrow>
              <Title size="6" textColor="info">
                Battery Photo
              </Title>

              <Box>
                <Media>
                  <MediaContent>
                    <Image
                      size="128x128"
                      src="https://bulma.io/images/placeholders/128x128.png"
                    />
                  </MediaContent>
                </Media>
              </Box>

              <Button variant="dark">Upload Photo</Button>
            </Column>
          </Columns>

          <Simple.FormButtons />
        </Simple.Form>
      </Section>
    </>
  ),
)

// export const BatteryForm = formComponent(
//   Battery,
//   ({ onSubmit, edit, initial }) => (
//     <>
//       <Section>
//         <HeadTitle>{edit ? 'Update' : 'Add'} Battery</HeadTitle>
//       </Section>
//       <Section>
//         <Title textAlignment="left" size="5" textColor="info">
//           Battery Details
//         </Title>

//         <Simple.Form initialValues={initial} onSubmit={onSubmit}>
//           <Columns>
//             <Column>
//               <Simple.Text name="batteryMake" validations={[required()]} />
//               <Simple.Text name="batteryModel" validations={[required()]} />
//               <Simple.Date name="lastCharged" />
//             </Column>

//             <Column>
//               <Simple.Text name="capacity" validations={[required()]} />
//               <Simple.Number name="batteryCycles" validations={[required()]} />
//             </Column>

//             <Column narrow>
//               <Title size="6" textColor="info">
//                 Battery Photo
//               </Title>

//               <Box>
//                 <Media>
//                   <MediaContent>
//                     <Image
//                       size="128x128"
//                       src="https://bulma.io/images/placeholders/128x128.png"
//                     />
//                   </MediaContent>
//                 </Media>
//               </Box>

//               <Button variant="dark">Upload Photo</Button>
//             </Column>
//           </Columns>

//           <Simple.FormButtons />
//         </Simple.Form>
//       </Section>
//     </>
//   ),
// )
