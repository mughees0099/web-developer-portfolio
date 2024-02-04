import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a
        href="https://dime-market.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          class="rounded-t-lg w-full"
          src="https://res.cloudinary.com/dwn3n5zdb/image/upload/v1707052183/Screenshot_2024-02-04_180841_y7mqps.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Dine Market
        </h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Dine Market is a sophisticated e-commerce clothing store, offering a
          seamless and interactive shopping experience, where users can explore
          a wide range of fashion products and make purchases.
        </p>
        <a
          href="https://dime-market.vercel.app/"
          target="_blank"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
          rel="noreferrer"
        >
          Preview
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};
const Card1 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a
        href="https://agile-thicket-79535-05a138653f94.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          class="rounded-t-lg w-full"
          src="https://res.cloudinary.com/dwn3n5zdb/image/upload/v1707052651/Screenshot_2024-02-04_181649_accrfw.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          YelpCamp
        </h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Yelp Camp is a dynamic campground review platform, where users can
          share their experiences and discover new camping locations, built with
          robust and scalable technologies.
        </p>
        <a
          href="https://agile-thicket-79535-05a138653f94.herokuapp.com/"
          target="_blank"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
          rel="noreferrer"
        >
          Preview
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};
const Card2 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a
        href="https://clever-flan-173c0b.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          class="rounded-t-lg w-full"
          src="https://res.cloudinary.com/dwn3n5zdb/image/upload/v1707053941/Screenshot_2024-02-04_183819_z6lir1.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Manage
        </h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Manage Website is a comprehensive platform that provides users with
          the tools to efficiently manage and update their website content,
          ensuring a dynamic and engaging online presence."
        </p>
        <a
          href="https://clever-flan-173c0b.netlify.app/"
          target="_blank"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
          rel="noreferrer"
        >
          Preview
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};
const Card3 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a
        href="https://eclectic-mochi-f53766.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          class="rounded-t-lg w-full"
          src="https://res.cloudinary.com/dwn3n5zdb/image/upload/v1707055635/screencapture-eclectic-mochi-f53766-netlify-app-2024-02-04-19_06_00_m98lld.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Cara
        </h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Cara is an elegant front-end e-commerce clothing store, offering a
          user-friendly and interactive shopping experience, where users can
          explore and select from a wide range of fashion products
        </p>
        <a
          href="https://eclectic-mochi-f53766.netlify.app/"
          target="_blank"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
          rel="noreferrer"
        >
          Preview
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};
export { Card, Card1, Card2, Card3 };
// export default Card;
