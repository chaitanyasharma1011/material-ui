import TablePagination from '@org/ui/material/TablePagination';
import { TablePagination as MyTablePagination } from '@org/ui/material';

<TablePagination ActionsComponent="div" SelectProps={{ native: true }} />;
<TablePagination
  ActionsComponent="div"
  SelectProps={{ native: true }}
  slots={{
    actions: 'div',
    select: 'div',
  }}
/>;
<TablePagination
  ActionsComponent="div"
  SelectProps={{ native: true }}
  slots={{
    root: 'div',
  }}
  slotProps={{
    root: { 'aria-label': '' },
  }}
/>;
<TablePagination
  ActionsComponent="div"
  SelectProps={{ native: true }}
  slots={{ actions: () => null }}
  slotProps={{ select: { native: false } }}
/>;

<MyTablePagination ActionsComponent="div" SelectProps={{ native: true }} />;

<CustomTablePagination ActionsComponent="div" SelectProps={{ native: true }} />;
