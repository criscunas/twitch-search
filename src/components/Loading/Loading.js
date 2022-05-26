import './Loading.scss';
import { CircularProgress } from '@material-ui/core';

export const Loading = () => {
  return (
    <div className='loading'>
      <CircularProgress color='primary'/>
    </div>
  )
}