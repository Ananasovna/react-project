import { LeftArrowIcon } from "../assets/icons/LeftArrowIcon";
import { RightArrowIcon } from "../assets/icons/RightArrowIcon";
import styles from './LeftRightButton.module.css';

const returnDirectionIcon = (direction) => {
  switch (direction) {
    case "right":
      return <RightArrowIcon />;
    case "left":
      return <LeftArrowIcon />;
  }
};

export const LeftRightButton = ({ direction, onClick }) => {
  return <button className={styles.LeftRightButton} onClick={onClick}>{returnDirectionIcon(direction)}</button>;
};
