import { Carousel } from "@mantine/carousel";
import { Box, Flex, Paper, Text } from "@mantine/core";
import { Avatar } from "@mantine/core";

import { BiCheckCircle, BiXCircle } from "react-icons/bi";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { reviewData } from "../utils/data";

const ReviewCarousel = ({ dark }) => {
  return (
    <Carousel
      slideSize="50%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={1}
      className="lg:mx-[20px]"
      sx={{
        ["& .mantine-Carousel-control"]: {
          background: "#AA8453",
          width: 40,
          height: 40,
          borderRadius: 4,
          opacity: 1,
          border: "none",
        },
      }}
      nextControlIcon={<HiArrowRight size={20} color="white" />}
      previousControlIcon={<HiArrowLeft size={20} color="white" />}
      breakpoints={[
        { maxWidth: "md", slideSize: "50%" },
        { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
      ]}
    >
      {reviewData?.map(({ avatar }, index) => (
        <Carousel.Slide key={index}>
          <Box
            className={`h-full flex flex-col gap-[20px] justify-between cursor-pointer hover:shadow-lg border
              border-opacity-10 rounded-lg transition-all duration-300 ease-in-out  sm:p-[28px] p-[10px]
      ${
        dark
          ? " border-gray-300 text-white bg-[#1B1B1B]"
          : " border-black text-gray-500 bg-white"
      } `}
          >
            <Text className="text-base font-normal " opacity={70}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              praesentium vero. Doloribus hic quibusdam, asperiores nam,
              reiciendis
            </Text>
            <Flex justify="space-between" align="center">
              <Flex gap={10} align="start">
                <Avatar src={avatar} alt="profile" radius="sm" />
                <Flex direction="column">
                  <Text className="font-semibold text-[15px] hover:text-[#E23428]">
                    Kusnaidi Anderson
                  </Text>
                  <Text className="text-xs font-normal">14 min ago</Text>
                </Flex>
              </Flex>
              <Flex gap={5} align="center">
                <BiCheckCircle size={22} className="text-green-600" />
                <BiXCircle size={22} className="text-red-600" />
              </Flex>
            </Flex>
          </Box>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default ReviewCarousel;
