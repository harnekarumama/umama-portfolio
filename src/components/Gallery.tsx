import saharaBooth from "../assets/sahara-booth.webp";
import saharaDemo from "../assets/sahara-demo.webp";
import saharaConversations from "../assets/sahara-conversations.webp";
import saharaTeam from "../assets/sahara-team.webp";
import productDemo from "../assets/product-demo.webp";
import student from "../assets/student.webp";
import pitch from "../assets/pitch.webp";
import schoolKids from "../assets/schoolkids.webp";
import edtechEvent from "../assets/edtech-event.webp";
import learningTogether from "../assets/learning-together.webp";
import djangoAfrica from "../assets/django-africa.webp";

const moments = [
  {
    image: saharaBooth,
    title: "At the Sahara Sparks booth",
    label: "SHOWCASING EDUGAMEZ & EDUGAMEZ KIDS",
    alt: "Umama at an exhibition booth with educational product displays at Sahara Sparks",
    width: 1020,
    height: 768,
    style: "gallery-wide",
  },
  {
    image: saharaDemo,
    title: "The product, in conversation",
    label: "SAHARA SPARKS / PRODUCT DEMONSTRATIONS",
    alt: "Umama demonstrating educational products to a visitor at the Sahara Sparks booth",
    width: 768,
    height: 1020,
    style: "gallery-tall",
  },
  {
    image: saharaConversations,
    title: "Connecting with the ecosystem",
    label: "SAHARA SPARKS / EXHIBITION",
    alt: "Umama and colleagues speaking with an exhibition visitor in front of the Edugamez display",
    width: 1020,
    height: 768,
    style: "gallery-wide",
  },
  {
    image: saharaTeam,
    title: "A shared ambition",
    label: "SAHARA SPARKS / THE PEOPLE BEHIND IT",
    alt: "Umama with fellow participants outside the Sahara Sparks exhibition",
    width: 768,
    height: 1020,
    style: "gallery-tall",
  },
  {
    image: productDemo,
    title: "Bringing ideas off the screen",
    label: "PRODUCT PRESENTATIONS & DEMOS",
    alt: "Umama explaining a digital product to visitors at an exhibition booth",
    width: 1080,
    height: 717,
    style: "gallery-wide",
  },
  {
    image: learningTogether,
    title: "Learning is better together",
    label: "BOOTCAMPS & TECHNOLOGY COMMUNITIES",
    alt: "Umama with fellow participants gathered outside a learning venue",
    width: 1008,
    height: 567,
    style: "gallery-wide",
  },
  {
    image: student,
    title: "A student in the making",
    label: "EDUCATION & LEARNING",
    alt: "Umama with a student during a learning session",
    width: 567,
    height: 1008,
    style: "gallery-tall",
  },
  {
    image: djangoAfrica,
    title: "Part of a bigger community",
    label: "DJANGO AFRICA",
    alt: "Umama standing in front of the DjangoCon Africa event backdrop",
    width: 768,
    height: 1020,
    style: "gallery-tall",
  },
  {
    image: edtechEvent,
    title: "Education meets innovation",
    label: "EDTECH / DEMO DAY",
    alt: "Umama at an EdTech fellowship demo day event",
    width: 765,
    height: 1020,
    style: "gallery-tall",
  },
  {
    image: pitch,
    title: "Conversations that move ideas forward",
    label: "ZANZIBAR SMEs ASSOCIATION / PRODUCT PITCHING",
    alt: "Umama in a one-on-one meeting with a representative of the Zanzibar SMEs Association",
    width: 1080,
    height: 810,
    style: "gallery-wide",
  },
  {
    image: schoolKids,
    title: "Where the work meets its users",
    label: "SCHOOL VISITS & COMMUNITY OUTREACH",
    alt: "Umama and colleagues with a group of young students during a school outreach visit",
    width: 938,
    height: 626,
    style: "gallery-tall",
  },
];

export function Gallery() {
  return (
    <section
      id="moments"
      className="section gallery-section"
      aria-labelledby="gallery-title"
    >
      <div className="container">
        <p className="eyebrow section-label">
          <span>05 / OUT IN THE WORLD</span>
          <span>MORE THAN A GITHUB HISTORY</span>
        </p>
        <div className="section-heading">
          <h2 id="gallery-title">
            Behind every product,
            <br />
            <em>there are people.</em>
          </h2>
          <p>
            At the booth, in the community, and among people building something
            new. Moments from Sahara Sparks, technology events, and learning
            together.
          </p>
        </div>
        <div className="gallery-grid">
          {moments.map((moment) => (
            <figure
              className={`gallery-item ${moment.style}`}
              key={moment.title}
            >
              <div className="gallery-image">
                <img
                  src={moment.image}
                  alt={moment.alt}
                  width={moment.width}
                  height={moment.height}
                  loading="lazy"
                />
              </div>
              <figcaption>
                <span>{moment.label}</span>
                <h3>{moment.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
