import css from './LoadMoreBtn.module.css'

type LoadMoreBtnProps = {
  onClick: () => void;
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={css.loadbtn} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;