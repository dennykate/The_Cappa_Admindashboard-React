import { Button } from "@mantine/core";
import React from "react";
import { FaFacebook, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const SocialBtnGroup = ({dark}) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      <Button
        fullWidth
        variant="filled"
        className={`mt-5 ${
          dark
            ? "bg-[#222222] hover:bg-[#222222]"
            : "bg-[#2222223b] hover:bg-[#2222223b] "
        } h-12 text-xl `}
      >
        <FaGoogle className="text-[#AA8453]" />
      </Button>
      <Button
        fullWidth
        variant="filled"
        className={`mt-5 ${
          dark
            ? "bg-[#222222] hover:bg-[#222222]"
            : "bg-[#2222223b] hover:bg-[#2222223b] "
        } h-12 text-xl `}
      >
        <FaTwitter className="text-[#AA8453]" />
      </Button>
      <Button
        fullWidth
        variant="filled"
        className={`mt-5 ${
          dark
            ? "bg-[#222222] hover:bg-[#222222]"
            : "bg-[#2222223b] hover:bg-[#2222223b] "
        } h-12 text-xl `}
      >
        <FaFacebookF className="text-[#AA8453]" />
      </Button>
    </div>
  );
};

export default SocialBtnGroup;
