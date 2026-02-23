export default function EventItem({ item }) {

    const today = new Date().toISOString().split("T")[0]

    return (
        <>
            <h1>{item.title}</h1>
            <i>{item.date === today ? "TODAY" : item.date}</i>
            <p>{item.description}</p>
        </>
    )
}