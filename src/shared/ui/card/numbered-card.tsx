import Card, { type CardProps } from "./card";

type NumberedCardProps = CardProps & {
  number: number;
};

const numberStyle = "";

const NumberedCard = (props: NumberedCardProps) => {
  const { number, imageSizes, cardData, ...restProps } = props;

  return (
    <>
      <span className={numberStyle}>{number}</span>
      <Card cardData={cardData} imageSizes={imageSizes} {...restProps} />
    </>
  );
};

export default NumberedCard;
