import { Drawer, ListItem, ListItemIcon, ListItemText, SvgIconTypeMap } from "@material-ui/core";
import { PlaylistAdd, SwapVert, ViewList } from "@material-ui/icons";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { Link } from "react-router-dom";

export interface NavItem {
  text:string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  link: string;
}

const navItems: NavItem[] = [
  {
    text: 'Accounts',
    icon: ViewList,
    link: 'accounts',
  },
  {
    text: 'Add Account',
    icon: PlaylistAdd,
    link: 'add-account'
  },
  {
    text: 'Transfer Money',
    icon: SwapVert,
    link: 'transfer'
  }
]

export function SideNav() {
  return (<Drawer variant="permanent">
    {navItems.map((item, index) => (
    <ListItem e2e={item.link} button key={item.text} component={Link} to={`/${item.link}`}>
      <ListItemIcon>{<item.icon />}</ListItemIcon>
      <ListItemText primary={item.text}/>
    </ListItem>
    ))}
  </Drawer>)
}
