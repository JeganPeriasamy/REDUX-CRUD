import React from 'react'

const Table = () => {

    


  return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <button type="button" class="btn btn-primary">Update</button>
      <button type="button" class="btn btn-primary">Delete</button>
    
    </tr>
    
  </tbody>
</table>
    </div>
  )
}

export default Table
