import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="bg-gray-300 flex gap-2 items-center p-3 rounded-sm">
      <p className="bg-[#D72050] text-[20px] text-base-100 w-[100px] text-center px-4 py-2 ">
        Latest
      </p>
      <Marquee pauseOnHover={true}  className=" text-[20px]  text-gray-800 font-500 space-x-10">
        <Link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque, officia amet delectus eius obcaecati eos quo nemo? Eveniet repellat nobis velit ea ut harum fugit ullam minus ab, iste maiores id assumenda quos nisi provident corrupti saepe quaerat obcaecati debitis! Eos vel unde molestiae, vero, iste iusto repellendus incidunt officia est sint nihil natus esse asperiores. Voluptates, necessitatibus quam! Ullam quasi recusandae et minus nam, est ipsa, delectus pariatur molestias beatae quod deserunt voluptate porro, molestiae ipsam nobis magnam. Sapiente esse repellendus dolor earum at tempore consectetur, aliquid nihil, cupiditate explicabo ex iure, quas quia optio perferendis impedit in.
        </Link>
        <Link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque, officia amet delectus eius obcaecati eos quo nemo? Eveniet repellat nobis velit ea ut harum fugit ullam minus ab, iste maiores id assumenda quos nisi provident corrupti saepe quaerat obcaecati debitis! Eos vel unde molestiae, vero, iste iusto repellendus incidunt officia est sint nihil natus esse asperiores. Voluptates, necessitatibus quam! Ullam quasi recusandae et minus nam, est ipsa, delectus pariatur molestias beatae quod deserunt voluptate porro, molestiae ipsam nobis magnam. Sapiente esse repellendus dolor earum at tempore consectetur, aliquid nihil, cupiditate explicabo ex iure, quas quia optio perferendis impedit in.
        </Link>
        <Link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque, officia amet delectus eius obcaecati eos quo nemo? Eveniet repellat nobis velit ea ut harum fugit ullam minus ab, iste maiores id assumenda quos nisi provident corrupti saepe quaerat obcaecati debitis! Eos vel unde molestiae, vero, iste iusto repellendus incidunt officia est sint nihil natus esse asperiores. Voluptates, necessitatibus quam! Ullam quasi recusandae et minus nam, est ipsa, delectus pariatur molestias beatae quod deserunt voluptate porro, molestiae ipsam nobis magnam. Sapiente esse repellendus dolor earum at tempore consectetur, aliquid nihil, cupiditate explicabo ex iure, quas quia optio perferendis impedit in.
        </Link>
        <Link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque, officia amet delectus eius obcaecati eos quo nemo? Eveniet repellat nobis velit ea ut harum fugit ullam minus ab, iste maiores id assumenda quos nisi provident corrupti saepe quaerat obcaecati debitis! Eos vel unde molestiae, vero, iste iusto repellendus incidunt officia est sint nihil natus esse asperiores. Voluptates, necessitatibus quam! Ullam quasi recusandae et minus nam, est ipsa, delectus pariatur molestias beatae quod deserunt voluptate porro, molestiae ipsam nobis magnam. Sapiente esse repellendus dolor earum at tempore consectetur, aliquid nihil, cupiditate explicabo ex iure, quas quia optio perferendis impedit in.
        </Link>
        
      </Marquee>
    </div>
  );
};

export default LatestNews;
