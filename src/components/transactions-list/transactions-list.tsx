import { AccordionDetails, Divider, List, ListItemText, makeStyles, Typography } from "@material-ui/core";
import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

const TRANSACTIONS = gql`
    query Transactions($id: String!) {
        transactions(id: $id) {
            id
            amount
            type
            timestamp
        }
    }
`

interface Transaction {
  id: string;
  amount: string;
  type: string;
  timestamp: string;
}

const useStyles = makeStyles(() => ({
  transactions: {
    display: 'flex',
    flexDirection: 'column'
  },
  date: {
    flex: '1'
  },
  debit: {
    color: 'red'
  },
  credit: {
    color: 'green'
  }
}));

export function TransactionsList({id}: { id: string }) {
  const classes = useStyles();
  const {data, refetch} = useQuery(TRANSACTIONS, {variables: {id}});
  
  useEffect(() => {
    refetch()
  }, [data, refetch]);
  
  return (
    <AccordionDetails className={classes.transactions}>
      <Typography variant="h4">Transactions</Typography>
      <List>
        {data && data.transactions ? data.transactions.map((transaction: Transaction) =>
            <div key={transaction.id}>
              <ListItemText >
                <Typography className={classes.date}>{transaction.timestamp}</Typography>
                {transaction.type === 'DEBIT' ? <span className={classes.debit}>-{transaction.amount}</span> :
                  <span className={classes.credit}>+{transaction.amount}</span>}
              </ListItemText><Divider/></div>) :
          <Typography>loading</Typography>
        }
      </List>
    </AccordionDetails>
  )
}
