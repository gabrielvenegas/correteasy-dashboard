import {
  CardContent,
  createStyles,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Theme,
  Typography,
  Radio,
  Paper,
  TextField,
  Button,
} from '@material-ui/core';
import { ArrowLeft } from '@material-ui/icons';
import UserListTable, { Column } from '../../components/shared/Table';
import React from 'react';
import '../MultiCalculation/MultiCalculation.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    operadora: {
      width: '100%',
      marginTop: theme.spacing(2),
    },
    opcoes: {
      textAlign: 'left',
    },
    box: {
      height: '100%',
    },
    headerFooter: {
      textAlign: 'center',
    },
    margin: {
      margin: theme.spacing(2),
      width: '90%',
    },
  }),
);

const MultiCalculation = () => {
  const columns: Column[] = [
    {
      name: 'id',
      label: 'Faixa etária',
    },
    {
      name: 'name',
      label: 'Valor por vida',
    },
    {
      name: 'phone',
      label: 'Qnt de vidas',
    },
    {
      name: 'mail',
      label: 'Subtotal',
    },
  ];
  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const classes = useStyles();
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom className="titulo-lista">
          Multi Cálculo
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} className={classes.box}>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom className="titulo-lista">
                  Operadoras
                </Typography>
                <Grid item xs={12} md={3}>
                  <FormControl variant="outlined" className={classes.operadora}>
                    <InputLabel id="demo-simple-select-outlined-label">
                      Operadora
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      //       value={age}
                      //       onChange={handleChange}
                      label="Estado civil"
                    >
                      <MenuItem value={10}>Solteiro(a)</MenuItem>
                      <MenuItem value={20}>Casado(a)</MenuItem>
                      <MenuItem value={30}>Divorciado(a)</MenuItem>
                      <MenuItem value={30}>Viúvo(a)</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <div className="tipoPessoa">
                  <Typography
                    variant="h6"
                    gutterBottom
                    className="titulo-lista"
                  >
                    Tipo de pessoa
                  </Typography>
                </div>
                <div className={classes.opcoes}>
                  <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                  />
                  Pessoa Física
                  <Radio
                    checked={selectedValue === 'false'}
                    onChange={handleChange}
                    value="false"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                  />
                  Pessoa Jurídica
                </div>
                <div>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className="titulo-lista"
                  >
                    Ordem
                  </Typography>
                  <Grid item xs={12} md={3}>
                    <FormControl
                      variant="outlined"
                      className={classes.operadora}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Título
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        //       value={age}
                        //       onChange={handleChange}
                        label="Estado civil"
                      >
                        <MenuItem value={10}>Solteiro(a)</MenuItem>
                        <MenuItem value={20}>Casado(a)</MenuItem>
                        <MenuItem value={30}>Divorciado(a)</MenuItem>
                        <MenuItem value={30}>Viúvo(a)</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom className="titulo-lista">
                  Faixa Etária
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="0 - 18 anos"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="39 a 43 anos"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="19 - 23 anos"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="44 a 48 anos"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="24 - 28 anos"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="49 a 53 anos"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="29 - 33 anos"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="54 a 58 anos"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="34 - 38 anos"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="59 ou + anos"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  className={classes.margin}
                >
                  Calcular
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <CardContent>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.headerFooter}
              >
                Resultado do cálculo
              </Typography>
            </Grid>
            <div>
              <UserListTable columns={columns} data={[{}]} />
            </div>
          </CardContent>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MultiCalculation;
