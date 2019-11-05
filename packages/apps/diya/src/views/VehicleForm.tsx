import React from 'react'
import {
  Box,
  Button,
  Column,
  Columns,
  formComponent,
  Image,
  Media,
  MediaContent,
  required,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import { VehicleData } from '../common'
import { HeadTitle } from '../components'

export const VehicleForm = formComponent(
  VehicleData,
  ({ onSubmit, initial, edit }) => (
    <>
      <Section>
        <HeadTitle>{edit ? 'Edit' : 'Add'} Vehicle</HeadTitle>
      </Section>
      <Section>
        <Title textAlignment="left" size="5" textColor="info">
          Vehicle Details
        </Title>

        <Simple.Form initialValues={initial} onSubmit={onSubmit}>
          <Columns>
            <Column>
              <div>
                <Simple.Text
                  name="makersClass"
                  label="Maker's Class"
                  validations={[required()]}
                />

                <Simple.Text name="vehicleClass" validations={[required()]} />

                <Simple.Number
                  name="manufactureYear"
                  label="Manufacture Year"
                  validations={[required()]}
                />
                <Simple.Text
                  name="color"
                  label="Colour"
                  validations={[required()]}
                />
              </div>
            </Column>

            <Column>
              <div>
                <Simple.Text
                  name="registrationNumber"
                  label="Regn. Number"
                  validations={[required()]}
                />

                <Simple.Number name="warranty" validations={[required()]} />

                <Simple.Date
                  name="lastServiced"
                  label="Last Service"
                  validations={[required()]}
                />

                <Simple.Date
                  name="insuranceExpiry"
                  validations={[required()]}
                />
              </div>
            </Column>

            <Column narrow>
              <Title size="6" textColor="info">
                Vehicle Photo
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
              <Simple.Select name="status">
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </Simple.Select>
              <Button variant="dark">Upload Photo</Button>
            </Column>
          </Columns>

          <Simple.FormButtons />
        </Simple.Form>
      </Section>
    </>
  ),
)

// export const VehicleForm = formComponent(
//   Vehicle,
//   ({ onSubmit, initial, edit }) => (
//     <>
//       <Section>
//         <HeadTitle>{edit ? 'Edit' : 'Add'} Vehicle</HeadTitle>
//       </Section>
//       <Section>
//         <Title textAlignment="left" size="5" textColor="info">
//           Vehicle Details
//         </Title>

//         <Simple.Form initialValues={initial} onSubmit={onSubmit}>
//           <Columns>
//             <Column>
//               <div>
//                 <Simple.Text
//                   name="makersClass"
//                   label="Maker's Class"
//                   validations={[required()]}
//                 />

//                 <Simple.Text name="vehicleClass" validations={[required()]} />

//                 <Simple.Number
//                   name="yearOfManufacturing"
//                   validations={[required()]}
//                 />
//                 <Simple.Text name="color" validations={[required()]} />
//               </div>
//             </Column>

//             <Column>
//               <div>
//                 <Simple.Text
//                   name="regnNumber"
//                   label="Regn. Number"
//                   validations={[required()]}
//                 />

//                 <Simple.Number name="warranty" validations={[required()]} />

//                 <Simple.Date
//                   name="lastServicedDate"
//                   validations={[required()]}
//                 />

//                 <Simple.Date
//                   name="insuranceExpiryDate"
//                   validations={[required()]}
//                 />
//               </div>
//             </Column>

//             <Column narrow>
//               <Title size="6" textColor="info">
//                 Vehicle Photo
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
