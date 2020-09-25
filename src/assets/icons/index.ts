import KeyIcon from "./Key.svg";
import MailIcon from "./Mail.svg";
import UserIcon from "./User.svg";
import DownArrowIcon from "./DownArrow.svg";
import SignOutIcon from "./SignOut.svg";

export type IconName = "Key" | "Mail" | "User" | "DownArrow" | "SignOut";

const icons: {
  [key in IconName]: string;
} = {
  Key: KeyIcon,
  Mail: MailIcon,
  User: UserIcon,
  DownArrow: DownArrowIcon,
  SignOut: SignOutIcon,
};

const getIconByName = (iconName: IconName): string => icons[iconName];

export default getIconByName;
