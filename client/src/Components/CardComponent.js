import React from "react";
import Card from "react-bootstrap/Card";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

// import img1 from "../Images/images.png";

const CardForPost = ({ post }) => {
  // console.log(post.PostImage);
  function dateConverter(dateStr) {
    const dateOnly = dateStr.split("T")[0];
    const dateArr = dateOnly.split("-");
    const monthArr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${dateArr[2]}-${monthArr[parseInt(dateArr[1]) - 1]}-${dateArr[0]}`;
  }
  return (
    <>
      <div className="card">
        <header>
          <div className="header-card-names">
            <div className="header-card-text">{post.name}</div>
            <div className="header-card-text">{post.location}</div>
          </div>
          <div className="header-card-icon">
            <BsThreeDots />
          </div>
        </header>
        <section>
          <img
            className="post-image"
            src={`Images/${post.PostImage}`}
            alt="image-1"
          ></img>
          <div className="post-image-below">
            <div className="section-card-icon">
              <FaRegHeart />
            </div>
            <div className="section-card-icon">
              <FiSend />
            </div>
            <div className="date">{dateConverter(post.date)}</div>
          </div>
          <div className="post-likes">{post.likes} likes</div>
          <div className="post-description">{post.description}</div>
        </section>
      </div>
    </>
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={post.PostImage} style={{ width: "16rem" }} />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
  );
};

export default CardForPost;
