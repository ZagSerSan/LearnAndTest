import React, { useState } from 'react'
import { episodes } from './fakeStorage/episodes'
import Episode from './episode'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'

const EpisodesList = () => {
  const counter = episodes.length
  const pageSize = 8 // кол-во элем на странице
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const episodCorp = paginate(episodes, currentPage, pageSize)

  return (
    <div className="container" style={{ paddingTop: '15px' }}>
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
  ) // return
}

export default EpisodesList
