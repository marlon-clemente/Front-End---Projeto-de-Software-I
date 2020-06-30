import React, {useState, useContext, useEffect} from 'react';
import AppBar from '../../component/AppBarUser';
import Styles from './styles';
import Fab from '@material-ui/core/Fab';
import AddCommentIcon from '@material-ui/icons/AddComment';

import { useSections } from '../../context/Sections';
import ToSchool from './Sections/toSchool';
import BoxMsg from './Sections/boxMsg';
import BoxNoMsg from './Sections/boxNoMsg';
import NewMsg from './Sections/newMsg';

import DataContext from '../../context/Data';

export default function Home() {
  const classes = Styles();
  const { tickets, fetchTickets, school } = useContext(DataContext);
  const { currentSections, setCurrentSections } = useSections();
  
  const [error, setError] = useState({});
  const [loading, setloading] = useState(true);

  const loadInfos = () => {
    fetchTickets({}, (res, error) => {
      if (error) {
        setError(error);
        return;
      }

      setloading(false);
    });
  }
  
  useEffect(() => {
    if (currentSections === 'voltar' || currentSections === ' ')
      loadInfos();
  }, [currentSections]);

  setInterval(() => {
    loadInfos();
  }, 60000);

  const handleFab = () => {
    setCurrentSections("newMsg");
  }

  return (
    <div className={classes.root}>
      <AppBar/>
      <div className={classes.content}>
      {loading ? (<div className={classes.load}>Aguarde...</div>) : (
        <>
          {
            currentSections === 'newMsg' ? (<NewMsg />) : (
              <>
                { 
                  tickets.length 
                  ? (<BoxMsg tickets={tickets}/>)
                  : !tickets.length && Object.keys(school).length 
                    ? (<BoxNoMsg error={error}/>) 
                    : !tickets.length && !Object.keys(school).length
                      ? (<ToSchool/>) 
                      : (<></>)    
                }
              </>
            )
          }
        </>
      )}
      
      { 
        currentSections !== 'newMsg' || (!tickets.length && !Object.keys(school).length) 
        ? <Fab
            color="secondary"
            className={classes.fab}
            onClick={handleFab}
            aria-label="add"
          >
            <AddCommentIcon />
          </Fab>
        : <></>
      }
    </div></div>
  )
}