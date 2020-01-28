import { Content, Footer as FooterComponent, Section } from '@stp/ui-core'
import React from 'react'

export const Footer: React.FC = () => (
  <Section>
    <FooterComponent>
      <Content textAlignment="centered">
        <p>
          <strong>Bulma</strong> by
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY NC SA 4.0
          </a>
          .
        </p>
      </Content>
    </FooterComponent>
  </Section>
)
