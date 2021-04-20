import {
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@material-ui/core";
import { ArrowDownwardOutlined } from "@material-ui/icons";
import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@apollo/client/core";
import { useState } from "react";
import { AccountShape } from "../accounts-page/accounts-page";
import { Link } from "react-router-dom";

const ACCOUNTS = gql`
    query AllAccounts {
        accounts {
            id
            name
            balance
        }
    }
`

const TRANSFER = gql`
    mutation Transfer($params: TransferParams!) {
        transfer(params: $params)
    }
`

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      marginBottom: '1rem'
    }
  },
  account: {
    flex: '1'
  },
  balance: {
    color: 'gray'
  }
}));

export function TransferPage() {
  const classes = useStyles();
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const [transfer] = useMutation(TRANSFER);
  const {data} = useQuery(ACCOUNTS);
  let renderedItems;
  
  if (data) {
    renderedItems = data.accounts.map((account: AccountShape) =>
      <MenuItem key={account.id} e2e={`account-item-${account.id}`} value={account.id}>
        <Typography className={classes.account}>{account.name}</Typography>
        <span className={classes.balance}>£{account.balance}</span>
      </MenuItem>)
  }
  
  return (<div className={classes.content}>
      <Typography variant="h1">Transfer between accounts</Typography>
      <FormControl className={classes.form}>
        <InputLabel id="from-account-label">From account</InputLabel>
        <Select e2e="transfer-from-accounts" labelId="from-account-label" value={from}
                onChange={e => setFrom(e.target.value as string)}>
          {renderedItems}
        </Select>
      </FormControl>
      <ArrowDownwardOutlined/>
      <FormControl className={classes.form}>
        <InputLabel id="to-account-label">To account</InputLabel>
        <Select e2e="transfer-to-accounts" labelId="to-account-label" value={to}
                onChange={e => setTo(e.target.value as string)}>{renderedItems}</Select>
      </FormControl>
      <FormControl className={classes.form}>
        <TextField e2e="transfer-amount" label="Amount" onChange={e => setAmount(e.target.value)}/>
      </FormControl>
      <Button e2e="submit-transfer" variant="contained" color="primary" onClick={() =>
        transfer({variables: {params: {from, to, amount}}})
      } component={Link} to="/accounts">Submit</Button>
    </div>
  )
}
