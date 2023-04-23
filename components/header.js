import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { styled, alpha } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import AutoComplete from './Autocomplete';
import { useRouter } from 'next/router';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));



const Header = () => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  

  return (
    <div className='container-fluid mt-3   d-flex align-items-center  justify-content-between  '>
       <div className='ml-10'>
       {!isHomePage && <button className='btn   h-100' onClick={() => router.back()}> Back</button>}
       </div>
    <div className="d-flex ">
  
      <Box marginRight={2} sx={{ flexGrow: 0 }}>
        <Search>
          <AutoComplete />
        </Search>
      </Box>
  
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          
          <MenuItem>
            <Link href={'/orders'}>
              <Typography textAlign="center">Orders</Typography>
            </Link>
          </MenuItem>
        </Menu>
      </Box>
  
    </div>            
  </div>
  
  
  )
}

export default Header
