const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({

    eventName: String,
        image: String,
        price: String
     
});

const Event = mongoose.model('Event', eventSchema);
Event.insertMany([
    {
      eventName: "Birthday Party",
      image: "https://thejarvi.com/wp-content/uploads/2023/01/BIRTH004.jpg",  
      price: "Rs 5000"
    },
    {
      eventName: "Anniversary Celebration",
      image: "https://happiclap.com/wp-content/uploads/2023/07/Premium-Anniversary-2.jpg",  
      price: "Rs 7000"
    },
    {
      eventName: "Wedding",
      image: "https://www.oyorooms.com/blog/wp-content/uploads/2018/02/fe.jpg",  
      price: "Rs 150000"
    },
    {
     eventName: "Professional Meetings",
      image: "https://www.frontsigns.com/wp-content/uploads/2022/01/conference-call-room-design.jpg",  
      price: "Rs 10000"
    },
    {
        eventName: "Social Events",
        image: "https://www.eventguru.com/media/user_Jd8z4L3zGb/2171/difference-between-corporate-events-and-social-events.webp",  
        price: "Rs 10000"
    },
    {
        eventName: "Home decor",
        image: "https://www.qualcondreams.com/in/wp-content/uploads/2019/10/fd97f0c9100644e526c5b84702d53692.jpg",  
        price: "Rs 20000"
    }
  ])
  .then(() => console.log("Data inserted"))
  .catch(err => console.log(err));
  
module.exports = Event;