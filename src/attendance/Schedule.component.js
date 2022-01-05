import React from 'react';
import ErrorBoundary from '../ErrorBoundry';

const Schedule = ({ teachers, onTeacherAttendance, value }) => {
 return (
        <ErrorBoundary>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className='Header'>Teacher</th>
                            <th className='Header'>Attendence</th>
                        </tr>
                    </thead>
                    <tbody>
                        { teachers?.map((row) => {
                            return (
                                <tr key={row.id}> 
                                    <td className='LeftGrid'>{row.name}</td>
                                    <td className='LeftGrid'>
                                        <select name={row.name} id={row.id}  value={Object.keys(value).forEach((key) => key)} onChange={(e) => onTeacherAttendance(e)}>
                                            <option data-testid={`id_${row.id}_Present`}>Present</option>
                                            <option data-testid={`id_${row.id}_Absent`}>Absent</option>
                                        </select>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>                        
                </table>
            </div>
        </ErrorBoundary>
    )
}

export default Schedule;