import React from 'react';
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Breadcrumbs,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Category as CategoryIcon,
  People as PeopleIcon,
  Work as WorkIcon,
  ListAlt as ListAltIcon,
  Feedback as FeedbackIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setDrawerOpen(!drawerOpen);
    }
  };

  const navItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Service Categories', icon: <CategoryIcon /> },
    { text: 'Customers', icon: <PeopleIcon /> },
    { text: 'Service Providers', icon: <WorkIcon /> },
    { text: 'Orders Record', icon: <ListAltIcon /> },
    { text: 'Feedback', icon: <FeedbackIcon /> },
    { text: 'Logout', icon: <LogoutIcon /> },
  ];

  const drawer = (
    <Box>
      <Toolbar>
        {!isMobile && (
          <IconButton onClick={handleDrawerToggle}>
            {drawerOpen ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        )}
      </Toolbar>
      <List>
        {navItems.map(({ text, icon }) => (
          <Tooltip key={text} title={!drawerOpen ? text : ''} placement="right">
            <ListItem button>
              <ListItemIcon>{icon}</ListItemIcon>
              {drawerOpen && <ListItemText primary={text} />}
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Box>
  );

  const serviceProviders = [
    { name: 'Ibtesam', email: 'ibetamtahir@gmail.com', phone: '', cut: '', verified: 'No' },
  ];

  const customers = [
    { name: 'Ibtesam', email: 'ibetamtahir@gmail.com', phone: '', verified: 'No' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            SPA Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: drawerOpen && !isMobile ? drawerWidth : 60, flexShrink: 0 }}
        aria-label="menu"
      >
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerOpen && !isMobile ? drawerWidth : 60,
              overflowX: 'hidden',
              transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
              whiteSpace: 'nowrap',
              boxSizing: 'border-box'
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
          <Typography color="text.primary">Dashboard</Typography>
        </Breadcrumbs>

        <Typography variant="h5" gutterBottom>Overview</Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
          <Paper sx={{ flex: 1, p: 2, minWidth: '200px' }}>Service Providers</Paper>
          <Paper sx={{ flex: 1, p: 2, minWidth: '200px' }}>Active Customers</Paper>
          <Paper sx={{ flex: 1, p: 2, minWidth: '200px' }}>Total Orders</Paper>
        </Box>

        <Typography variant="h6" gutterBottom>Service Providers</Typography>
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Cut %</TableCell>
                <TableCell>Is Verified</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {serviceProviders.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.cut}</TableCell>
                  <TableCell>{row.verified}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box sx={{ textAlign: 'right', p: 1 }}>
            <Button variant="contained">See More</Button>
          </Box>
        </TableContainer>

        <Typography variant="h6" gutterBottom>Customers</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Is Verified</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.verified}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box sx={{ textAlign: 'right', p: 1 }}>
            <Button variant="contained">See More</Button>
          </Box>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;