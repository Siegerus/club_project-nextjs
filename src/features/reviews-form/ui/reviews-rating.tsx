"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChangeEvent, Fragment } from "react";

import { cn } from "@/shared/lib";
import { RatingIconPath, ratingLabelText } from "../lib";
import type { ReviewsRatingRadio } from "../model";

type ReviewsRatingProps = {
  radios: ReviewsRatingRadio[];
  selectedValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const styles = {
  ratingRow: "flex items-center justify-between gap-[10px]",
  ratingLabel:
    "max-w-[92px] lg:max-w-none text-sm font-semibold leading-main tracking-none text-white lg:text-xl lg:font-medium",
  stars:
    "flex items-center gap-[13px] lg:gap-[3px] xl:gap-[7px] 2xl:gap-[6px] 3xl:gap-[10px]",
  star: cn(
    "h-[22px] w-[22px] lg:h-[26px] lg:w-[26px] 2xl:h-[26px] 2xl:w-[26px]",
    "hover:scale-120 duration-200 cursor-pointer",
  ),
};

const animateStyles = {
  initial: {
    opacity: 0.1,
    boxShadow: "0 0 110px rgba(246, 246, 246, 1)",
  },
  animate: {
    opacity: 1,
    boxShadow: "0 0 10px rgba(246, 246, 246, 0)",
  },
};

const ReviewsRating = ({
  radios,
  selectedValue,
  onChange,
}: ReviewsRatingProps) => {
  return (
    <div className={styles.ratingRow}>
      <span id="reviews-rating-label" className={styles.ratingLabel}>
        {ratingLabelText}
      </span>
      <div
        className={styles.stars}
        role="radiogroup"
        aria-labelledby="reviews-rating-label"
      >
        {radios.map((radio, i) => {
          const keyValue = `${radio.id}-${i}`;
          const isFilled = Number(selectedValue) >= Number(radio.value);

          return (
            <Fragment key={keyValue}>
              <input
                className="sr-only peer"
                type="radio"
                id={radio.id}
                name={radio.name}
                aria-label={radio.label}
                value={radio.value}
                checked={selectedValue === radio.value}
                onChange={onChange}
              />
              <label htmlFor={radio.id} className="peer-focus-visible">
                {isFilled ? (
                  <motion.div
                    initial={animateStyles.initial}
                    animate={animateStyles.animate}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                  >
                    <Image
                      className={styles.star}
                      src={RatingIconPath.StarFilled}
                      alt=""
                      width={30}
                      height={30}
                    />
                  </motion.div>
                ) : (
                  <Image
                    className={styles.star}
                    src={RatingIconPath.Star}
                    alt=""
                    width={30}
                    height={30}
                  />
                )}
              </label>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewsRating;
