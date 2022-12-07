import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson, MdPhone } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api';
import {
    Column,
    Container,
    CriarText,
    Title,
    TitleLogin,
    SubtitleLogin,
    Notice,
    Wrapper,
    Row
} from './styles'

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo Obrigatorio'),
    password: yup.string().min(4, 'No minimo 4 caracteres').required('Campo Obrigatorio'),
  }).required();

const SignUp = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            }else {
                alert('Email ou senha inválido.')
            }
        }catch{
            alert('Houve um erro, tente novamente mais tarde.')
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="nome" placeholder="Nome completo" control={control} leftIcon={<MdPerson />}/>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="telefone" placeholder="Celular ex:(11) 96123-4567" control={control} leftIcon={<MdPhone />}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button tittle="CRIAR MINHA CONTA GRÁTIS" variant="secondary" type="submit"/>
                    </form>
                    <Notice>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Notice>
                    <Row>
                        <SubtitleLogin>Já tenho conta.</SubtitleLogin>
                        <CriarText href="/login">Fazer login.</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { SignUp }