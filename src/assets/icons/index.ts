import KeyIcon from "./Key.svg";
import MailIcon from "./Mail.svg";
import UserIcon from "./User.svg";

export type IconName = "Key" | "Mail" | "User";

const icons: {
  [key in IconName]: string;
} = {
  Key: KeyIcon,
  Mail: MailIcon,
  User: UserIcon,
};

const getIconByName = (iconName: IconName): string => icons[iconName];

export default getIconByName;
