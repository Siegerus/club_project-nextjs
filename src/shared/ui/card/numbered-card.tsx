import Card, { type CardProps } from "./card";

type NumberedCardProps = CardProps & {
  number: number;
};

const numberStyle =
  "block text-xl md:px-[10px] md:pb-0 lg:p-0 text-right leading-main text-white-70";

const NumberedCard = (props: NumberedCardProps) => {
  const { number, imageSizes, cardData, ...restProps } = props;

  return (
    <>
      <Card cardData={cardData} imageSizes={imageSizes} {...restProps}>
        <span className={numberStyle}>{number}</span>
      </Card>
    </>
  );
};

export default NumberedCard;
