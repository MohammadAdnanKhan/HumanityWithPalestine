import React from "react";
import {
  WhatsAppOutlined,
  InstagramOutlined,
  XOutlined,
} from "@ant-design/icons";
import mission from '../../assets/mission.png';

const About = () => {
  return (
    <div className=" text-white px-4 md:px-16 py-10 space-y-20">
      <h1 className="text-5xl font-bold text-center text-[#5C6BC0] font-serif">
        Who We Are and Why We Stand for Palestine
      </h1>

<div className="flex flex-col lg:flex-row w-full text-white">
  <div className="lg:w-1/2 w-full h-96 lg:h-auto">
    <img
      src="https://i.guim.co.uk/img/media/070a48f58b985f23c9b5d38719ae508c04ede0e2/0_133_4000_2400/master/4000.jpg?width=620&dpr=2&s=none&crop=none"
      alt="Pro-Palestinian protestors"
      className="w-full h-full object-cover cursor-grab rounded-lg "
    />
  </div>

  <div className="lg:w-1/2 w-full p-6 sm:p-10 flex flex-col font-mono justify-center">

    <div className="text-[#90A4AE] space-y-4 cursor-crosshair text-sm sm:text-base leading-relaxed">
      <p>
        <strong>Humanity With Palestine</strong> is a cause started by college students
        from Jamia Millia Islamia, New Delhi. At Humanity With Palestine, we have tried to
        connect with a wide audience, spanning not only across India but also
        internationally.
      </p>
      <p>
        We have multiple social media accounts where we actively share important updates,
        articles, and verified news about the ongoing genocide in Gaza. Our goal is to
        amplify the voices of Palestinians and bring attention to the injustices that are
        often ignored by mainstream media.
      </p>
      <p>
        Alhamdulillah, what began as a few students expressing solidarity has now grown into a small but
        impactful collective that collaborates with like-minded activists and shares
        educational resources to help people better understand the history and context of
        the Palestinian struggle.
      </p>
      <p>
        Our work is driven by the belief that silence in the face of oppression is
        complicity. Through our platform, we aim to inspire others - especially students -
        to speak up, raise awareness, and advocate for justice and human rights.
      </p>
      <p>
        We are not affiliated with any political party or organization. Our stance is
        simple: <strong className="text-[#EE2A35]">We stand for humanity,</strong> <strong className="text-[white]">we stand against genocide,</strong><strong className="text-[#009736]"> we stand with Palestine.</strong>
      </p>
    </div>
  </div>
</div>

      <div className="space-y-10 font-mono">
        <h2 className="text-3xl font-bold font-serif text-left text-[#5C6BC0]">
          What We Do
        </h2>
        <p className="text-xl text-[#90A4AE] max-w-4xl">
          We use our platform to educate, raise awareness, and document the reality of life under occupation. From political discourse to humanitarian stories, we aim to give a voice to the silenced and build global solidarity through knowledge in sha Allah.
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="https://static01.nyt.com/images/2025/04/09/multimedia/09int-gaza-depopulation-01-cmhz/09int-gaza-depopulation-01-cmhz-articleLarge.jpg"
            alt="Political figures"
            className="w-full md:w-1/2 rounded-lg"
          />
          <p className="text-xl text-[#90A4AE]">
            We cover the stances of political figures and governments around the world regarding the genocide. From global diplomacy to regional silence, we track who’s complicit, who’s resisting, and who’s acting.
          </p>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <img
            src="https://www.minnpost.com/wp-content/uploads/2023/10/GazaCityBombing940.png"
            alt="Palestinian struggles"
            className="w-full md:w-1/2 rounded-lg"
          />
          <p className="text-xl text-[#90A4AE]">
            Sharing the struggles of the Palestinian people, from daily hardships to generational trauma. We aim to make everyone aware of their unmoved resilience, their reality, and their right to freedom.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="https://c.files.bbci.co.uk/128CF/production/_129438957_bbcm_palestinian_territories.png"
            alt="News and updates"
            className="w-full md:w-1/2 rounded-lg"
          />
          <p className="text-xl text-[#90A4AE]">
            We regularly share critical pieces of information such as news about ceasefire talks, humanitarian aid, and ongoing diplomatic efforts to keep people informed and engaged with real-time updates.
          </p>
        </div>
      </div>

      <div className="text-[#D7CCC8] px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#5C6BC0] font-serif">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-[#B0BEC5]">
              We aim to amplify the voices of Palestinians and raise awareness about the ongoing
              struggle for justice and liberation. Through information, solidarity, and action,
              we stand against occupation and oppression.
            </p>
            <div className="space-y-4 text-base">
              <p>
                As students and concerned individuals, we believe it is our moral duty to speak out
                against the injustices faced by the people of Gaza. Our mission is not just about
                sharing information, but about sparking conversations, challenging narratives, and
                building a community rooted in empathy and resistance in sha Allah.
              </p>
              <p>
                We organize digital campaigns, create educational content, and collaborate with
                voices from across the world to ensure the stories and experiences of Palestinians
                are not erased. We hope to foster a deeper understanding of the Palestinian cause
                among youth and beyond.
              </p>
              <p>
                Our platform is a space of truth, solidarity, and hope - one where every share,
                post, and conversation brings us closer to justice and liberation.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center h-full">
            <img
              src={mission}
              alt="Free Palestine"
              className="object-contain w-48 h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rfbvaN2coVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-white font-serif">Connect with us</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://www.instagram.com/humanitywith_palestine"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline border-[#D7CCC8] text-[#D7CCC8] hover:bg-[#5C6BC0] hover:text-black flex items-center gap-2"
          >
            <InstagramOutlined />
            Instagram
          </a>

          <a
            href="https://chat.whatsapp.com/JGgUSvZE6PrEuCd6ILR8Ks"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline border-[#D7CCC8] text-[#D7CCC8] hover:bg-[#5C6BC0] hover:text-black flex items-center gap-2"
          >
            <WhatsAppOutlined />
            WhatsApp
          </a>

        </div>
      </div>
    </div>
  );
};

export default About;
