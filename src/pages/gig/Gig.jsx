import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function Gig() {
  const {id} = useParams()
 
  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: async () => {
      const response = await newRequest.get(`/gigs/single/${id}`);
      return response.data; 
    }

  });

  
  const { isLoading : isLoadingUser, error : errorUser, data :dataUser } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await newRequest.get(`/users/${data.userId}`);
      return response.data; 
    }

  });


  return (
    <div className="gig">
      {isLoading ? "Loading" : error ? "Something went wrong": 
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">SoloLance {"> "}Graphics & Design{" >"}</span>
          <h1>{data.title}</h1>
         {isLoadingUser ? "Loading" : errorUser ? "Something went wrong" : <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Anna Bell</span>
            { !isNaN(data.totalStars/data.starNumber) && (
               <div className="stars">
                 {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item,i)=>(
                  <img src="/img/star.png" alt="" key={i}/>
                      
                 ))}
                 
                  <span>{Math.round(data.totalStars / data.starNumber)}</span>
                </div>)}
          </div>}
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            { data.images.map((img)=>(
                       <img
                       key={img}
                       src={img}
                       alt=""
                     />
            ))
             
            }
           
    
          </Slider>
          <h2>About This Gig</h2>
          <p>
           {data.desc}
          </p>
          {isLoadingUser ? "Loading" : errorUser ? "Something went wrong" :(<div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src={dataUser.img || "/img/noavatar.jpg"}
                alt=""
              />
              <div className="info">
                <span>{dataUser.username}</span>
               { !isNaN(data.totalStars/data.starNumber) && (
               <div className="stars">
                 {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item,i)=>(
                  <img src="/img/star.png" alt="" key={1}/>
                      
                 ))}
                 
                  <span>{Math.round(data.totalStars / data.starNumber)}</span>
                </div>)}
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">{dataUser.country}</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
              {dataUser.desc}
              </p>
            </div>
          </div>)}
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              { !isNaN(data.totalStars/ data.starNumber) && (
               <div className="stars">
                  {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item,i)=>(
                  <img src="/img/star.png" alt="" key={1}/>
                      
                 ))}
                  <span>{Math.round(data.totalStars / data.starNumber)}</span>
                </div>)}
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Sidney Owen</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt=""
                    />
                    <span>Germany</span>
                  </div>
                </div>
              </div>
              { !isNaN(data.totalStars/data.starNumber) && (
               <div className="stars">
                   {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item,i)=>(
                  <img src="/img/star.png" alt="" key={1}/>
                      
                 ))}
                  <span>{Math.round(data.totalStars / data.starNumber)}</span>
                </div>)}
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Lyle Giles </span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              { !isNaN(data.totalStars/data.starNumber) && (
               <div className="stars">
                  {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item,i)=>(
                  <img src="/img/star.png" alt="" key={1}/>
                      
                 ))}
                  <span>{Math.round(data.totalStars / data.starNumber)}</span>
                </div>)}
              <p>
                Amazing work! Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>{data.shortTitle}</h3>
            <h2>${data.price}</h2>
          </div>
          <p>
            {data.shortDesc}
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>{data.deliveryDate}2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>{data.revisionNumber} 3 Revisions</span>
            </div>
          </div>
          <div className="features">
          {data.feature && data.feature.map((feature, index) => (
              <div className="item" key={index}>
                <img src="/img/greencheck.png" alt="" />
                <span>{feature}</span>
              </div>
            ))}
        </div>

          <button>Continue</button>
        </div>
      </div>}
    </div>
  );
}

export default Gig;
