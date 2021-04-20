import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client/core";
import { useState } from "react";
import { Link } from "react-router-dom";

const ADD_ACCOUNT = gql`
    mutation AddAccount($params: AddAccountParams!) {
        addAccount(params: $params) {
            id
            name
        }
    }
`

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  field: {
    minWidth: '20rem',
    marginBottom: '1rem'
  },
  submit: {
    marginTop: '1rem'
  }
}));

export function AddAccountPage() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [addAccount] = useMutation(ADD_ACCOUNT);
  
  return (
    <div className={classes.content}>
      <Typography variant="h1">Add account</Typography>
      <TextField e2e="account-name" className={classes.field} label="Account name" onChange={e => setName(e.target.value)}/>
      <TextField e2e="account-email" className={classes.field} label="Email address" onChange={e => setEmail(e.target.value)}/>
      <Button e2e="account-submit" className={classes.submit} variant="contained" color="primary" onClick={() => addAccount({variables: {params: {name, email}}})} component={Link} to="/accounts">Submit</Button>
    </div>
  );
}
