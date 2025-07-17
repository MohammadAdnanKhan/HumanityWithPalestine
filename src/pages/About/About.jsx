import React from "react";
import {
  WhatsAppOutlined,
  InstagramOutlined,
  XOutlined,
} from "@ant-design/icons";

const About = () => {
  return (
    <div className="bg-base-100 text-white px-4 md:px-16 py-10 space-y-20">
<h1 className="text-5xl font-bold text-left text-[#5C6BC0] mb-10 tinos-bold">
  Who We Are and Why We Stand for Palestine
</h1>

      <div className="flex justify-center">
        <img
          src="https://i.guim.co.uk/img/media/070a48f58b985f23c9b5d38719ae508c04ede0e2/0_133_4000_2400/master/4000.jpg?width=620&dpr=2&s=none&crop=none"
          alt="Palestine"
          className="rounded-lg max-w-full"
        />
      </div>

      {/* Description Section */}
      <div className="max-w-3xl mx-auto text-center text-[#90A4AE]">
        <p className="text-xl">
          Humanity With Palestine is a cause started by college students from Jamia Millia Islamia, New Delhi. At Humanity With Palestine, we have tried to connect with a wide audience, spanning not only across India but also internationally.
          <br /><br />
          We have multiple social media accounts where we actively share important updates, articles, and verified news about the ongoing genocide in Gaza. Our goal is to amplify the voices of Palestinians and bring attention to the injustices that are often ignored by mainstream media.
          <br /><br />
          What began as a few students expressing solidarity has now grown into a small but impactful collective that collaborates with like-minded activists, and curates educational resources to help people better understand the history and context of the Palestinian struggle.
          <br /><br />
          Our work is driven by the belief that silence in the face of oppression is complicity. Through our platform, we aim to inspire others — especially students — to speak up, raise awareness, and advocate for justice and human rights.
          <br /><br />
          We are not affiliated with any political party or organization. Our stance is simple: <b>we stand for humanity, we stand against genocide, we stand with Palestine.</b>
        </p>
      </div>

      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-[#5C6BC0] tinos-bold">Our Mission</h2>
        <p className="text-[#90A4AE] max-w-2xl mx-auto text-xl">
          We aim to amplify the voices of Palestinians and raise awareness about
          the ongoing struggle for justice and liberation. Through information,
          solidarity, and action, we stand against occupation and oppression.
        </p>
      </div>

      <div className="max-w-3xl mx-auto text-center text-[#90A4AE] space-y-4 mt-6 text-xl">
        <p>
          As students and concerned individuals, we believe it is our moral duty to speak out
          against the injustices faced by the people of Gaza. Our mission is not just about
          sharing information, but about sparking conversations, challenging narratives, and
          building a community rooted in empathy and resistance.
        </p>
        <p>
          We organize digital campaigns, create educational content, and collaborate with
          voices from across the world to ensure the stories and experiences of Palestinians
          are not erased. We hope to foster a deeper understanding of the Palestinian cause
          among youth and beyond.
        </p>
        <p>
          Our platform is a space of truth, solidarity, and hope — one where every share,
          post, and conversation brings us closer to justice and liberation.
        </p>
      </div>

      <div className="flex justify-center">
        <iframe
          width="923"
          height="519"
          src="https://www.youtube.com/embed/pw7SIllrPb8"
          title="'I oppose genocide, I support Palestine Action'"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg w-full max-w-5xl"
        ></iframe>
      </div>

      <div className="space-y-12">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8`}
          >
            <img
              src="https://cielhr.com/wp-content/uploads/2020/10/dummy-image.jpg"
              alt={`Member ${index + 1}`}
              className="w-60 h-60 object-cover rounded-xl border-2 border-[#90A4AE]"
            />
            <div className="text-[#90A4AE]">
              <h3 className="text-2xl font-bold text-white mb-2 tinos-bold">
                Member {index + 1}
              </h3>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                accumsan, metus ultrices eleifend gravida, nulla nunc varius
                lectus.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-[#5C6BC0] tinos-bold">Connect with us</h2>
        <div className="flex justify-center gap-4 flex-wrap">
<a
  href="https://instagram.com"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline border-[#D7CCC8] text-[#D7CCC8] hover:bg-[#5C6BC0] hover:text-white flex items-center gap-2"
>
  <InstagramOutlined />
  Instagram
</a>

<a
  href="https://wa.me/yourwhatsapplink"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline border-[#D7CCC8] text-[#D7CCC8] hover:bg-[#5C6BC0] hover:text-white flex items-center gap-2"
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
