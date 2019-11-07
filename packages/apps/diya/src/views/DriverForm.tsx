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
import { DriverData } from '../common'
import { HeadTitle } from '../components'

export const DriverForm = formComponent(
  DriverData,
  ({ initial, edit, onSubmit }) => (
    <>
      <Section>
        <HeadTitle>{edit ? 'Edit' : 'Create'} User</HeadTitle>
      </Section>
      <Section>
        <Simple.Form
          initialValues={{ ...initial, role: 'driver' }}
          onSubmit={onSubmit}
        >
          <Columns>
            <Column>
              <Title size="5" textColor="info">
                Personal Details
              </Title>
              <Simple.Text name="name" validations={[required()]} />
              {/* <Simple.Text
                name="driverID"
                label="Driver ID"
                validations={[required()]}
              /> */}
              <Simple.Telephone name="phone" validations={[required()]} />
              <Simple.Text
                name="license"
                label="Licence No."
                validations={[required()]}
              />
              <Simple.Text name="email" validations={[required()]} />
              <Simple.Text name="aadhaar" validations={[required()]} />
              <Simple.Select name="shift" defaultValue="morning" fullWidth>
                <option value="morning">Morning</option>
                <option value="evening">Evening</option>
              </Simple.Select>
              <Simple.Text name="role" disabled />
              <Simple.Text name="address1" />
              <Simple.Text name="address2" />
            </Column>

            <Column>
              <Title size="5" textColor="info">
                Bank Details
              </Title>
              <Simple.Text
                name="bankDetails.accountName"
                label="Account Name"
                validations={[required()]}
              />
              <Simple.Text
                name="bankDetails.accountNumber"
                label="Account Number"
                validations={[required()]}
              />

              {/* <Simple.Text
              name="confirmAccountNumber"
              validations={[required()]}
            /> */}
              <Simple.Text
                name="bankDetails.name"
                label="Bank Name"
                validations={[required()]}
              />
              <Simple.Text
                name="bankDetails.branch"
                label="Bank Branch"
                validations={[required()]}
              />
              <Simple.Text
                name="bankDetails.ifscNumber"
                label="Branch IFSC Number"
                validations={[required()]}
              />
              {/* <Simple.RadioGroup name="verified" defaultValue="pending">
              <Radio value={true}> yes</Radio>
              <Radio value="pending"> In process</Radio>
            </Simple.RadioGroup> */}
              <Simple.Checkbox name="verified" />
            </Column>

            <Column>
              <Title size="6" textColor="info">
                Profile Photo
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
              <div style={{ paddingTop: '10px' }}>
                <Simple.Text name="emergencyContactPerson" />
                <Simple.Telephone name="emergencyContactNumber" />
                <Simple.Select name="relation" fullWidth>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="brother">Brother</option>
                  <option value="sister">Sister</option>
                  <option value="wife">Wife</option>
                  <option value="husband">Husband</option>
                  <option value="others">Others</option>
                </Simple.Select>
              </div>
            </Column>
          </Columns>

          <Simple.FormButtons />
        </Simple.Form>
      </Section>
    </>
  ),
)

// export const DriverForm = formComponent(
//   DriverData,
//   ({ initial, edit, onSubmit }) => (
//     <>
//       <Section>
//         <HeadTitle>{edit ? 'Edit' : 'Create'} Driver</HeadTitle>
//       </Section>
//       <Section>
//         <Simple.Form initialValues={initial} onSubmit={onSubmit}>
//           <Columns>
//             <Column>
//               <Title size="5" textColor="info">
//                 Personal Details
//               </Title>
//               <Simple.Text name="name" validations={[required()]} />
//               {/* <Simple.Text
//                 name="driverID"
//                 label="Driver ID"
//                 validations={[required()]}
//               /> */}
//               <Simple.Telephone name="phone" validations={[required()]} />
//               <Simple.Text name="driverLicence" validations={[required()]} />
//               <Simple.Text name="adharNumber" validations={[required()]} />

//               <Simple.Select name="shift" fullWidth>
//                 <option value="morning">Morning</option>
//                 <option value="evening">Evening</option>
//               </Simple.Select>
//               <Simple.Text name="address1" />
//               <Simple.Text name="address2" />
//             </Column>

//             <Column>
//               <Title size="5" textColor="info">
//                 Bank Details
//               </Title>
//               <Simple.Text name="accountName" validations={[required()]} />
//               <Simple.Text name="accountNumber" validations={[required()]} />

//               <Simple.Text
//                 name="confirmAccountNumber"
//                 validations={[required()]}
//               />
//               <Simple.Text name="bankName" validations={[required()]} />
//               <Simple.Text name="bankBranch" validations={[required()]} />
//               <Simple.Text
//                 name="branchIFSCNumber"
//                 label="Branch IFSC Number"
//                 validations={[required()]}
//               />
//               <Simple.RadioGroup name="verified" defaultValue="pending">
//                 <Radio value="yes"> yes</Radio>
//                 <Radio value="pending"> In process</Radio>
//               </Simple.RadioGroup>
//             </Column>

//             <Column>
//               <Title size="6" textColor="info">
//                 Profile Photo
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
//               <div style={{ padding: '15px' }}>
//                 <Simple.Text name="emergencyContactPerson" />
//                 <Simple.Text name="emergencyContactNumber" />
//                 <Simple.Select name="relation" fullWidth>
//                   <option value="father">Father</option>
//                   <option value="mother">Mother</option>
//                   <option value="spouse">Spouse</option>
//                 </Simple.Select>
//               </div>
//             </Column>
//           </Columns>

//           <Simple.FormButtons />
//         </Simple.Form>
//       </Section>
//     </>
//   ),
// )
