import cityApi from '../../api/cityApi';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCitiesList } from '../../store/reducers/cityListSlice';

// const cityList = useSelector(state => state.cityList);

//
// export const field = [
//   {
//     name: 'select option',
//     type: 'select',
//     required: true,
//     placeholder: 'Select',
//     options: [
//       { value: 'Kyiv', label: 'Kyiv' },
//       { value: 'Kharkiv', label: 'Kharkiv' },
//       { value: 'Lviv', label: 'Lviv' }
//     ],
//   }
// ]