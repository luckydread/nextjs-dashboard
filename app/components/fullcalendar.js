'use client'
import Calendar from '@fullcalendar/react';
import { useRouter } from 'next/navigation'
import dayGrid from '@fullcalendar/daygrid';
import timeGrid from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function FullCalendar(props) {
    const router = useRouter()

function handleDateClick(info) {
   router.push(`/book/?date=${info.dateStr}`)
    // const [date, setDate] = useState("");
    // setDate(info.dateStr)
    //console.log(info.dateStr);
    // alert('Clicked on: ' + info.dateStr);
    // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    // alert('Current view: ' + info.view.type);
    // change the day's background color just for fun
    // info.dayEl.style.backgroundColor = 'red';
}


  return <Calendar 
  plugins={[dayGrid, timeGrid, interactionPlugin]} 
  initialView='dayGridMonth'
  selectable={true}
  dateClick={handleDateClick}
        //themeSystem='bootstrap5'
        
  {...props} />;
}
