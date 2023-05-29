import Eventspage from '@/scenes/Eventspage'

const index = ({evt}) => {
  return (
    <Eventspage eventsData={evt}/>
  )
}

export default index


export async function getServerSideProps() {
    //fetch events
    const res = await fetch(
     "https://jcytfchurch.000webhostapp.com/api.php"
    );
    const evt = await res.json();
  
    return {
      props: { evt },
    };
  }