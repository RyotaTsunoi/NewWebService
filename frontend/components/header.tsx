import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Link from 'next/link';
import { useUser } from '../lib/user';
import styled from 'styled-components';

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
      flexGrow: 1
    }
  })
);

export default function Header() {
  const classes = useStyles();
  const { user, loading } = useUser();
  console.log(user);

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
              {!loading &&
                (user ? (
                  <>
                    <StyledListItem>
                      <Link href="/profile" passHref>
                        <LinkButton>Profile</LinkButton>
                      </Link>
                    </StyledListItem>{' '}
                    <StyledListItem>
                      <Link href="/api/logout" passHref>
                        <LinkButton>Logout</LinkButton>
                      </Link>
                    </StyledListItem>
                    <StyledListItem>
                      <Avatar alt={user.nickname} src={user.picture} />
                    </StyledListItem>
                  </>
                ) : (
                  <>
                    <StyledListItem>
                      <Link href="/api/login" passHref>
                        <LinkButton>Login</LinkButton>
                      </Link>
                    </StyledListItem>
                  </>
                ))}
            </StyledList>
          </StyledNav>
        </Toolbar>
      </AppBar>
    </div>
  );
}
