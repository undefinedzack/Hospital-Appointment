const router = require('express').Router()
const Appointment = require('../models/Appointment')

const times = [
  "10:00AM - 10:30AM",
  "10:30AM - 11:00AM",
  "11:00AM - 11:30AM",
  "11:30AM - 12:00AM",
  "12:00PM - 12:30PM",
  "12:30PM - 01:00PM",
  "01:00PM - 01:30PM",
  "01:30PM - 02:00PM",
  "02:00PM - 02:30PM",
  "02:30PM - 03:00PM",
  "03:00PM - 03:30PM",
  "03:30PM - 04:00PM",
  "04:00PM - 04:30PM",
  "04:30PM - 05:00PM",
  "05:00PM - 05:30PM",
  "05:30PM - 06:00PM",
  "06:00PM - 06:30PM",
  "06:30PM - 07:00PM",
  "07:00PM - 07:30PM",
  "07:30PM - 08:00PM",
  "08:00PM - 08:30PM",
  "08:30PM - 09:00PM",
  "09:00PM - 09:30PM",
]

const schedule = []
for (let i = 1; i < 20; i++) {
  if (i % 5 !== 0) {
    if (i%4 !== 0){
      schedule.push(
        {
          "appointments": [{
            "text": times[i-1],
            "date": "Mon Apr 5 2021",
            "category": {
              "tag": "available",
              "color": "#a2ec7b"
            },
            "link": {
              "url": "https://adhney.codes",
              "text": "Book"
            }
          }],
        }
      )
    }
    else{
      schedule.push(
        {
          "appointments": [{
            "text": times[i-1],
            "date": "Mon Apr 5 2021",
            "category": {
              "tag": "booked",
              "color": "#ec235e"
            },
            "link": {

            }
          }],
        }
      )
    }

  } else {
    schedule.push(
      {
        "appointments": [{
          "text": "Break",
          "date": "Mon Apr 5 2021",
          "category": {

            "color": "#ffffff"
          },
          "link": {

          }
        }],
      }
    )
  }

}

router.post('/getReservations', async (req, res) => {
  //check already exists
  const alreadyExists = await Appointment.findOne({date: req.body.date})

  if (alreadyExists) {
    res.send(alreadyExists)
  }

  else{
    const appoint = new Appointment({
      date: req.body.date,
      appointments: schedule
    })
    try {
      const savedAppointment = await appoint.save()
      res.send(savedAppointment)
    } catch (err) {
      res.status(400).send(err)
    }
  }

})
//
// router.post('', async (req, res) => {
//   console.log(req.body)
//   const reservations = await Appointment.findOne({date: req.body.date})
//   res.send(reservations)
// })


module.exports = router