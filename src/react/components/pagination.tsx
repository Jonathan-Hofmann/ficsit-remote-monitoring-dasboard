import { ThemeProvider, createTheme } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';

const materialTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

type Props = {
  count?: number,
  siblingCount?: number,
  boundaryCount?: number,
  onChange?: (event: any, page: number) => any
}

export const JoyPagination: React.FC<Props> = ({
  count,
  siblingCount,
  boundaryCount,
  onChange
}) => {
  return (
    <ThemeProvider theme={materialTheme}>
      <Pagination count={count ? count : 10} siblingCount={siblingCount ? siblingCount : 3} boundaryCount={boundaryCount ? boundaryCount : 2} onChange={onChange ? onChange : console.log}/>
    </ThemeProvider>
  );
}