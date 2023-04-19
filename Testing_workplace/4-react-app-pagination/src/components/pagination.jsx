import React from 'react';
import _ from "lodash";

const Pagination = ({itemsCount,pageSize,currentPage,onPageChange}) => {
  const pageCount = Math.ceil(itemsCount / pageSize) // кол-во страниц
  const pages = _.range(1, pageCount + 1) // массив страниц
  // если кол-во страниц = 1, убираем пагинацию
  if (pageCount === 1) return null

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            className={"page-item" + (currentPage===page?' active':'')}
            key={'page_'+page}
          >
            <button
              className="page-link"
              onClick={()=>onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
 
export default Pagination;