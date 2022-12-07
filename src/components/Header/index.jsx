
import React from "react";
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';

import {
    BuscarInputContainer,
    Container,
    Row,
    Wrapper,
    Menu,
    MenuRight,
    Input,
    UserPicture
} from './styles';

const Header = ({autenticado}) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Play</Menu>
                            <Menu>Global</Menu>
                            <Menu>Artigos</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/112003759?s=96&v=4"/>
                    ) : (
                        <>
                            <MenuRight href="/">Home</MenuRight>
                            <Button tittle="Entrar"/>
                            <Button tittle="Cadastrar"/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }