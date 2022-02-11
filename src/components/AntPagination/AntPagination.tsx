import React, { FC } from 'react';
import { Pagination } from 'antd';
import { useDispatch } from 'react-redux';
import { useStateCharacters } from '../../store/selectors';
import { onPageChange } from '../../store/characters/charactersSlise'

import 'antd/es/pagination/style/css';

const AntPagination: FC = () => {
  const dispath = useDispatch();
  const charactersData = useStateCharacters()
  const { maxPages, activePage } = charactersData

  function onChange(pageNumber: number) {
    dispath(onPageChange(pageNumber));
  }


  return (
    <Pagination showQuickJumper
      showSizeChanger={false}
      current={activePage}
      total={maxPages * 10}
      onChange={onChange} />
  );
};

export default AntPagination;
