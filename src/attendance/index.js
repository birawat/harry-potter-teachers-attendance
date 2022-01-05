import React, {useState} from 'react';
import Attendance from './Attendance.component';
import Schedule from './Schedule.component';
import Config from './teacher.config';
import ErrorBoundary from '../ErrorBoundry';
import './Attendance.css';

const MainPage = () => {
    const [value, setValue] = useState('');
    const [assignTeacher, setAssignTeacher] = useState('Severus Snape');
    let { teachers, students } = Config;

    const onTeacherAttendance = (e) => {
       const newData = {...value};
       newData[e.target.id] = e.target.value;
       setValue(newData);

       let index = teachers.findIndex((teach) => (teach.id === e.target.id));
       teachers[index].status = e.target.value;
        
       let availableTeacher = teachers.filter((teach) => (teach.status === 'Present'))
       if (availableTeacher.length > 0) {
            setAssignTeacher(availableTeacher[availableTeacher.length - 1].name);
       } else {
            setAssignTeacher("Not Assigned");
       }
    }

    
    return(
        <ErrorBoundary>
            <div className="MainPage">
                <h1>Schedule Today</h1>
                <div className='Grid'>
                    <div className='ScheduleStyle' test-id="schedule">
                        <Schedule onTeacherAttendance={onTeacherAttendance} value={value} teachers={teachers} />
                    </div>
                    <div className='ScheduleStyle' test-id="attendance">
                        <Attendance  data={value} students={students} assignTeacher={assignTeacher} />
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default MainPage;