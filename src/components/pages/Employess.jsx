import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import sourabhDp from "../../images/sourabh.jpeg";
import srejeelDp from "../../images/sreejal_ranjan.jpeg";
import subhamDp from "../../images/shubham_yadav.jpeg";
import parthDp from "../../images/parth_jain.jpeg";
import siddheshDp from "../../images/siddhesh_shinde.jpeg";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import souravDp from "../../images/sourav_kumar.jpeg";

const Item = ({ img, name, desc, role }) => {
  return (
    <Box
      width="100%"
      minHeight={{ xs: 500, md: 360 }}
      bgcolor={"#262626"}
      borderRadius={"1rem"}
      margin={{ xs: "auto", md: 5 }}
    >
      <Box
        bgcolor={"#ffffff"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        px={3}
        gap={3}
        borderRadius={"1rem"}
        py={1}
      >
        <Avatar src={img} sx={{ width: 80, height: 80 }} />
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"start"}
          justifyContent={"center"}
          gap={1}
        >
          <Typography
            color={"#000229"}
            className="plus-jakarta-sans"
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            lineHeight={"1.25rem"}
          >
            {name}
          </Typography>
          <Typography
            color={"#000229"}
            className="plus-jakarta-sans"
            fontSize={"1rem"}
            lineHeight={".75rem"}
          >
            {role}
          </Typography>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        px={3.5}
        py={2}
        flex={1}
        overflow={"auto"}
      >
        <Typography
          color={"#ffffff"}
          className="plus-jakarta-sans"
          fontSize={{ xs: "1rem", md: "1.2rem" }}
          lineHeight={{ xs: "1.2rem", md: "1.4rem" }}
          textAlign={"start"}
          sx={{
            overflowWrap: "break-word",
            wordBreak: "break-word",
            maxHeight: "100%",
            overflowY: "auto",
          }}
        >
          “{desc}”
        </Typography>
      </Box>
    </Box>
  );
};

const employees = [
  {
    name: "Serjeel Ranjan",
    role: "Full Stack Developer",
    img: srejeelDp,
    desc: "I'm grateful to have worked with Janus Softwares, a company that trusted my skills and gave me the chance to collaborate with overseas clients. Their confidence has not only boosted my professional growth but also broadened my global perspective. I'm honored to be part of such a forward-thinking team.",
  },
  {
    name: "Shubham Yadav",
    role: "Python Developer",
    img: subhamDp,
    desc: "During my internship at Janus Software, I acquired practical skills in Python development and data analysis. I collaborated with a supportive team, whose guidance and mentorship greatly enhanced my learning experience. Their insights and assistance were instrumental in my professional growth.",
  },
  {
    name: "Paarth Jain",
    role: "React Js Developer",
    img: parthDp,
    desc: "It was great working with Janus Softwares. My onboarding experience was really smooth and people here are really helpful. Initially I faced some issues working with the codebase but senior devs guided me right.",
  },

  {
    name: "Siddhesh Shinde",
    role: "Full Stack Developer",
    img: siddheshDp,
    desc: "My time at Janus Softwares yielded a wealth of learnings, fostered by a flexible work environment. Within the realm of Janus Softwares, I found myself honing my focus on delivering quality output for the company, unbound by conventional work hour constraints. Every day at Janus Softwares felt like blossoming, a chance to flourish and contribute.",
  },
  {
    name: "Sourabh",
    role: "Full Stack Developer",
    img: sourabhDp,
    desc: "It has been a privilege working with Janus Software.  Janus consistently operates at the forefront of technology, fostering an environment that values and cultivates individual capabilities. Their unwavering trust in my abilities has propelled my growth, while interactions with peers from diverse backgrounds have enriched my understanding of core technologies and organizational practices.",
  },
  {
    name: "Sourav Kumar",
    role: "Full Stack Developer",
    img: souravDp,
    desc: "Working as a frontend developer at Janus Softwares during my early career was an invaluable experience. The supportive environment and challenging projects pushed me to grow and learn beyond my expectations. I'm grateful for the opportunity to contribute to such a dynamic team and for the mentorship that helped shape my skills as a developer.",
  },
];

const Employess = (props) => {
  return (
    <Box
      ref={props.employeeRef}
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={{ xs: 1.5, md: 3 }}
      my={{ xs: 5, md: 10 }}
      zIndex={999}
      position={"relative"}
    >
      <Typography
        className="poppins-medium"
        fontSize={{ xs: "2rem", md: "2.6rem" }}
        lineHeight={{ xs: "2rem", md: "2.6rem" }}
        color={"#30DCCA"}
      >
        Employee Testimonials
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
      >
        <Typography
          className="plus-jakarta-sans"
          fontSize={{ xs: "1rem", md: "1.2rem" }}
          lineHeight={{ xs: "1.2rem", md: "1.4rem" }}
          color={"#fff"}
          textAlign={"center"}
          flex={1}
        >
          Discover What Our Team Has to Say About Their Experience Working With
          Us 💼💬
        </Typography>
      </Box>
      <Box
          display={{ xs: "none", md: "flex" }}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={3}
          pr={2}
        >
          <Box
            className="custom-prev-button"
            width={40}
            height={40}
            bgcolor={"#30DCCA"}
            borderRadius={"50%"}
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <ArrowBackRoundedIcon sx={{ color: "#ffffff" }} />
          </Box>
          <Box
            className="custom-next-button"
            width={40}
            height={40}
            bgcolor={"#30DCCA"}
            borderRadius={"50%"}
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <ArrowForwardRoundedIcon sx={{ color: "#ffffff" }} />
          </Box>
        </Box>

      <Box width={"100vw"} display={{ xs: "none", md: "block" }}>
        <swiper-container
          navigation-next-el=".custom-next-button"
          navigation-prev-el=".custom-prev-button"
          slides-per-view="3"
          space-between="10"
          pagination-clickable="true"
          pagination-dynamic-bullets="true"
          autoplay-delay="2000"
          autoplay-disable-on-interaction="true"
          center-slides="true"
          pagination="true"
          style={{
            "--swiper-pagination-color": "#30DCCA",
            "--swiper-pagination-bullet-inactive-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-opacity": 0.2,
            "--swiper-pagination-bullet-size": "15px",
          }}
        >
          {employees.map((employee, index) => (
            <swiper-slide key={index}>
              <Item
                name={employee.name}
                img={employee.img}
                role={employee.role}
                desc={employee.desc}
              />
            </swiper-slide>
          ))}
          <swiper-slide>
            <Box
              width={{ xs: 350, md: 580 }}
              height={{ xs: 290, md: 360 }}
              bgcolor={"transparent"}
            />
          </swiper-slide>
        </swiper-container>
      </Box>
      <Box width={"100vw"} display={{ xs: "block", md: "none" }}>
        <swiper-container
          slides-per-view="1"
          autoplay-delay="2000"
          autoplay-disable-on-interaction="false"
          center-slides="true"
          pagination="false"
          style={{
            "--swiper-pagination-color": "#30DCCA",
            "--swiper-pagination-bullet-inactive-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-opacity": 0.2,
            "--swiper-pagination-bullet-size": "15px",
          }}
        >
          {employees.map((employee, index) => (
            <swiper-slide key={index}>
              <Item
                name={employee.name}
                img={employee.img}
                role={employee.role}
                desc={employee.desc}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      </Box>
    </Box>
  );
};

export default Employess;
