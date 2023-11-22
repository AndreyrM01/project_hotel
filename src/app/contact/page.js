import Header from "../componets/Header";
import PageHeading from "../componets/PageHeading";
import headingInfo from "../content/HeadingInfo";
import PageHeadingInfo from "../content/PageHeading";
import IconContact from "../componets/IconsFooter";

export default function Contact  (){
    return (
      <>
       <Header
       imgSrc={PageHeadingInfo.Home.imgSrc}
       />
       <PageHeading
       title={headingInfo.Contact.title}
       />
       <IconContact/>
      </>
    )
  }