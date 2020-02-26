import {
  AppBar,
  createStyles,
  Fab,
  IconButton,
  InputAdornment,
  Link,
  makeStyles,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'

export interface User {
  readonly userInfo: string
  readonly supervisor: string
  readonly userGroups: string
  readonly applicationAccess: string
}

export interface UserInfoProps {
  readonly users: readonly User[]
}

const StyledTableCell: any = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.light,
  },
}))(TableCell)

const useStyles: any = makeStyles((theme: any) =>
  createStyles({
    Link: {
      margin: '10px',
    },
    Divider: {
      backgroundColor: theme.palette.primary.light,
    },
  }),
)

export const EditUserInfo: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(undefined)
  const options: string[] = ['Edit permissions', 'View Details', 'Delete User']

  const open: any = Boolean(anchorEl)

  const handleClick: any = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose: any = () => {
    setAnchorEl(undefined)
  }
  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {options.map(option => (
          <MenuItem
            key={option}
            // selected={option === 'Pyxis'}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export const UserInfo: React.FC<UserInfoProps> = ({ users }) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(4)
  const handlePageChange: any = (page: number) => {
    setPage(page)
  }
  const handleChangeRowsPerPage: any = (event: any) => {
    setRowsPerPage(event.target.value)
    setPage(0)
  }

  const classes: any = useStyles()
  return (
    <Paper>
      <AppBar position="static">
        <Toolbar className={classes.Divider}>
          <Typography gutterBottom style={{ flex: 1 }} variant="h6">
            Hi ken, View your application security by{' '}
            <Link
              href="#"
              color="textSecondary"
              underline="always"
              className={classes.Link}
            >
              User
            </Link>{' '}
            <Link href="#" color="textSecondary" className={classes.Link}>
              User Groups
            </Link>
            <Link href="#" color="textSecondary" className={classes.Link}>
              Application Access
            </Link>
          </Typography>
          <Fab size="small">
            <Add />
          </Fab>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search any user"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {' '}
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <br />
      <br />
      {/* <Divider variant="fullWidth" className={classes.Divider} absolute /> */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>User Info</StyledTableCell>
              <StyledTableCell>Supervisor</StyledTableCell>
              <StyledTableCell>User Groups</StyledTableCell>
              <StyledTableCell>Application Access</StyledTableCell>
              <StyledTableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <>
                <TableRow key={index}>
                  <TableCell>{user.userInfo}</TableCell>
                  <TableCell>{user.supervisor}</TableCell>
                  <TableCell>{user.userGroups}</TableCell>
                  <TableCell>{user.applicationAccess}</TableCell>
                  <TableCell>
                    <EditUserInfo />{' '}
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[4, 8]}
        component="div"
        rowsPerPage={rowsPerPage}
        count={users.length}
        page={page}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
