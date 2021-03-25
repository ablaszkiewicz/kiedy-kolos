import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { setEvents } from '../../actions';
import dayjs from 'dayjs';

const ApiCalls = () => {
    const baseURL = 'http://kiedy-kolos-backend.azurewebsites.net/';
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        buildEvents();
    }, []);

    const getResource = async (extensionURL) => {
        const URL = baseURL + extensionURL;

        const response = await fetch(URL);
        const data = await response.json();
        return data.result;
    };

    const getEvents = async () => {
        const events = await getResource(`yearCourses/${id}/events`);
        return events;
    };

    const getSubjects = async () => {
        const subjects = await getResource(`yearCourses/${id}/subjects`);
        return subjects;
    };

    const getTypes = async () => {
        const types = await getResource(`eventTypes`);
        return types;
    };

    const buildEvents = async () => {
        let events = await getEvents();
        let subjects = await getSubjects();
        let types = await getTypes();

        console.log(events);
        console.log(subjects);
        console.log(types);

        let eventsConnected = [];
        for (let event of events) {
            let eventData = {
                date: dayjs(event.date).format('YYYY-MM-DD'),
                subjectLongName: getPropertyFromObjectByID(subjects, event.subjectId, 'name'),
                subjectShortName: getPropertyFromObjectByID(subjects, event.subjectId, 'shortName'),
                type: getPropertyFromObjectByID(types, event.eventTypeId, 'name'),
            };
            eventsConnected.push(eventData);
        }

        console.log(eventsConnected);
        dispatch(setEvents(eventsConnected));
    };

    const buildDayEvents = async () => {};

    const getPropertyFromObjectByID = (array, searchedID, searchedProperty) => {
        for (let object of array) {
            if (object.id == searchedID) {
                return object[searchedProperty];
            }
        }
    };

    return null;
};

export default ApiCalls;
