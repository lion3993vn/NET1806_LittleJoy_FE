import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/css/styleblogdetail.css";
import { Link, useParams } from "react-router-dom";
import no_found from "../../assets/img/404.jpg";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://littlejoyapi.azurewebsites.net/api/blog/${id}`
        );
        const data = await response.json();
        if (data.httpCode != 404) {
          const dateParts = data.date.split("T")[0].split("-");
          const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
          data.date = formattedDate;
          data.banner =
            data.banner == null || data.banner == "" ? no_found : data.banner;
          console.log(data);
        }
        setBlog(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 banner py-5 text-center">
            <h1
              className="text-center"
              style={{
                color: "#3C75A6",
                fontWeight: "600",
                fontFamily: "sans-serif",
              }}
            >
              Blog
            </h1>
            <div className="d-inline-block">
              <div className="d-flex align-content-between">
                <p className="px-2">
                  <Link
                    to="/"
                    style={{ color: "#103A71", textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </p>
                <p className="px-2">
                  <FontAwesomeIcon
                    icon="fa-solid fa-angles-right"
                    style={{ color: "#3c75a6" }}
                  />
                </p>
                <p className="px-2">
                  <Link
                    to="/blog"
                    style={{ color: "#103A71", textDecoration: "none" }}
                  >
                    Blog
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {blog.httpCode != 404 ? (
        <div
          className="container-fluid"
          style={{
            background:
              "linear-gradient(180deg, rgba(60, 117, 166, 0.2) 0%, rgba(255, 255, 255, 0.15) 53%, #fff 68%, #fff 100%)",
            padding: "2rem 0",
          }}
        >
          <div
            className="container"
            style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
                padding: "3rem",
                margin: "2rem 0",
              }}
            >
              <div className="w-100">
                <FontAwesomeIcon icon="fa-solid fa-angles-left" />
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/blog"
                >
                  <span className="px-2">Trở lại</span>
                </Link>
              </div>
              <div
                className="title"
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  margin: "2rem 0",
                  textAlign: "center",
                  color: "#3c75a6",
                }}
              >
                {blog.title}
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src={blog.banner}
                  className="mt-3, w-50"
                  alt="Morinaga Milk"
                  style={{
                    width: "100%",
                    maxWidth: "800px",
                    maxHeight: "400px",
                  }}
                />
              </div>
              <div
                className="mt-3 fs-5"
                style={{
                  color: "#555",
                  padding: "0 1rem",
                  textAlign: "justify",
                }}
              >
                {blog.content}
              </div>
              <div
                style={{
                  textAlign: "right",
                  color: "#97999D",
                  fontSize: "0.875rem",
                  marginTop: "2rem",
                  padding: "0 1rem",
                }}
              >
                <span style={{ display: "block" }}>Author: littlejoystore</span>
                <span style={{ display: "block" }}>{blog.date}</span>
              </div>
            </div>
          </div>

          <div
            className="mt-5"
            style={{
              fontSize: "2rem",
              fontWeight: "500",

              textAlign: "center",
              color: "#00000089",
            }}
          >
            Bài viết có liên quan
          </div>

          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-md-4 p-3">
                  <a
                    href=""
                    className="w-100"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div
                      className="blog-content-main w-100 p-4"
                      style={{
                        backgroundColor: "rgba(155, 155, 155, 0.05)",
                        borderRadius: "15px",
                      }}
                    >
                      <div className="blog-image"></div>
                      <div className="mt-3">
                        <span className="fs-5 fw-bold">
                          Top 5 sản phẩm canxi cho bà bầu được các bác sĩ khuyên
                          dùng
                        </span>
                      </div>
                      <div className="blog-date mt-3 w-100 d-flex justify-content-end">
                        <span style={{ color: "#97999D" }}>07/12/2003</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 p-3">
                  <a
                    href=""
                    className="w-100"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div
                      className="blog-content-main w-100 p-4"
                      style={{
                        backgroundColor: "rgba(155, 155, 155, 0.05)",
                        borderRadius: "15px",
                      }}
                    >
                      <div className="blog-image"></div>
                      <div className="mt-3">
                        <span className="fs-5 fw-bold">
                          Top 5 sản phẩm canxi cho bà bầu được các bác sĩ khuyên
                          dùng
                        </span>
                      </div>
                      <div className="blog-date mt-3 w-100 d-flex justify-content-end">
                        <span style={{ color: "#97999D" }}>07/12/2003</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 p-3">
                  <a
                    href=""
                    className="w-100"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div
                      className="blog-content-main w-100 p-4"
                      style={{
                        backgroundColor: "rgba(155, 155, 155, 0.05)",
                        borderRadius: "15px",
                      }}
                    >
                      <div className="blog-image"></div>
                      <div className="mt-3">
                        <span className="fs-5 fw-bold">
                          Top 5 sản phẩm canxi cho bà bầu được các bác sĩ khuyên
                          dùng
                        </span>
                      </div>
                      <div className="blog-date mt-3 w-100 d-flex justify-content-end">
                        <span style={{ color: "#97999D" }}>07/12/2003</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid" 
          style={{background:"linear-gradient(180deg, rgba(60, 117, 166, 0.2) 0%, rgba(255, 255, 255, 0.15) 53%, #fff 68%, #fff 100%)"}}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 py-5 my-5 text-center">
                <span
                  className="text-center fs-3"
                  style={{
                    fontFamily: "sans-serif",
                  }}
                >
                  Trang Blog không tồn tại
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogDetail;

// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { BlogContext } from './BlogContext';

// const BlogDetail = () => {
//   const { id } = useParams();
//   const { blogs } = useContext(BlogContext);
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     const foundBlog = blogs.find((blog) => blog.id === parseInt(id));
//     if (foundBlog) {
//       setBlog(foundBlog);
//     }
//   }, [blogs, id]);

//   if (!blog) {
//     return null;
//   }

//   return (
//     <div classNameName="container-fluid" style={{ background: 'linear-gradient(180deg, rgba(60, 117, 166, 0.2) 0%, rgba(255, 255, 255, 0.15) 53%, #fff 68%, #fff 100%)'}}>
//       <div classNameName="container pt-5" >
//         <div classNameName='p-5 my-4' style={{backgroundColor: 'white', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}}>
//           <div classNameName='text-center fw-bold my-5' style={{ fontSize: '2rem' }}>{blog.title}</div>
//           <div classNameName='text-center'>
//             <img src={blog.img} alt='' style={{ width: '80%', maxHeight: '400px', objectFit: 'cover', borderRadius: '10px' }} classNameName='my-5' />
//           </div>
//           <div classNameName='px-4' style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555' }}>
//             <div dangerouslySetInnerHTML={{ __html: blog.content }} />
//           </div>
//           <div classNameName='px-4 mt-4' style={{ textAlign: 'right', color: "#97999D", fontSize: '0.8rem' }}>
//             <span>Author: {blog.author}</span><br />
//             <span>{blog.date}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;

// import React from "react";
// import { useParams } from "react-router-dom";

// const BlogDetail = ({ blogs }) => {
//   const { id } = useParams();
//   console.log(blogs);

//   // Kiểm tra xem danh sách blogs có tồn tại không
//   if (!blogs || !Array.isArray(blogs) || blogs.length === 0) {
//     return <div>No blogs found</div>;
//   }

//   // Tìm bài blog tương ứng với id
//   const blog = blogs.find(blog => blog.id === parseInt(id));

//   // Kiểm tra xem bài blog có tồn tại không
//   if (!blog) {
//     return <div>Blog not found</div>;
//   }

//   return (
//     <div classNameName="container">
//       <div classNameName="row">
//         <div classNameName="col-md-12">
//           <div classNameName="text-center">
//             <h2>{blog.title}</h2>
//           </div>
//         </div>
//       </div>
//       <div classNameName="row">
//         <div classNameName="col-md-8">
//           <div>{blog.content}</div>
//         </div>
//         <div classNameName="col-md-4">
//           <div>
//             <p>Author: {blog.author}</p>
//             <p>Date: {blog.date}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;
