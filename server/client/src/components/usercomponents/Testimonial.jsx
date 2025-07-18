import React from "react";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Aman Verma",
    text: "Donating blood was such a fulfilling experience. The process was simple and painless, and knowing I helped someone is priceless.",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Sanya Kapoor",
    text: "I’ve been donating every few months, and it’s amazing to be part of something so impactful. Everyone should do it!",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rahul Mehta",
    text: "The staff made me feel so comfortable. It only took a short while, but I left knowing I made a difference.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    text: "My blood donation helped save a newborn. That moment changed my life forever. It’s the best thing I’ve ever done.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Neeraj Patel",
    text: "I was nervous at first, but the team guided me through it with such ease. I’m proud to be a regular donor now.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Anjali Rao",
    text: "Seeing my family members need blood in the past inspired me to donate. It’s the best gift you can give.",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <section className="testimonials-section">
        <h3 className="testimonials-subheading">TESTIMONIALS</h3>
        <h2 className="testimonials-heading">Donors Speak from the Heart</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <figure className="testimonial" key={idx}>
              <img src={t.img} alt={t.name} className="testimonial-img" />
              <blockquote className="testimonial-text">{t.text}</blockquote>
              <p className="testimonial-author">— {t.name}</p>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
