import './../App.css';

type Props = {
  puzzleColor?: string;
  size?: number;
};

const PuzzlePiece = ({ puzzleColor, size }: Props) => {
  return (
    <div className="dev-border-2 bg-white">
      <div className="jigsaw1 dev-border-2  flex items-center justify-center">
        <span className="right-out"></span>
        <span className="bottom-in bg-white"></span>
        <div className="">Here</div>
      </div>
    </div>
  );
};

export default PuzzlePiece;
