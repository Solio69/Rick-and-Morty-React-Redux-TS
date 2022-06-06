import React, { FC } from 'react';
import { Radio, Button } from 'antd';
import 'antd/es/input/style/css';

interface FiltersProps{
  changeFilterOptions:(filterName:any, filterValue:any)=>void
}

const Filters: FC<FiltersProps> = ({changeFilterOptions}) => {
  const [status, setStatus] = React.useState(null);
  const [gender, setGender] = React.useState(null);

  const onChangeStatus = (e:any) => {
    setStatus(e.target.value);
    changeFilterOptions('status', e.target.value)
  };

  const onChangeGender = (e:any) => {
    setGender(e.target.value);
    changeFilterOptions('gender', e.target.value)
  };

  const resetFilters =()=>{
    setGender(null);
    setStatus(null);
    changeFilterOptions('gender', null)
    changeFilterOptions('status', null)
  }

  return (
  <>
    <Radio.Group onChange={onChangeStatus} value={status} >
      <span>Status: </span>
      <Radio value='alive'>Alive</Radio>
      <Radio value='dead'>Dead</Radio>
      <Radio value='unknown'>Unknown</Radio>
    </Radio.Group>

    <Radio.Group onChange={onChangeGender} value={gender}>
      <span>Gender: </span>
      <Radio value='female'>Female</Radio>
      <Radio value='male'>Male</Radio>
      <Radio value='genderless'>Genderless</Radio>
    </Radio.Group>

    <Button type="primary" onClick={resetFilters}>Reset filters</Button>
  </>
  );
};

export default Filters;
