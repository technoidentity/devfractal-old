import * as React from 'react'
import {
  AccountForm,
  AccountFormType,
  FinishForm,
  ProfileForm,
  ProfileFormType,
  SocialForm,
  SocialFormType,
} from '../step'

export const accountInitialValues: AccountFormType = {
  userName: '',
  password: '',
  confirmPassword: '',
}

export const profileInitialValues: ProfileFormType = {
  firstName: '',
  lastName: '',
  email: '',
}

export const socialInitialValues: SocialFormType = {
  facebookAccount: '',
  twitterAccount: '',
}

export const StepComponent: () => JSX.Element = () => {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [accountValues, setAccountValues] = React.useState<AccountFormType>(
    accountInitialValues,
  )
  const [profileValues, setProfileValues] = React.useState<ProfileFormType>(
    profileInitialValues,
  )
  const [socialValues, setSocialValues] = React.useState<SocialFormType>(
    socialInitialValues,
  )

  const handleAccountValuesInputChange: (
    event: React.SyntheticEvent,
  ) => void = (event: React.SyntheticEvent) => {
    event.persist()
    const { name, value } = event.target as HTMLInputElement
    setAccountValues({ ...accountValues, [name]: value })
  }

  const handleProfileValuesInputChange: (
    event: React.SyntheticEvent,
  ) => void = (event: React.SyntheticEvent) => {
    event.persist()
    const { name, value } = event.target as HTMLInputElement
    setProfileValues({ ...profileValues, [name]: value })
  }

  const handleSocialValuesInputChange: (event: React.SyntheticEvent) => void = (
    event: React.SyntheticEvent,
  ) => {
    event.persist()
    const { name, value } = event.target as HTMLInputElement
    setSocialValues({ ...socialValues, [name]: value })
  }

  const handleAccountNextClick: (values: AccountFormType) => void = (
    values: AccountFormType,
  ) => {
    setAccountValues(values)
    setCurrentPage(2)
  }
  const handleProfileNextClick: (values: ProfileFormType) => void = (
    values: ProfileFormType,
  ) => {
    setProfileValues(values)
    setCurrentPage(3)
  }

  const handleSocialNextClick: (values: SocialFormType) => void = (
    values: SocialFormType,
  ) => {
    setSocialValues(values)
    setCurrentPage(4)
  }

  const handleFinishPreviousClick: (values: SocialFormType) => void = (
    values: SocialFormType,
  ) => {
    setSocialValues(values)
    setCurrentPage(3)
  }
  const handleSocialPreviousClick: (values: ProfileFormType) => void = (
    values: ProfileFormType,
  ) => {
    setProfileValues(values)
    setCurrentPage(2)
  }

  const handleProfilePreviousClick: (values: AccountFormType) => void = (
    values: AccountFormType,
  ) => {
    setAccountValues(values)
    setCurrentPage(1)
  }

  return (
    <div>
      {currentPage === 1 && (
        <AccountForm
          initialValues={accountValues}
          nextClick={handleAccountNextClick}
          onInputChange={handleAccountValuesInputChange}
        />
      )}
      {currentPage === 2 && (
        <ProfileForm
          initialValues={profileValues}
          accountValues={accountValues}
          prevClick={handleProfilePreviousClick}
          nextClick={handleProfileNextClick}
          onInputChange={handleProfileValuesInputChange}
        />
      )}
      {currentPage === 3 && (
        <SocialForm
          initialValues={socialValues}
          profileValues={profileValues}
          prevClick={handleSocialPreviousClick}
          nextClick={handleSocialNextClick}
          onInputChange={handleSocialValuesInputChange}
        />
      )}
      {currentPage === 4 && (
        <FinishForm
          prevClick={handleFinishPreviousClick}
          socialValues={socialValues}
        />
      )}
    </div>
  )
}
