import React, { useState } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import './global.css';
import Theme from './Theme';
import Routes from './routes/routes';
import { SectionsProvider } from './context/Sections';
import DataContext from './context/Data';
import api from './services/api';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem('loggedUser')) || {});
  const [school, setSchool] = useState(JSON.parse(localStorage.getItem('school')) || {});
  const [classrooms, setClassrooms] = useState(JSON.parse(localStorage.getItem('classrooms')) || []);
  const [fetchingData, setFetchingData] = useState(false);
  const [picture, setPicture] = useState(localStorage.getItem('picture') || '');
  const [tickets, setTickets] = useState([]);

  const handleLogin = async ({ email, password, picture, name }, cb) => {
    try {
      let response
      if (password)
        response = await api.post('/sessions', {
          email,
          password
        });
      else
        response = await api.post('/sessions', {
          email,
          username: name
        });
      
      const { data: { user, school, token: { token } }, status } = response;

      localStorage.setItem('token', token);
      localStorage.setItem('loggedUser', JSON.stringify(user));
      setToken(token);
      setLoggedUser(user);
      if (school) {
        localStorage.setItem('school', JSON.stringify(school));
        setSchool(school);
      }

      if (picture) {
        localStorage.setItem('picture', picture);
        setPicture(picture)
      }

      cb(status)
    } catch (error) {
      cb(null, error)
    }
  }

  const handleLogout = () => {
    setToken('');
    setLoggedUser({});
    setSchool({});
    setClassrooms([]);
    setTickets([]);
    localStorage.removeItem('token');
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('school');
    localStorage.removeItem('picture');
    delete api.defaults.headers.common['Authentication'];
  }

  const fetchClassrooms = async () => {
    setFetchingData(true);
    const { data } = await api.get(`/schools/${school.id_hash}/classrooms`,{
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    });
    setClassrooms(data)
    setFetchingData(false);
  }

  const subscribeUserToSchool = async(school_id_hash, cb) => {
    try {
      const response = await api.post(`/user_schools`, {
        user_id: loggedUser.id,
        school_id_hash
      }, {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      });

      if (response.status === 201) {
        getAuthUserSchool();
      }

      cb(response);
    } catch (error) {
      cb(null, error);
    }
  }

  const getAuthUserSchool = async(cb) => {
    try {
      const response = await api.get(`/user_schools`, {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        localStorage.setItem('school', JSON.stringify(response.data));
        setSchool(response.data)
      }

      if (cb)
        cb(response);
    } catch (error) {
      cb(null, error)
    }
  }

  const handleSaveTicket = async({ title, description, classroom, agreement }, cb) => {
    const { id: classroom_id, slug } = classrooms.find(c => c.identifier === classroom);

    try {
      const response = await api.post(`/schools/${school.id_hash}/classrooms/${slug}/tickets`, {
        classroom_id,
        user_id: loggedUser.id,
        title,
        description
      }, {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      });

      if (cb)
        cb(response);
    } catch (error) {
      cb(null, error);
    }
  }

  const fetchTickets = async(cb) => {
    try {
      const response = await api.get(`/schools/${school.id_hash}/tickets`, {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      });

      setTickets(response.data);
    } catch (error) {
      cb(null, error);
    }
  }

  const fetchTicketsPerClassroom = async(classroomSlug, cb) => {
    try {
      const response = await api.get(`/schools/${school.id_hash}/classrooms/${classroomSlug}/tickets`, {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      });

      if (cb)
        cb(response)
    } catch (error) {
      cb(null, error);
    }
  }
  
  return(
      <DataContext.Provider value={{
        token,
        loggedUser,
        school,
        classrooms,
        fetchingData,
        picture,
        tickets,
        handleLogin,
        handleLogout,
        fetchClassrooms,
        subscribeUserToSchool,
        getAuthUserSchool,
        handleSaveTicket,
        fetchTickets,
        fetchTicketsPerClassroom
      }}>
        <SectionsProvider>
          <ThemeProvider theme={Theme}>
            <Routes />
          </ThemeProvider>
        </SectionsProvider>
      </DataContext.Provider>
  );
}

export default App;
