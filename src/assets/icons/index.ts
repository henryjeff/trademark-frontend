import KeyIcon from "./Key.svg";
import MailIcon from "./Mail.svg";
import UserIcon from "./User.svg";
import DownArrowIcon from "./DownArrow.svg";
import SignOutIcon from "./SignOut.svg";
import SearchIcon from "./Search.svg";
import StockUpIcon from "./StockUp.svg";
import StockDownIcon from "./StockDown.svg";

export type IconName =
  | "Key"
  | "Mail"
  | "User"
  | "DownArrow"
  | "SignOut"
  | "Search"
  | "StockUp"
  | "StockDown";

const icons: {
  [key in IconName]: string;
} = {
  Key: KeyIcon,
  Mail: MailIcon,
  User: UserIcon,
  DownArrow: DownArrowIcon,
  SignOut: SignOutIcon,
  Search: SearchIcon,
  StockUp: StockUpIcon,
  StockDown: StockDownIcon,
};

const getIconByName = (iconName: IconName): string => icons[iconName];

export default getIconByName;
