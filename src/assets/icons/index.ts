import KeyIcon from "./Key.svg";
import MailIcon from "./Mail.svg";
import UserIcon from "./User.svg";
import DownArrowIcon from "./DownArrow.svg";

export type IconName = "Key" | "Mail" | "User" | "DownArrow";

const icons: {
  [key in IconName]: string;
} = {
  Key: KeyIcon,
  Mail: MailIcon,
  User: UserIcon,
  DownArrow: DownArrowIcon,
};

const getIconByName = (iconName: IconName): string => icons[iconName];

export default getIconByName;
