import React from "react";
import Navbar from "./Navbar";
import NavbarOption from "./NavbarOption";
import NavbarSection from "./NavbarSection";
import { Text, Icon } from "../../general";
import colors from "../../../constants/Colors";
import { StyleSheet } from "../../../constants/Styles";
import { useTokenData } from "../../../store/selectors/AuthSelectors";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { authLogout } from "../../../store/actions/AuthActions";

interface TopNavigationProps {}

const TopNavigation: React.FC<TopNavigationProps> = ({}) => {
  const tokenData = useTokenData();
  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = () => {
    dispatch(authLogout());
    history.push("/");
  };

  const Logo = () => (
    <NavbarOption redirectTo="/">
      <Text weight="black" fontSize={24}>
        TM
      </Text>
    </NavbarOption>
  );

  return tokenData?.accessToken ? (
    <Navbar>
      <NavbarSection justify="left">
        <NavbarOption redirectTo="/dashboard">
          <Text weight="medium">Dashboard</Text>
        </NavbarOption>
      </NavbarSection>
      <NavbarSection justify="center">
        <Logo />
      </NavbarSection>
      <NavbarSection justify="right">
        {/* <NavbarOption>
          <Text weight="medium" style={{ marginRight: 8 }} color={colors.gray1}>
            Balance:
          </Text>
          <Text weight="medium" color={colors.green}>
            $100,000
          </Text>
        </NavbarOption> */}
        <NavbarOption>
          <Text weight="medium" color={colors.gray1}>
            henryjeff
          </Text>
        </NavbarOption>
        <NavbarOption onClick={signOut}>
          <Icon style={styles.userDropDown} icon="DownArrow" />
        </NavbarOption>
      </NavbarSection>
    </Navbar>
  ) : (
    <Navbar>
      <NavbarSection justify="left">
        <NavbarOption redirectTo="/signin">
          <Text weight="medium">Sign In</Text>
        </NavbarOption>
        <NavbarOption redirectTo="/signup">
          <Text weight="medium">Sign Up</Text>
        </NavbarOption>
      </NavbarSection>
      <NavbarSection justify="center">
        <Logo />
      </NavbarSection>
      <NavbarSection justify="right" />
    </Navbar>
  );
};

const styles: StyleSheet = {
  userDropDown: {
    width: 12,
    paddingTop: 4,
    opacity: 0.5,
  },
};

export default TopNavigation;
