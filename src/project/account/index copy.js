import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircle from '@material-ui/icons/AccountCircle';
import House from '@material-ui/icons/House';
import Language from '@material-ui/icons/Language';
import Add from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';


/*
 * @Author: wang 
 * @Date: 2019-11-28 17:39:49 
 * @Last Modified by: wang
 * @Last Modified time: 2019-11-28 21:10:21
 */

const useStyles = makeStyles({
  root: {
    width: "100%",
    position:"fixed",
    bottom:0,
  },
  selected:{
    color:"red"
  }
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root } >
       <Divider />
      <BottomNavigationAction label="推荐" value="recents" icon={<House/>} />
      <BottomNavigationAction label="发现" value="favorites" icon={<Language/>} />
      <BottomNavigationAction label="更多" value="favorite" icon={<Add/>} />
      <BottomNavigationAction label="我的" value="nearby" icon={<FolderIcon />} />
      <BottomNavigationAction label="账号" value="folder" icon={<AccountCircle />} />
    </BottomNavigation>
  );
}
