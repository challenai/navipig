import React from 'react';
// import {Counter} from './features/counter/Counter';
import useMediaQuery from '@mui/material/useMediaQuery';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import './App.css';
import Demo from './page/table';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Box>
          <Card sx={{width: 240, height: 600, marginRight: 1, padding: 2, backgroundColor: "rgba(0,0,0,0)", border: "1px solid rgba(81, 81, 81, 1)"}} variant="outlined">
            <div>select a table to open:</div>
            <div style={{maxWidth: 130, marginLeft: 30, marginTop: 10}}>
              <TreeView
                aria-label="选择表"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto', textAlign: 'left'}}
              >
                <TreeItem nodeId="10" label="application">
                  <TreeItem nodeId="12" label="user" />
                  <TreeItem nodeId="13" label="book" />
                  <TreeItem nodeId="14" label="article" />
                </TreeItem>
                <TreeItem nodeId="20" label="system">
                </TreeItem>
                <TreeItem nodeId="30" label="setting">
                  <TreeItem nodeId="31" label="preference" />
                </TreeItem>
              </TreeView>
            </div>
          </Card>
        </Box>
        <Demo />
        {/*   <Counter /> */}
      </div>
    </ThemeProvider >
  );
}

export default App;
