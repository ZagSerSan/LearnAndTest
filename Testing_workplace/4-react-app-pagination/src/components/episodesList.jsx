import React, { useState, useEffect } from 'react'
// api, utils
import { episodesStartState, fetchAll, fetchYears } from './fakeApi/episodesApi'
import { paginate } from '../utils/paginate'
// components
import Episode from './episode'
import Pagination from './pagination'
import GroupList from './GroupList'

const EpisodesList = () => {
  const [episodes, setEpisodes] = useState(episodesStartState)
  const [years, setYears] = useState([])
  const [filter, setFilter] = useState()
  
  const [currentPage, setCurrentPage] = useState(1)
  const counter = episodes.length
  const pageSize = 6 // кол-во элем на странице

  // Функция для получения эпизодов
  const getEpisodes = (year) => {
    // Вернет все эпизоды, фильтрация пока не работает
    fetchAll(year).then((response) => setEpisodes(response))
    setCurrentPage(1)
  }
  // Запрашиваем список эпизодов когда меняется фильтр
  useEffect(()=>{
    getEpisodes(filter)
  },[filter])

  useEffect(() => {
    fetchYears().then((response) => setYears(response))
  }, [])

  const handleFilterChange = (filter) => {
    setFilter(filter)
  }
  // функция очистка фильтра
  const cleanFilter = () => {
    setFilter()
  }

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const episodCorp = paginate(episodes, currentPage, pageSize)

  return (
    <div className="container pt-2" style={{ paddingTop: '15px' }}>
      <div className="row">
        <div className="col-4">
          <GroupList 
            items={years}
            filter={filter}
            valueProperty="id"
            contentProperty="text"
            onFilterChange={handleFilterChange}
            onCleanFilter={cleanFilter}
          />
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
