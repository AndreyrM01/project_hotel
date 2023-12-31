import Header from "../componets/Header";
import PageHeading from "../componets/PageHeading";
import headingInfo from "../content/HeadingInfo";
import PageHeadingInfo from "../content/PageHeading";
import IconContact from "../componets/IconsContact";
import FormBoxes from "../componets/ContactBox";
import Footer from "../componets/Footer";

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
       <FormBoxes/>
       <Footer/>
      </>
    )
  }