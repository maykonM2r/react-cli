import { FiThumbsUp } from 'react-icons/fi'
import React from 'react'

import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'
const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://png.pngtree.com/thumb_back/fh260/background/20210204/pngtree-abstract-background-technology-of-data-applications-image_555017.jpg"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/112003759?s=96&v=4"/>
         <div>
          <h4>Maykon Rosa</h4>
          <p>Há 5 minutos</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Projeto bootcamp DIO </h4>
          <p>Projeto feito no curso de react no bootcamp da dio Orange Tech...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript #React</h4>
          <p>
            <FiThumbsUp />10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }