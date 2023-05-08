import React from "react";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";
import { Button, ButtonGroup } from "@chakra-ui/react";
export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <div>
        <img
          style={{ width: "100%", borderRadius:'15px' }}
          src="https://static.vecteezy.com/system/resources/thumbnails/002/294/890/small/digital-education-web-banner-design-teacher-on-monitor-to-explain-the-graph-online-education-e-learning-digital-education-platform-concept-header-or-footer-banner-free-vector.jpg"
          alt=""
        />
      </div>
      <br />
      <div style={{ marginTop: "10px" }}>
        <h1
          style={{
            fontSize: "40px",
            textAlign: "center",
            color: "teal",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Top Courses
        </h1>
        <div
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "space-around",
            textAlign: "center",
            lineHeight: "40px",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                borderRadius: "10px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDB6Aiz1fIjXpOAPXQO7l8JZqsRirooCjfOw&usqp=CAU"
              alt=""
            />
            <h1>Full Stack Developer</h1>
            <Button colorScheme="teal" variant="solid">
              More Info
            </Button>
          </div>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                borderRadius: "10px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTYfL0jDOJw6nP2Nj_4CD1mMi7Qdu2dmpKQ&usqp=CAU"
              alt=""
            />
            <h1>Aerospace Engineering</h1>
            <Button colorScheme="teal" variant="solid">
              More Info
            </Button>
          </div>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                borderRadius: "10px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7t3CK0NUBe4YEWot5kxgAkdbiLd58PRPp3Q&usqp=CAU"
              alt=""
            />
            <h1> Ethical Hacking</h1>
            <Button colorScheme="teal" variant="solid">
              More Info
            </Button>
          </div>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                borderRadius: "10px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjimfYGu9LzwKdIbuDzQCq1YcU8oI9pr4E33DZByGGcfzvjGvdNOEjY9-rMUGBDKfpABw&usqp=CAU"
              alt=""
            />
            <h1> Bachelors's in Computer Application</h1>
            <Button colorScheme="teal" variant="solid">
              More Info
            </Button>
          </div>
        </div>
      </div>
      <br />
      <div style={{ marginTop: "20px" }}>
        <h1
          style={{
            fontSize: "40px",
            textAlign: "center",
            color: "teal",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Top Institutes
        </h1>
        <div
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "space-around",
            textAlign: "center",
            lineHeight: "40px",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                borderRadius: "10px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlGZTDdugmQ9iGbloDO-DyQIGaVebe_XxXw&usqp=CAU"
              alt=""
            />
            <h1>Masai School</h1>
            <Button colorScheme="teal" variant="solid">
              More Info
            </Button>
          </div>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                borderRadius: "10px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXzmdz-YyQErX02fWosk8foJgp6Z8sCNeN6g&usqp=CAU"
              alt=""
            />
            <h1>Indian Institutes of Technology</h1>
            <Button colorScheme="teal" variant="solid">
              More Info
            </Button>
          </div>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                borderRadius: "10px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV02Pq8PJsIGR6Ss_HDwCf_pTH38g5DkDm4A&usqp=CAU"
              alt=""
            />
            <h1> National Institutes of Technology</h1>
            <Button colorScheme="teal" variant="solid">
              More Info
            </Button>
          </div>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                borderRadius: "10px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0H5T1dDqJEtwEVEKPVpb_P9YVlz4LcLf1w&usqp=CAU"
              alt=""
            />
            <h1> National Eligibility cum Entrance Test</h1>
            <Button colorScheme="teal" variant="solid">
              More Info
            </Button>
          </div>
        </div>
      </div>

      <br />

      <div style={{ display: "flex", marginLeft: "270px", marginTop: "40px" }}>
        <div style={{ width: "30%" }}>
          <img
            src="https://cdn.kastatic.org/images/lohp/hero_student_collage_compressed_no_whitespace.png"
            alt=""
          />
        </div>
        <div style={{ marginLeft: "150px", fontFamily: "satisfies" }}>
          <h1
            style={{
              fontSize: "40px",
              lineHeight: "45px",
              marginTop: "30px",
              color: "teal",
              fontWeight: "bold",
            }}
          >
            For every student,
            <br />
            every classroom.
            <br />
            Real results.
          </h1>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button colorScheme="teal" variant="solid">
              Learners
            </Button>

            <Button colorScheme="teal" variant="solid">
              Teachers
            </Button>

            <Button colorScheme="teal" variant="solid">
              Parents
            </Button>
          </div>
        </div>
      </div>
      <br />
      <div style={{ marginTop: "10px" }}>
        <h1
          style={{
            fontSize: "40px",
            textAlign: "center",
            color: "teal",
            fontWeight: "bold",
          }}
        >
          Meet Our Toppers
        </h1>
        <div
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "space-around",
            textAlign: "center",
            lineHeight: "40px",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                borderRadius: "10px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7NhwoXk9S9XpwZu8AGWc_VNttkA1zjzFYw&usqp=CAU"
              alt=""
            />
            <h1>Rank : 2</h1>
            <Button colorScheme="teal" variant="solid">
              More Info
            </Button>
          </div>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                borderRadius: "10px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtRicNH693OXJK1hFFaxgXjfzV5_OGPTG8g&usqp=CAU"
              alt=""
            />
            <h1>Rank : 1</h1>
            <Button colorScheme="teal" variant="solid">
              More Info
            </Button>
          </div>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                borderRadius: "10px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQz8CLYrpII23kVk65scbHkPb2KfOmjUqwg&usqp=CAU"
              alt=""
            />
            <h1> Rank : 2</h1>
            <Button colorScheme="teal" variant="solid">
              More Info
            </Button>
          </div>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                borderRadius: "10px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQEwDdUsOBUIy1krk5tMb40bsIo22I56zZw&usqp=CAU"
              alt=""
            />
            <h1> Rank : 3</h1>
            <Button colorScheme="teal" variant="solid">
              More Info
            </Button>
          </div>
        </div>
      </div>

      <br />

      <div>
        <h1
          style={{
            fontSize: "40px",
            textAlign: "center",
            color: "teal",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Some Advantage of LEARNI FI
        </h1>

        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <img
              src="https://cdn1.byjus.com/wp-content/uploads/2022/04/concept-clarity.png"
              alt=""
            />
            <h1 style={{ fontSize: "25px", fontFamily: "sans-serif" }}>
              Conceptual clarity <br />
              through visualisation
            </h1>
          </div>

          <div>
            <img
              src="https://cdn1.byjus.com/wp-content/uploads/2022/04/personalised-learning.png"
              alt=""
            />
            <h1 style={{ fontSize: "25px", fontFamily: "sans-serif" }}>
              Personalised learning <br />
              programs
            </h1>
          </div>

          <div>
            <img
              src="https://cdn1.byjus.com/wp-content/uploads/2022/04/unmatched-attention.png"
              alt=""
            />
            <h1 style={{ fontSize: "25px", fontFamily: "sans-serif" }}>
              Unmatched individual <br />
              attention
            </h1>
          </div>
        </div>
      </div>

      <br />

      
      <br />
      <Footer />
    </div>
  );
}
