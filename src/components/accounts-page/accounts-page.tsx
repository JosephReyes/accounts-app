import { makeStyles, Typography } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client/core";
import { AccountRow } from "../account-row/account-row";
import { useEffect, useState } from "react";

const ACCOUNTS = gql`
    query AllAccounts {
        accounts {
            id
            name
            balance
        }
    }
`

export interface AccountShape {
  id: string;
  name: string;
  email: string;
  balance: string;
}

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

export function AccountsPage() {
  const classes = useStyles();
  const [expandedId, setExpandedAccount] = useState('');
  const {data, refetch} = useQuery(ACCOUNTS);
  let renderedAccounts =  [];
  
  useEffect(() => {
    refetch()
  }, [data, refetch]);
  
  if (data) {
    renderedAccounts = data.accounts.map((account: AccountShape) =>
      <AccountRow key={account.id}
                  account={account}
                  onExpand={setExpandedAccount}
                  currentExpanded={expandedId}
      />)
  }
  
  return (
    <div className={classes.content}>
      <Typography variant="h1">Accounts</Typography>
      {renderedAccounts.length > 0 ? renderedAccounts : <Typography variant="body1">No accounts</Typography>}
    </div>
  )
}
