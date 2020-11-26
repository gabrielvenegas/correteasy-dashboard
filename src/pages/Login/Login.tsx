import React, { useState, useContext, FormEvent } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  LinearProgress,
  Link,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import JwtDecode from 'jwt-decode';
import API from '../../services/services';
import { AlertContext } from '../../contexts/AlertContext';
import './Login.css';
import corret from '../../assets/corret.png';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { AuthContext } from '../../contexts/AuthContext';

const Login = ({ children }: any): JSX.Element => {
  const alertContext = useContext(AlertContext);
  const routeHistory = useHistory();
  const authContext = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    mail: '',
    password: '',
  } as any);
  const [onRequest, setOnRequest] = useState(false);
  async function postLogin(event: FormEvent<HTMLFormElement>) {
    setOnRequest(true);
    event.preventDefault();

    try {
      const { data } = await API.post('/auth/login', credentials);
      const token = `Bearer ${data.token}`;
      const claims = JwtDecode(token) as any;
      const {
        data: { roles, permissions },
      } = await API.get<any>(`/user/${claims.user_id}`);

      localStorage.setItem('jwtSecurityToken', token);
      localStorage.setItem('username', claims.username);
      setOnRequest(false);

      // event.preventDefault();
      authContext.setToken(token);
      authContext.setUsername(claims.username);

      alertContext.setAlert({
        open: true,
        type: 'success',
        message: 'Login efetuado com sucesso.',
        positionX: 'center',
        positionY: 'top',
      });

      setTimeout(() => {
        window.location.reload();

        routeHistory.push('/usuario/listagem');
      }, 1000);
    } catch (ex) {
      alertContext.setAlert({
        open: true,
        type: 'error',
        message:
          ex?.response?.data?.message ||
          'Ocorreu uma exceção com sua requisição',
        positionX: 'center',
        positionY: 'top',
      });
    } finally {
      setOnRequest(false);
    }
  }
  return (
    <div className="imagemFundo">
      <Card className="card">
        <form onSubmit={postLogin} className="containerLoginPage">
          {children}
          <div className="containerCredentials">
            <Grid
              className="gridContainerLogo"
              container
              spacing={0}
              justify="center"
              alignContent="center"
            >
              {/* <Grid item xs={12}> */}
              {/* <LogoWineBranca
              className="containerLogo"
              width="150"
              height="100"
            /> */}
              {/* </Grid> */}
              {/* <Grid item xs={12}>
            {onRequest || onRequestWithGoogle ? (
              <LinearProgress color="secondary" />
            ) : (
              <div style={{ height: '4px' }} />
            )}
          </Grid> */}
              <Grid className="header-form" justify="center"></Grid>
              <Grid className="main" container spacing={2} justify="center">
                <Grid item xs={10}>
                  <div className="headerCredentials">
                    <Typography
                      className="titleHeader"
                      variant="h5"
                      component="h1"
                      align="left"
                    >
                      <b>Bem-vindo ao CorretEasy</b>
                    </Typography>
                    <Typography className="subtitleHeader" align="left">
                      Informe suas credenciais para prosseguir com o login.
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={10} className="email-input">
                  <TextField
                    label="Email"
                    autoComplete="username"
                    inputProps={{ maxLength: 50 }}
                    variant="outlined"
                    type="email"
                    required
                    onChange={(event): void =>
                      setCredentials({
                        ...credentials,
                        mail: event.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    label="Senha"
                    autoComplete="current-password"
                    inputProps={{ maxLength: 50 }}
                    variant="outlined"
                    type="password"
                    required
                    onChange={(event): void =>
                      setCredentials({
                        ...credentials,
                        password: event.target.value,
                      })
                    }
                  />
                </Grid>
                {/* <Grid item xs={12} className="gridItemForgottPassword">
              <Typography variant="caption" align="center">
                <Link component={RouterLink} to="/">
                  Esqueci minha senha
                </Link>
              </Typography>
            </Grid> */}
                <Grid item xs={10}>
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    className="botao-login"
                    type="submit"
                  >
                    Entrar
                    {/* // disabled={onRequest || onRequestWithGoogle} */}
                    {/* {onRequest ? 'Efetuando Login' : 'Acessar o sistema'} */}
                  </Button>
                </Grid>

                <Grid item xs={10}>
                  {/* <GoogleButton
                className="loginButton normalLoginButton"
                onClick={googleAuth}
              /> */}
                </Grid>

                <Grid item xs={12}>
                  <div className="footer" />
                </Grid>
              </Grid>
            </Grid>
          </div>
        </form>
        <Link href="#">Esqueci minha senha</Link>
      </Card>
    </div>
  );
};

export default Login;
