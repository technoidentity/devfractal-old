import axios from 'axios'
import React from 'react'
import {
  Card as DfCard,
  CardContent,
  CardImage,
  SubTitle,
  Title,
} from 'technoidentity-devfractal-ui-core'
import { GithubUserInfo } from './types'

export interface CardViewProps {
  readonly userInfo: GithubUserInfo
}

export const CardView: React.FC<CardViewProps> = ({ userInfo }) => (
  <DfCard>
    <CardContent>
      <CardImage>
        <img src={userInfo.avatarUrl} alt="avatar" />
      </CardImage>
      <Title>{userInfo.name}</Title>
      <SubTitle>{userInfo.blog}</SubTitle>
    </CardContent>
  </DfCard>
)

export interface CardProps {
  readonly name: string
}

export const Card: React.FC<CardProps> = ({ name }) => {
  const [userInfo, setUserInfo] = React.useState<GithubUserInfo | undefined>(
    undefined,
  )

  React.useEffect(() => {
    // tslint:disable-next-line: no-floating-promises
    axios
      .get(`https://api.github.com/users/${name}`)
      // tslint:disable-next-line:no-console
      .then(resp => resp.data)
      .then(data =>
        setUserInfo({
          name: data.name,
          blog: data.blog,
          avatarUrl: data.avatar_url,
        }),
      )
  })

  if (userInfo === undefined) {
    return <h1>Get User....</h1>
  } else {
    return <CardView userInfo={userInfo} />
  }
}
