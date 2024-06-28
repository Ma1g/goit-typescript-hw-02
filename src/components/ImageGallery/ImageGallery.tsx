import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';
import { Picture } from '../../types';

type ImageGalleryProps = {
  items: Picture[];
  onImageClick: (image: Picture) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li className={css.item} key={item.id}>
          <ImageCard image={item} onClick={() => onImageClick(item)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;