import { Accordion, AccordionSummary, makeStyles, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { AccountShape } from "../accounts-page/accounts-page";
import { TransactionsList } from "../transactions-list/transactions-list";
import { Dispatch, SetStateAction } from "react";

const useStyles = makeStyles(() => ({
  accountInfo: {
    display: 'flex',
    width: '100%'
  },
  accountName: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: '1'
  }
}));

export function AccountRow({account, onExpand, currentExpanded}: { account: AccountShape, onExpand: Dispatch<SetStateAction<string>>, currentExpanded: string }) {
  const classes = useStyles();
  
  const handleChange = () => {
    onExpand(account.id);
  }
  
  
  return (<>
    <Accordion TransitionProps={{ unmountOnExit: true }} expanded={currentExpanded === account.id} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMore/>}>
        <div className={classes.accountInfo}>
          <div className={classes.accountName}>
            <Typography variant="h4">Account name:</Typography>
            <Typography e2e={`account-name-${account.name}`} variant="body1">{account.name}</Typography>
          </div>
          <div>
            <Typography variant="h4">Balance:</Typography>
            <Typography e2e={`account-balance-${account.name}`} variant="body1">£{account.balance}</Typography>
          </div>
        </div>
      </AccordionSummary>
      <TransactionsList id={account.id}/>
    </Accordion>
  </>)
}
