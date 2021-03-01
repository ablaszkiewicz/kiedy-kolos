import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { forceEventsRefresh, setAddEventPopup, setGroup } from '../../actions';
import { getGroups, getCourses, getTypes } from '../API/Api';

const AddEventPopup = () => {
    const date = useSelector((state) => state.chosenDate);
    const dispatch = useDispatch();

    const [courses, setCourses] = useState([]);
    const [groups, setGroups] = useState([]);
    const [types, setTypes] = useState([]);

    const [courseID, setCourseID] = useState(0);
    const [groupID, setGroupID] = useState(0);
    const [typeID, setTypeID] = useState(0);
    const [time, setTime] = useState('12:00');
    const [description, setDescription] = useState('');
    const [password, setPassword] = useState('');

    useEffect(async () => {
        downloadFormData();
    }, []);

    const downloadFormData = async () => {
        const coursesTemp = await getCourses(0);
        setCourses(coursesTemp);
        setCourseID(coursesTemp[0].id);

        const groupsTemp = await getGroups(0);
        setGroups(groupsTemp);
        setGroupID(groupsTemp[0].id);

        const typesTemp = await getTypes(0);
        setTypes(typesTemp);
        setTypeID(typesTemp[0].id);
    };

    const addEvent = async () => {
        console.log('INSIDE ADD EVENT FUNCTION');
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                courseID: courseID,
                groupID: groupID,
                time: time,
                date: date,
                description: description,
                typeID: typeID,
                password: password,
            }),
            mode: 'no-cors', // no-cors, cors, *same-origin
        };
        const response = await fetch(`https://aleksanderblaszkiewicz.pl/kiedykolos/add_event.php`, requestOptions);
        if (response) {
            dispatch(setAddEventPopup(false));
            dispatch(forceEventsRefresh());
        }
    };

    const closePopup = () => {
        dispatch(setAddEventPopup(false));
    };

    const updateCourseID = (e) => {
        setCourseID(e.target.value);
    };

    const updateGroupID = (e) => {
        setGroupID(e.target.value);
    };

    const updateTime = (e) => {
        setTime(e.target.value);
    };

    const updateDescription = (e) => {
        setDescription(e.target.value);
    };

    const updateTypeID = (e) => {
        setTypeID(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleAcceptClick = (e) => {
        e.preventDefault();
        addEvent();
    };

    const handleCloseClick = (e) => {
        e.preventDefault();
        closePopup();
    };

    return (
        <motion.div
            className='modal'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: [0.08, 0.75, 0.21, 0.98] }}
        >
            <motion.div
                className='event-adder'
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ ease: [0.08, 0.75, 0.21, 0.98] }}
            >
                <h2 className='event-adder__title'>Dodawanie wydarzenia {dayjs(date).format('DD/MM/YYYY')}</h2>
                <form className='event-adder__form'>
                    <label className='event-adder__label' htmlFor='subject'>
                        Przedmiot
                    </label>
                    <select className='event-adder__input' id='subject' value={courseID} onChange={updateCourseID}>
                        {courses.map((course) => (
                            <option key={course.id} value={course.id}>
                                {course.name}
                            </option>
                        ))}
                    </select>

                    <label className='event-adder__label' htmlFor='group'>
                        Grupa
                    </label>
                    <select className='event-adder__input' id='group' value={groupID} onChange={updateGroupID}>
                        {groups.map((group) => (
                            <option key={group.id} value={group.id}>
                                {group.name}
                            </option>
                        ))}
                    </select>

                    <label className='event-adder__label' htmlFor='type'>
                        Typ
                    </label>
                    <select className='event-adder__input' id='type' value={typeID} onChange={updateTypeID}>
                        {types.map((type) => (
                            <option key={type.id} value={type.id}>
                                {type.name}
                            </option>
                        ))}
                    </select>

                    <div className='edition__setting'>
                        <label className='edition__label' htmlFor='time'>
                            Godzina
                        </label>
                        <input
                            type='time'
                            id='time'
                            name='time'
                            min='07:00'
                            value='16:00:00'
                            max='21:00'
                            value={time}
                            onChange={updateTime}
                        ></input>
                    </div>

                    <div className='edition__setting'>
                        <label className='edition__label' htmlFor='description'>
                            Opis
                        </label>
                        <textarea
                            id='description'
                            name='description'
                            rows='5'
                            cols='30'
                            placeholder='Tu wpisz opis...'
                            value={description}
                            onChange={updateDescription}
                        ></textarea>
                    </div>

                    <div className='edition__setting submit'>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Hasło'
                            onChange={updatePassword}
                        ></input>
                    </div>

                    <div className='event-adder__buttons'>
                        <button className='event-adder__button--reject' onClick={handleCloseClick}>
                            Anuluj
                        </button>
                        <button className='event-adder__button--accept' onClick={handleAcceptClick}>
                            Utwórz wydarzenie
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default AddEventPopup;