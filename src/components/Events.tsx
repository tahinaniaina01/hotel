import img from "@/assets/images/decorated-pattern-2.svg";
import event1 from "@/assets/images/events-1.png";
import event2 from "@/assets/images/events-2.png";
import event3 from "@/assets/images/events-3.png";

function Events() {
  return (
    <section id="events" className="mb-16">
      <div className="container my-5">
        <div className="w-full flex flex-col items-center my-7">
          <h1 className="text-accent lg:text-6xl mb-3">Events</h1>
          <img src={img} alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="relative group overflow-hidden cursor-pointer">
            <img
              src={event1}
              alt=""
              className="object-cover w-full group-hover:scale-125"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-primary/70 text-secondary p-5">
              <div className="absolute right-8 -top-10 bg-accent w-20 h-20 flex flex-col items-center justify-center rounded-full">
                <h1 className="font-bold text-xl">06</h1>
                <p>MAY</p>
              </div>
              <h1 className="text-xl lg:text-2xl">DECADE NIGHTS</h1>
              <p className="text-lg">Saturday Music Fest - 07:00 PM </p>
            </div>
          </div>
          <div className="relative group overflow-hidden cursor-pointer">
            <img
              src={event2}
              alt=""
              className="object-cover w-full group-hover:scale-125"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-primary/70 text-secondary p-5">
              <div className="absolute right-8 -top-10 bg-accent w-20 h-20 flex flex-col items-center justify-center rounded-full">
                <h1 className="font-bold text-xl">06</h1>
                <p>MAY</p>
              </div>
              <h1 className="text-xl lg:text-2xl">WINE TASTINGS</h1>
              <p className="text-lg">Special Wine Dinner - 09:00 PM </p>
            </div>
          </div>
          <div className="relative group overflow-hidden cursor-pointer">
            <img
              src={event3}
              alt=""
              className="object-cover w-full group-hover:scale-125"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-primary/70 text-secondary p-5">
              <div className="absolute right-8 -top-10 bg-accent w-20 h-20 flex flex-col items-center justify-center rounded-full">
                <h1 className="font-bold text-xl">06</h1>
                <p>MAY</p>
              </div>
              <h1 className="text-xl lg:text-2xl">DECADE NIGHTS</h1>
              <p className="text-lg">Romantic Couple Nights - 06:00 PM </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
