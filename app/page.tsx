import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";
export default function Home() {
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
            events.map((event) => (
              <EventCard key={event.title} {...event} />
            ))
          }
        </ul>
      </div>
    </section>
  );
}
