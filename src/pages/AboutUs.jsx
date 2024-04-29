import React from 'react';

const AboutUs = () => {
    return (
        <div>
             
       <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row gap-20">
    <img src="https://i.ibb.co/Vxn3MLv/colpture.jpg" className="max-w-lg rounded-lg shadow-2xl" />
    <div>
        <p className='text-3xl font-bold text-center text-orange-600 mt-5'>Art Sketcher</p>
      {/* <h1 className="text-5xl font-bold text-white">About Resi Nest </h1> */}
      <p className="py-6 text-white text-justify"> 
       

Welcome to Art Sketcher, where creativity meets inspiration. We are a team of passionate artists and designers dedicated to bringing art into your life in unique and meaningful ways. At Art Sketcher, our goal is to create beautiful pieces that resonate with your personal style and inspire a sense of wonder.
<br />
<br />
<span className='text-xl font-bold text-gray-600'>Our Story</span>
<br />
Art Sketcher began as a small group of friends with a shared love for art and design. We wanted to create a platform where artists could showcase their work and where art lovers could find unique pieces that speak to their hearts. Over the years, we've grown into a thriving community that values creativity, innovation, and quality craftsmanship.

<br />
<br />
<span className='text-xl font-bold text-gray-600'>What We Offer</span>
<br />
Our collection includes a wide range of art forms, from intricate pencil sketches to vibrant oil paintings. We believe that art should be accessible to everyone, which is why we offer pieces that fit every taste and budget.
<br />
<br />
<span className='text-xl font-bold text-gray-600'>Our Commitment</span>
<br />
At Art Sketcher, we are committed to supporting artists and fostering creativity. We work with emerging and established artists to bring you a diverse selection of art and crafts. we ensure that our art not only looks beautiful but is also environmentally friendly.

<br />
<br />
Thank you for visiting Art Sketcher. We hope you find the perfect piece of art that speaks to you. Keep sketching, keep dreaming, and keep creating.
      
       </p>
     
    </div>
  </div>
</div>
    </div>
    );
};

export default AboutUs;