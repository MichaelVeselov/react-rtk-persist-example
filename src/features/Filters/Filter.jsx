import { useSelector, useDispatch } from 'react-redux';

import { setFilter, selectActiveFilter } from './filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);

  const handleFilter = (value) => dispatch(setFilter(value));

  return (
    <div>
      <button
        style={{
          backgroundColor: activeFilter === 'all' ? 'peru' : 'lightgray',
        }}
        onClick={() => handleFilter('all')}
      >
        all
      </button>
      <button
        style={{
          backgroundColor: activeFilter === 'active' ? 'peru' : 'lightgray',
        }}
        onClick={() => handleFilter('active')}
      >
        active
      </button>
      <button
        style={{
          backgroundColor: activeFilter === 'completed' ? 'peru' : 'lightgray',
        }}
        onClick={() => handleFilter('completed')}
      >
        completed
      </button>
    </div>
  );
};
