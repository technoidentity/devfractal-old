import {
  Checkbox,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core'
import React from 'react'

interface GroupPreferencesProps {
  readonly groups: readonly string[]
}

// const StyledToolbar: any = makeStyles((theme: any) => ({
//   Toolbar: {
//     backgroundColor: theme.palette.grey,
//   },
// }))(Toolbar)

export const GroupPreferences: React.FC<GroupPreferencesProps> = ({
  groups,
}) => {
  return (
    <>
      <Toolbar>
        <Typography>GroupPreferences</Typography>
      </Toolbar>
      <Grid container>
        <Grid item sm={6}>
          <Paper>
            <List>
              <ListItem>
                <ListItemText primary="Available User Groups" />
              </ListItem>
              <Divider />
              {groups.map((group, index) => (
                <>
                  <ListItem>
                    <ListItemIcon key={index}>
                      <Checkbox />
                    </ListItemIcon>
                    <ListItemText primary={group} />
                  </ListItem>
                </>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper>
            <List>
              <ListItemText primary="Selected User Groups" />
              <Divider />
              <ListItemText primary="PMM Group" />
            </List>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
