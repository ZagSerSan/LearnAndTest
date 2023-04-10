import React, { useState } from 'react'
import api from '../api'
import 'bootstrap/dist/css/bootstrap.css';

const Users = () => {

  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (id) => {
    setUsers(prevState => prevState.filter(item => item !== id))
  }

  const handlePhrase = (number) => {
    return number !== 0
    ? <h1 style={{fontSize: '24px'}} className='badge bg-primary m-1'>{number} человек тусанет с тобой сегодня</h1>
    : <h1
      style={{fontSize: '24px'}}
      className='badge bg-danger m-1'
      >
        Hикто не тусанет с тобой сегодня
    </h1>
  }

  return ( users.length !== 0 ?
  <> {handlePhrase(users.length)}
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился раз</th>
          <th scope="col">Оценка</th>
          <th scope="col">Удалить</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user =>
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>
              {user.qualities.map(quality => 
                <span className={'badge bg-' + quality.color + ' m-1'}
                >
                  {quality.name}
                </span>)
              }
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate + '/5'}</td>
            <td><button onClick={()=>handleDelete(user)} className='btn btn-danger'>delete</button></td>
          </tr>
          )}
      </tbody>
    </table>
  </> : <>{handlePhrase(users.length)}</>
  )
}

export default Users
