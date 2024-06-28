import css from './ImageCard.module.css'
import { Picture } from '../../types';

type ImageCardProps = {
  image: Picture;
  onClick: () => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={css.container} onClick={onClick}>
      <img className={css.image} src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;