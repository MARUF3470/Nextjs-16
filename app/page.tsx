import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { IEvent } from "@/database";
const Base_url = process.env.NEXT_PUBLIC_BASE_URL
export default async function Home() {
  const response = await fetch(`http://localhost:3000/api/events`)
  const { events } = await response.json();
  return (
    <section>
      <h1 className="text-center">The Hub for Every Dev <br /> Event You Can't Miss</h1>
      <p className="text-center mt-5">Hackathon, Meetups, and Conferences, All in one place</p>
      <div className="flex justify-center">
        <ExploreBtn />
      </div>
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {
          events && events.length > 0 &&  events.map((event:IEvent) => (
              <EventCard key={event.title} {...event} />
            ))
          }
        </ul>
      </div>
    </section>
  );
}
