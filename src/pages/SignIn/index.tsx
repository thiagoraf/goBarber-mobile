import React from "react";
import { Container, Title } from "./styles";
import { Image } from "react-native";
import logoImg from "../../assets/logo.png";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title> Faça seu login</Title>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Password" />

      <Button
        style={{ marginTop: 8 }}
        onPress={() => {
          console.log("deu certo!");
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
