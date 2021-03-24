import React, { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Link from 'next/link';
import styled from 'styled-components';
import { UserSession } from '../lib/slice/userModule';

const LinkButton = styled(Button)`
  color: white;
`;

const StyledNav = styled.nav`
  max-width: 42rem;
  margin-left: auto;
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 0;
  padding-left: 0;
`;

const StyledListItem = styled.li`
  margin-right: 1rem;
`;

const TitleTypography = styled((props) => <Typography {...props} variant="h5" />)`
  flex-grow: 1;
  cursor: pointer;
`;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

type Props = {
  userSession: UserSession | null;
};

const Header: FC<Props> = ({ userSession }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <div>
            <Link href="/" passHref>
              <TitleTypography>ApplicationTitle</TitleTypography>
            </Link>
          </div>
          <StyledNav>
            <StyledList>
              <StyledListItem>
                <Link href="/about" passHref>
                  <LinkButton>About</LinkButton>
                </Link>
              </StyledListItem>
              {userSession ? (
                <>
                  <StyledListItem>
                    <Link href="/user/profile" passHref>
                      <LinkButton>UserProfile</LinkButton>
                    </Link>
                  </StyledListItem>{' '}
                  <StyledListItem>
                    <Link href="/user/setting" passHref>
                      <LinkButton>UserSetting</LinkButton>
                    </Link>
                  </StyledListItem>{' '}
                  <StyledListItem>
                    <Link href="/api/authz/logout" passHref>
                      <LinkButton>Logout</LinkButton>
                    </Link>
                  </StyledListItem>
                  <StyledListItem>
                    <Avatar alt={userSession?.user?.nickname} src={userSession?.user?.picture} />
                  </StyledListItem>
                </>
              ) : (
                <>
                  <StyledListItem>
                    <Link href="/api/authz/login" passHref>
                      <LinkButton>Login</LinkButton>
                    </Link>
                  </StyledListItem>
                </>
              )}
            </StyledList>
          </StyledNav>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
