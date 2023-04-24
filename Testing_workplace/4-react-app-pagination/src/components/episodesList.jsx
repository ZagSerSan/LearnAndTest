import React, { useState } from 'react'
// api, utils
import { episodes } from './fakeStorage/episodes'
import { paginate } from '../utils/paginate'
// components
import Episode from './episode'
import Pagination from './pagination'
import GroupList from './GroupList'

const EpisodesList = () => {
  const counter = episodes.length
  const pageSize = 8 // кол-во элем на странице
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const episodCorp = paginate(episodes, currentPage, pageSize)

  return (
    <div className="container pt-2" style={{ paddingTop: '15px' }}>
      <div className="row">
        <div className="col-4">
          <GroupList />
        </div>
        <div className='col-8'>
          <div className="row">
            {episodCorp.map((episode) => (
              <Episode key={episode.id} {...episode} />
            ))}
          </div>
          <div className="row">
            <Pagination
              itemsCount={counter}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  ) // return
}

export default EpisodesList
