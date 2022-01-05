import { render, fireEvent, getByTestId, getAllByTestId } from '@testing-library/react';
import {shallow, mount} from 'enzyme';
import MainPage from './index';
import Attendance from './Attendance.component';
import Schedule from './Schedule.component';
import Config from './teacher.config';

test('renders Main Page', () => {
  const MainPageContainer = shallow(<MainPage />);
  expect(MainPageContainer.find('h1').at(0).text()).toEqual("Schedule Today");
});

test('renders Attndance Component', () => {
    const AttendanceContainer = shallow(<Attendance />);
    expect(AttendanceContainer.find('[test-id="attendance"]')).toBeTruthy();
});

test('renders Schedule Component', () => {
    const ScheduleContainer = shallow(<Schedule />);
    expect(ScheduleContainer.find('[test-id="schedule"]')).toBeTruthy();
});

test('onTeacherAttendance ', () => {
    const onTeacherAttendance = jest.fn();
    const event = {
        taget: {
            id: 'snape',
            value: 'Absent'
        }
    }
    const { students, teachers } = Config;
    const ScheduleContainer = render(<Schedule value='' teachers={teachers} onTeacherAttendance={onTeacherAttendance}/>).container;
    const AttendanceContainer = render(<Attendance students={students} />).container;
    const snapeDropdown = getByTestId(ScheduleContainer, "id_snape_Absent");
    const teacher = getByTestId(AttendanceContainer, "assign_teacher_0");
    fireEvent.change(snapeDropdown, event );
    expect(snapeDropdown).toHaveTextContent('Absent');
});
