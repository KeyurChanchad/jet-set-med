import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/carouselComponent.css';
import imagepath from "../assets/image/carousel.png";

const CarouselComponent = () => {
  const testimonials = [
    {
      name: "Gagan N Bangaragiri",
      image: imagepath,
      testimonial: "JetSetMed made it so much easier to get malaria medication for our 5-day safari. We felt protected the entire time we were out exploring the amazing Sabi Sands Game Reserve!",
      memberSince: "2023",
      destination: "South Africa"
    },
    {
      name: "Jane Doe",
      image: imagepath,
      testimonial: "JetSetMed provided excellent service during our trip to Kenya. Highly recommend!",
      memberSince: "2022",
      destination: "Kenya"
    },
    {
      name: "John Smith",
      image: imagepath,
      testimonial: "Great service and support for our travel needs!",
      memberSince: "2021",
      destination: "Brazil"
    },
    {
      name: "Alice Johnson",
      image: imagepath,
      testimonial: "Wonderful experience, hassle-free travel!",
      memberSince: "2020",
      destination: "Australia"
    },
    {
      name: "Robert Brown",
      image: imagepath,
      testimonial: "Excellent customer service and reliable!",
      memberSince: "2019",
      destination: "Canada"
    },
    {
      name: "Gagan N Bangaragiri",
      image: imagepath,
      testimonial: "JetSetMed made it so much easier to get malaria medication for our 5-day safari. We felt protected the entire time we were out exploring the amazing Sabi Sands Game Reserve!",
      memberSince: "2023",
      destination: "South Africa"
    },
    {
      name: "Jane Doe",
      image: imagepath,
      testimonial: "JetSetMed provided excellent service during our trip to Kenya. Highly recommend!",
      memberSince: "2022",
      destination: "Kenya"
    },
    {
      name: "John Smith",
      image: imagepath,
      testimonial: "Great service and support for our travel needs!",
      memberSince: "2021",
      destination: "Brazil"
    },
    {
      name: "Alice Johnson",
      image: imagepath,
      testimonial: "Wonderful experience, hassle-free travel!",
      memberSince: "2020",
      destination: "Australia"
    },
    {
      name: "Robert Brown",
      image: imagepath,
      testimonial: "Excellent customer service and reliable!",
      memberSince: "2019",
      destination: "Canada"
    },
  ];

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const testimonialChunks = chunkArray(testimonials, 4); // Adjust the number to show more/less items per slide

  return (
    <div className="container mt-5 carousel-container">
      <h2 className="text-center">What makes us different?</h2>
      <p className="text-center desc">We'll pass that question to our users</p>
      <Carousel>
        {testimonialChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              {chunk.map((testimonial, idx) => (
                <div key={idx} className="card mx-2 rounded" style={{ width: '18rem' }}>
                  <div className="card-heading">
                    <h5 className="card-title">{testimonial.name}</h5>
                    <img src={testimonial.image} className="card-img-top" alt={testimonial.name} />
                  </div>
                  <div className="card-body">
                    <p className="card-text">{testimonial.testimonial}</p>
                    <p className="card-text"><small className="text-muted">Member since: {testimonial.memberSince}</small></p>
                    <p className="card-text"><small className="text-muted">Travelled to: {testimonial.destination}</small></p>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
