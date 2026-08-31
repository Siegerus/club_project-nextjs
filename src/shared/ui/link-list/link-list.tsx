import { SocialItem, type LinkItemType } from "../icon-link";

export type SocialListItem = LinkItemType & {
  width?: number;
  height?: number;
};

type SocialListProps = {
  items: SocialListItem[];
  wrapperClass?: string;
  linkClass?: string;
  imageClass?: string;
};

const defaultSize = { width: 20, height: 20 };

const LinkList = ({
  items,
  wrapperClass,
  linkClass,
  imageClass,
}: SocialListProps) => {
  return (
    <div className={wrapperClass}>
      {items.map((item) => (
        <SocialItem
          key={item.src}
          src={item.src}
          href={item.href}
          alt={item.alt}
          width={item.width ?? defaultSize.width}
          height={item.height ?? defaultSize.height}
          linkClass={linkClass}
          imageClass={imageClass}
        />
      ))}
    </div>
  );
};

export default LinkList;
