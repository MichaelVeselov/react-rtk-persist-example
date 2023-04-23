import { useDispatch } from 'react-redux';

import { resetToEmpty } from './resetAction';

export const ResetApp = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(resetToEmpty())}>Reset</button>;
};
