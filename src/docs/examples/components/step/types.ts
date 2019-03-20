export interface AccountFormType {
  readonly userName: string
  readonly password: string
  readonly confirmPassword: string
}
export interface ProfileFormType {
  readonly firstName: string
  readonly lastName: string
  readonly email: string
}

export interface SocialFormType {
  readonly facebookAccount: string
  readonly twitterAccount: string
}

export interface AccountFormPropType {
  readonly initialValues: AccountFormType
  nextClick(e: AccountFormType): void
  onInputChange(e: React.FormEvent<HTMLInputElement>): void
}

export interface ProfileFormPropType {
  readonly initialValues: ProfileFormType
  readonly accountValues: AccountFormType
  nextClick(e: ProfileFormType): void
  prevClick(e: AccountFormType): void
  onInputChange(e: React.FormEvent<HTMLInputElement>): void
}

export interface SocialFormPropType {
  readonly initialValues: SocialFormType
  readonly profileValues: ProfileFormType
  nextClick(e: SocialFormType): void
  prevClick(e: ProfileFormType): void
  onInputChange(e: React.FormEvent<HTMLInputElement>): void
}

export interface FinishFormPropType {
  readonly socialValues: SocialFormType
  prevClick(e: SocialFormType): void
}
