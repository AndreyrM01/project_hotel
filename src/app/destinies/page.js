import Attraction from "../componets/DestinyAttraction"
import AttractionInfo from "../content/DestinyAttraction"
import HotelAttraction from "../componets/HotelAttraction"
import HAttractionInfo from "../content/HotelAttraction"

export default function Destinies  (){
  return (
    <>
    <Attraction
      title = {AttractionInfo.NewYork.title}
      text = {AttractionInfo.NewYork.text}
      imgSrc = {AttractionInfo.NewYork.imgSrc}
    />
    <HotelAttraction
      text = {HAttractionInfo.NewYork.text}
      imgSrc = {HAttractionInfo.NewYork.imgSrc}
    />
    </>
  )
}