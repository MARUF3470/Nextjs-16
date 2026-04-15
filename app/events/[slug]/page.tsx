const EventDetails =async ({params}:{params:Promise<{slug:string}>}) => {
  const { slug } = await params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events/${slug}`)
  const event = await response.json()
  console.log('event______',event)
  return (
    <div>EventDetails: {slug}</div>
  )
}

export default EventDetails