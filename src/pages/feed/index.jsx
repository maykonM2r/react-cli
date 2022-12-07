
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";
import {
    Container,
    Column,
    Title,
    TittleHighlight
} from './styles'

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TittleHighlight># TOP 5 SEMANAL</TittleHighlight>
                <UserInfo percentual={87} nome="Tonho da Lua" image="https://avatars.githubusercontent.com/u/112003759?s=96&v=4"/>
                <UserInfo percentual={30} nome="Vantuir do Porco" image="https://avatars.githubusercontent.com/u/112003759?s=96&v=4"/>
                <UserInfo percentual={46} nome="Ze do Gas" image="https://avatars.githubusercontent.com/u/112003759?s=96&v=4"/>
                <UserInfo percentual={70} nome="Tião Pedreiro" image="https://avatars.githubusercontent.com/u/112003759?s=96&v=4"/>
                <UserInfo percentual={58} nome="Betão Borracheiro" image="https://avatars.githubusercontent.com/u/112003759?s=96&v=4"/>
            </Column>
        </Container>
    </>)
}

export { Feed }