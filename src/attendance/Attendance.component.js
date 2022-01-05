import React, {useEffect} from 'react';
import ErrorBoundary from '../ErrorBoundry';
import './Attendance.css';

const Attendance = ({ students, assignTeacher }) => {
    
    return (
        <ErrorBoundary>
            <div>
                <table>
                    <thead>
                        <th className='Header'>Student</th>
                        <th className='Header'>Subject</th>
                        <th className='Header'>Teacher</th>
                    </thead>    
                    <tbody>
                    { students?.map((row, index) => {
                            return (
                                <tr key={row.name}> 
                                    <td className='LeftGrid'>{row.name}</td>
                                    <td className='LeftGrid'>{row.subject}</td>
                                    <td className='LeftGrid' data-testid={`assign_teacher_${index}`} id={row.name} value={assignTeacher} >{ assignTeacher }</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </ErrorBoundary>
    )
}

export default Attendance;