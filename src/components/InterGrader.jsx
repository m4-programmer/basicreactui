import React from 'react'
import { internsData } from '../data'

const InterGrader = () => {
  return (
    <div class="container">
		<table class="table table-bordered table-hover">
			<tr>
				<th>Interns name</th>
				<th>Picture</th>
				<th>Info</th>
				<th>Total Grade</th>
              </tr>
              {internsData.map((props) => {
                  return <tr>
				<td>{props.name}</td>
				<td><img src={props.image} className="img img-responsive" height="100" /></td>
				<td>{props.info}</td>
				<td>{props.grade}</td>
			</tr>
              })}
			
		</table>
	</div>
  )
}

export default InterGrader