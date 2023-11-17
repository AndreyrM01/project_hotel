import Attraction from "../componets/DestinyAttraction"
import AttractionInfo from "../content/DestinyAttraction"

export default function Destinies  (){
  return (
    <>
    <Attraction
      title = {AttractionInfo.NewYork.title}
      text = {AttractionInfo.NewYork.text}
      imgSrc = {AttractionInfo.NewYork.imgSrc}
    />
    </>
  )
}