import Map from "@/Loc/Map"

const DEFAULT_CENTER = [14.709175571906982  , 121.0994340561237]

const Mapa = () => {
  return (
    
    <Map width="500" height="100" center={DEFAULT_CENTER} zoom={12}>
    {({ TileLayer, Marker, Popup }) => (
      <>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://cjfrancisco.vercel.app&quot;>CJ</a> Developer"
        />
        <Marker position={DEFAULT_CENTER}>
          <Popup>
          Jesus Christ Yesterday Today and Forever Church.
          </Popup>
        </Marker>
      </>
    )}
  </Map>
  )
}

export default Mapa