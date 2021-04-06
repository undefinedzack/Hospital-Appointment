import {Redirect} from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Timeline from "./TimeLine";

import {ReactComponent as Doc} from '../Images/health-solution.svg'

const Home = () => {

  if (sessionStorage.getItem('jwt')){
    return(
      <>
        <NavigationBar />
        <div className={'container'}>
          <div className={'row'}>

          </div>
        </div>

        <div className={'container mt-5'}>
          <div className={'row'}>
            <div className={'col-12'}>
              <div className={'text-center text-lg-start'} style={{fontFamily: '\'Playfair Display\', serif', fontWeight: '700', fontSize: '40px', color: '#c9a0ff'}}>Book an Appointment</div>
            </div>
          </div>
          <hr />
          <div className={'row'}>

            <div className={'col-7'}>
              <Timeline />
            </div>
            <div className={'col-5 mt-5'}>
              <Doc />
            </div>
          </div>
        </div>
      </>
    )
  }
  return <Redirect to={'/login'} />
}

export default Home