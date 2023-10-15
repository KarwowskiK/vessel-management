import { ColDef } from "ag-grid-community";

export const columnDefs: ColDef[] = [
  { field: 'name' , headerName: 'Name', flex: 1 },
  { field: 'mmsi', headerName: 'Mmsi', flex: 1 },
  { field: 'imo', headerName: 'Imo', flex: 1 },
  { field: 'companyName', headerName: 'Company Name', flex: 1 },
  { field: 'vesselType', headerName: 'Vessel Type', flex: 1 }
];
