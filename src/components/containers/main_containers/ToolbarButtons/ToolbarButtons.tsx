import React, { useRef, useEffect, useState, useContext } from 'react';
import {
  IconButton,
  MenuItem,
  Paper,
  MenuList,
  Popper,
  Grow,
  ClickAwayListener,
} from '@material-ui/core';
import { AccountCircle as AccoutCircleIcon } from '@material-ui/icons';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BootstrapTooltip from '../../../shared/Tooltip';
import { AuthContext } from '../../../../contexts/AuthContext';
import { AlertContext } from '../../../../contexts/AlertContext';
import './ToolbarButton.css';
import { useHistory } from 'react-router-dom';

export const UserMenu = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const prevOpen = useRef(open);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const routeHistory = useHistory();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
      },
      paper: {
        marginRight: theme.spacing(2),
      },
    }),
  );

  const classes = useStyles();

  function handleToggle(): void {
    setOpen((prevOpenOld) => !prevOpenOld);
  }

  function handleClose(event: React.MouseEvent<EventTarget>): void {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  }

  function handleListKeyDown(event: React.KeyboardEvent): void {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  function logout(): void {
    alertContext.setAlert({
      open: true,
      type: 'success',
      message: 'Realizando Logout...',
    });
    setTimeout(() => {
      localStorage.clear();
      authContext.setToken('');
      authContext.setUsername('');
      authContext.setPermissions('');
      authContext.setRoles('');
      alertContext.setAlert({
        open: false,
      });
      window.location.href = '';
      routeHistory.push('/');
    }, 1000);
  }

  // return focus to the button when we transitioned from !open -> open
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <BootstrapTooltip title={authContext.username} arrow placement="bottom">
          <IconButton
            className="userButton"
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <AccoutCircleIcon />
          </IconButton>
        </BootstrapTooltip>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }): JSX.Element => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={() => routeHistory.push('/user-info')}>
                      Meu Perfil
                    </MenuItem>
                    <div className="divider" />
                    <MenuItem
                      onClick={(event): void => {
                        handleClose(event);
                        logout();
                      }}
                    >
                      Sair
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};
