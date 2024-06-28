import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={css.loadbox}>
      <InfinitySpin
        width="200px"
        color="darkblue"
      />
    </div>
  );
};

export default Loader;