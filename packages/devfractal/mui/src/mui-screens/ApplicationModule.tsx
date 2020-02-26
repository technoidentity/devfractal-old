import {
  AppBar,
  createStyles,
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
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'

export interface ApplicationModule {
  readonly moduleName: string
  readonly noOfUserGroups: string
  readonly noOfUser: string
}

export interface ApplicationModuleProps {
  readonly modules: readonly ApplicationModule[]
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
  const options: string[] = [
    'Edit permissions',
    'Add user',
    'View Details',
    'Add User Group',
  ]

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

export const ApplicationModule: React.FC<ApplicationModuleProps> = ({
  modules,
}) => {
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
            <Link href="#" color="textSecondary" className={classes.Link}>
              User
            </Link>{' '}
            <Link href="#" color="textSecondary" className={classes.Link}>
              User Groups
            </Link>
            <Link
              href="#"
              color="textSecondary"
              className={classes.Link}
              underline="always"
            >
              Application Access
            </Link>
          </Typography>
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
              <StyledTableCell>Module Name</StyledTableCell>
              <StyledTableCell>No. of User</StyledTableCell>
              <StyledTableCell>No. of UserGroups</StyledTableCell>
              <StyledTableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {modules.map((module, index) => (
              <>
                <TableRow key={index}>
                  <TableCell>{module.moduleName}</TableCell>
                  <TableCell>{module.noOfUser}</TableCell>
                  <TableCell>{module.noOfUserGroups}</TableCell>
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
        count={modules.length}
        page={page}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
