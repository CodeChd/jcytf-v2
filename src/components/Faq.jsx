import { FaPlus, FaMinus } from "react-icons/fa";
import { useCollapse } from "react-collapsed";
import { useState } from "react";

const FaqItems = ({ q, desc }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getToggleProps, getCollapseProps } = useCollapse({
    isExpanded,
  });

  return (
    <div id="faq-container" className="my-3 self-start select-none ">
      <button
        {...getToggleProps({
          style: { display: "block" },
          onClick: () => setExpanded((x) => !x),
          
        })}
        className="bg-orange-600 p-1 rounded-full text-white transition-all mr-4"
      >
        {isExpanded ? (
          <FaMinus className="z-10" />
        ) : (
          <FaPlus className="z-10" />
        )}
      </button>

      <a  {...getToggleProps({
          style: { display: "inline-block" },
          onClick: () => setExpanded((x) => !x),
          
        })} className="text-[1.3rem] font-extrabold font-gilLight">{q}</a>


      <div {...getCollapseProps({ style: { backgroundColor: "#f1f5f9" } })} className="rounded-md my-4">
        <p  className="p-3 text-lg font-gilLight font-extrabold transition-all">
          {desc}
        </p>
      </div>

    </div>
  );
};

const Faq = ({ id }) => {
  return (
    <section id={id} className="py-[3.84rem] w-full min-h-[80vh] ">
      <div className="bg-[#d97706] text-white text-center py-10">
        <div className=" flex flex-col gap-2">
          <h2 className="xs:text-3xl md:text-4xl xxl:text-5xl sml:text-6xl text-7xl not-italic font-bold font-gil self-center border-b-4 py-2 mb-2 border-white">
            JCYTF CHURCH FAQ
          </h2>
          <p className="md:text-[16px] text-center xxl:txt-lg llg:text-xl font-medium">
            Below are Frequently Asked Questions on Our Church
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto pt-14 px-8 flex flex-col items-center ">
        <h3 className="uppercase  md:text-2xl text-3xl font-gil border-solid border-b-4 border-orange-600 mb-8">
          Questions
        </h3>

        <FaqItems
          q="How can I get to the church?"
          desc="To find directions to our church, you can check the address at the
            bottom of our page or visit our About page
            where you will find a map showing our location."
        />

        <FaqItems
          q="Do you have programs for children and youth?"
          desc="Yes, we offer programs for children and youth. Our organization recognizes the importance of providing opportunities for young people to learn and grow, and we have developed a variety of programs tailored to different age groups and interests. Please check out our 'Connect' Page or contact us directly for more information on our youth programs."
        />

        <FaqItems
          q="How can I get involved in the church community?"
          desc="Join a small group or Bible study, volunteer for service projects, or participate in our social events and activities. We welcome everyone, regardless of their background or beliefs, to join us in building a community of faith and love. Please visit our 'About' page and click the 'New Here' button to learn more about how you can get involved. Alternatively, you can visit our 'Partners' page if you would like to become a partner. You can also speak with a church pastor to learn more about how you can make a difference in our community.."
        />
        <FaqItems
          q="How can I contact the church staff or pastor?"
          desc="To contact us, you can visit the 'Pastors' section of our website's Homepage and click the email button to get in touch with our church pastors. Alternatively, you can visit our 'About' page and click the 'New Here' button to access our form. You can also click the floating message icon in the lower right corner of your screen to speak with our staff"
        />
        <FaqItems
          q="How can I donate or contribute to the church?"
          desc="To donate to our church, you can visit the 'Give' page on our website to find our GCash account information. Alternatively, you can join us in person and feel free to place your offering in one of our offering basket "
        />
        <FaqItems
          q="Are there any small groups or Bible study sessions?"
          desc="Our church offers a variety of programs,  which you can find on our 'Connect' page. Please visit the 'Life Group' section for more information and to learn how you can get involved. If you have further questions, please click the 'Join Group' button there will be our contact form to notify our church staff." 
        />
        <FaqItems
          q="Is there childcare available during services?"
          desc="To learn more about our services, please visit the 'Connect' page on our website. You can find a list of our services in 'Ministries' section at the bottom of the page. If you have further questions, please click the 'Join Us' button to access our contact form."
        />
        <FaqItems
          q="Are there any events or upcoming activities?"
          desc="Yes, we have a variety of events and activities where you can visit in our 'Events' Page to know about upcoming events. Please contact us in 'About' Page then click 'New here' you will be directed to our contact form there or the floating message icon on your lower right side of the screen, to learn about upcoming events and how you can get involved."
        />
        <FaqItems
          q="How can I join the church membership?"
          desc="Joining our church membership is easy! Please contact us in 'About' Page or speak with a church pastor to find out more info or if you want to get response quickly please click the floating message icon on the lower right side of your screen to speak with our staff directly"
        />
        <FaqItems
          q="Can I request prayer or seek pastoral counseling?"
          desc="To request prayer or counseling, you can contact us through our 'About' page, speak with a church pastor, or click the floating message icon on the lower right side of your screen to speak with one of our staff members. We offer prayer support and pastoral counseling services to guide and support you in your spiritual journey. We welcome everyone, regardless of their background or beliefs, to seek our support. "
        />
     
      </div>
    </section>
  );
};

export default Faq;
