"use client";
// import { Reveal } from "@/utils/Reveal";
import React from "react";

const OtherContent = () => {
  const data = [
    {
      heading: "",
      content: "Country refers to: British Columbia, Canada.",
      content2:
        "Device means any device that can access the Service such as a computer, a cellphone or a digital tablet. Personal Data is any information that relates to an identiﬁed or identiﬁable individual.",
    },
    {
      heading: "Service strong refers to the Website",
      content:
        "Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.",
      content2:
        "Third-party Social Media Service refers to any website or any social network website through which a User can log in or create an account to use the Service.",
      content3:
        "Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).",
    },
    {
      heading: "Website refers to Pulse, accessible from pulse",
      content:
        "You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable. Collecting and Using Your Personal Data Types of Data Collected Personal Data While using Our Service, We may ask You to provide Us with certain personally identiﬁable information that can be used to contact or identify You. Personally identiﬁable information may include, but is not limited to: Email address First name and last name Phone number Usage Data Usage Data Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device is Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identiﬁers and other diagnostic data.",
      content2:
        "Information from Third-Party Social Media Services The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services: Google Facebook Twitter If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service is account, such as Your name, Your email address, Your activities or Your contact list associated with that account. You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service is account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy. ",
      content3:
        "Flash Cookies. Certain features of our Service may use local stored objects (or Flash Cookies) to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies. Web Beacons. Certain sections of our Service and our emails may contain small electronic ﬁles known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity). Cookies can be Persistent; Session; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go ofﬂine, while Session Cookies are deleted as soon as You close Your web browser. You can learn more about cookies here: All About Cookies by TermsFeed We use both Session and Persistent Cookies for the purposes set out below: Necessary / Essential Cookies Type: Session Cookies Administered by: Us",
    },
    {
      heading: "Purpose",
      content:
        "These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.",
      content2:
        "For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.",
      content3:
        "Use of Your Personal Data The Company may use Personal Data for the following purposes: To provide and maintain our Service, including to monitor the usage of our Service.",
      content4:
        "To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.",
      content4:
        "For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.",
      content5:
        "To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application is push notiﬁcations regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation. To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.",
      content6:
        "For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.",
      content7:
        "For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience. We may share Your personal information in the following situations: With Service Providers:We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.",
    },
    {
      heading: "Affiliates",
      content:
        "We may share Your information with Our afﬁliates, in which case we will require those afﬁliates to honour this Privacy Policy. Afﬁliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.",
      content2:
        "With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions. With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, proﬁle, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your proﬁle.",
      content3:
        "Retention of Your Personal Data The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.",
      content4:
        "The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.",
      content4:
        "Transfer of Your Personal Data Your information, including Personal Data, is processed at the Company’s operating ofﬁces and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction. Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer. The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information. Disclosure of Your Personal Data Business Transactions If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.",
      content5:
        "Security of Your Personal Data The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.  Children is Privacy Our Service does not address anyone under the age of 13. We do not knowingly collect personally identiﬁable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without veriﬁcation of parental consent, We take steps to remove that information from Our servers.",
      content6:
        "Links to Other Websites Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party’s site. We strongly advise You to review the Privacy Policy of every site You visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.",
      content7:
        "Changes to this Privacy Policy We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page. We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the “Last updated” date at the top of this Privacy Policy.",
      content8:
        "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
      content9:
        "Contact Us If you have any questions about this Privacy Policy, You can contact us: By email: hi@pulsemarketing.io. By visiting this page on our website: www.pulsemarketing.io/contact",
    },
  ];

  return (
    <React.Fragment>
      {data.map((item, index) => (
        <div
          key={index._id}
          style={{
            backgroundImage: "url('/images/app_page_images/radial.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="mx-auto flex flex-col items-center justify-center gap-3 px-6 py-0 text-center md:w-[70%] md:px-0"
        >
          {" "}
          <h2 className="text-xl font-bold tracking-wide md:text-4xl">
            {item.heading}
          </h2>
          <p>{item.content}</p>
          <p>{item.content2}</p>
          <p>{item.content3}</p>
          <p>{item.content4}</p>
          <p>{item.content5}</p>
          <p>{item.content6}</p>
          <p>{item.content7}</p>
          <p>{item.content8}</p>
          <p>{item.content9}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default OtherContent;
