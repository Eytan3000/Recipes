import { CircularProgress } from '@mui/joy';

export default function Loader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50dvh',
      }}>
      <CircularProgress />
    </div>
  );
}
