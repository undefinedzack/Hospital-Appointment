import {useState, useEffect} from "react";
import axios from "axios";

import TimelineItem from "./TimeLineItem";

const Timeline = () => {
  const [timelineData, setTimelineData] = useState()
  useEffect(() => {


    const fetchData = async () => {
      await axios.post('https://hospital-undefinedzack.herokuapp.com/api/appointments/getReservations', {
        date: "Mon Apr 5 2021"
      })
        .then(res => setTimelineData(res.data['appointments']))
        .then(console.log(timelineData))
    }
    fetchData()
  }, [])

  return (
    <>
      {timelineData && (
        <div className="timeline-container">
          {console.log('im here', timelineData)}
          {timelineData.map((data, idx) => (
            <TimelineItem data={data['appointments'][0]} key={idx}/>
          ))}
        </div>
      )}
    </>
  )
}

export default Timeline
