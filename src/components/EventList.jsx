import EventItem from "./EventItem"

export default function EventList({ events }) {
    return (
        <>
            {events.map((item, index) => {
                return (
                    <EventItem key={index} item={item} />
                )
            })}
        </>
    )
}