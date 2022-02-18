import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';

export default function SingleRowSelectionGrid() {

  return (
    <div style={{height: '600px', width: '900px'}}>
      <DataGrid {...d3} />
    </div>
  );
}

const d3 = {
  "columns": [
    {
      "field": "id",
      "hide": true
    },
    {
      "field": "username",
      "headerName": "username",
      "width": 110
    },
    {
      "field": "code",
      "headerName": "code",
      "width": 180,
      "editable": false
    },
    {
      "field": "addr",
      "headerName": "address",
      "width": 120,
      "editable": false
    },
    {
      "field": "email",
      "headerName": "email",
      "width": 150,
      "editable": false
    },
    {
      "field": "balance",
      "headerName": "balance",
      "type": "number",
      "width": 140,
      "editable": false
    }
  ],
  "rows": [
    {
      "id": "d38107d5-b2ad-5066-a8b5-054bb1ce24d8",
      "code": "D-8102",
      "addr": "Oats",
      "username": "Leona Todd",
      "email": "sac@me.pl",
      "balance": 11632
    },
    {
      "id": "7cba464f-0420-58d7-b41c-6dc4f75a4888",
      "code": "D-2844",
      "addr": "Wheat",
      "username": "Herbert Curry",
      "email": "kemen@va.mn",
      "balance": 65192
    },
    {
      "id": "078b0f31-7c63-5190-8048-5afbc8c3fd58",
      "code": "D-4928",
      "addr": "Cotton No.2",
      "username": "Lewis Marsh",
      "email": "bowvaaj@kumaca.gf",
      "balance": 58390
    },
    {
      "id": "ffa954e5-881a-5626-9711-ea61385c6169",
      "code": "D-1514",
      "addr": "Soybeans",
      "username": "Jerome Sullivan",
      "email": "acofodva@ra.ml",
      "balance": 78903
    },
    {
      "id": "0388c78d-f10c-5fea-b6b1-58975c7f4d7d",
      "code": "D-2464",
      "addr": "Sugar No.14",
      "username": "Hilda Olson",
      "email": "nace@mu.kp",
      "balance": 98921
    },
    {
      "id": "4860e408-718e-55cb-be87-fe2abef86353",
      "code": "D-4060",
      "addr": "Frozen Concentrated Orange Juice",
      "username": "Herman Tran",
      "email": "lojum@iwuibuwa.bt",
      "balance": 68934
    },
    {
      "id": "d1b65085-e2e5-5952-885b-85d6debe48db",
      "code": "D-2883",
      "addr": "Soybeans",
      "username": "Ray Lowe",
      "email": "huckaih@novi.sd",
      "balance": 71657
    },
    {
      "id": "2d67feaa-a416-575a-901d-b331c4f88c86",
      "code": "D-2574",
      "addr": "Soybean Oil",
      "username": "Alejandro Price",
      "email": "zoezunij@zel.tt",
      "balance": 83685
    },
    {
      "id": "fd2cde2a-1d0b-581f-be59-d6276df6a995",
      "code": "D-9544",
      "addr": "Wheat",
      "username": "Calvin Lopez",
      "email": "hobiza@polribruw.om",
      "balance": 88200
    },
    {
      "id": "9d1d1537-7881-5111-bf4c-4cbb4ee52c88",
      "code": "D-3725",
      "addr": "Rapeseed",
      "username": "Harriett Patterson",
      "email": "gegkeli@lig.ca",
      "balance": 66706
    }
  ],
  "initialState": {
    "columns": {
      "columnVisibilityModel": {
        "id": false
      }
    }
  }
}
