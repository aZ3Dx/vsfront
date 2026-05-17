import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel: string;
  afterLabel: string;
};

const labelClass =
  'bg-midnight/70 pointer-events-none absolute top-3 rounded-md px-2 py-1 text-xs font-medium text-white backdrop-blur-sm';

export const ComparisonSlider = ({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
}: Props) => {
  return (
    <div className="relative my-8 aspect-[4/3] w-full overflow-hidden rounded-lg">
      <ReactCompareSlider
        itemOne={
          <div className="relative h-full w-full">
            <ReactCompareSliderImage src={beforeSrc} alt={beforeAlt ?? beforeLabel} />
            <span className={`${labelClass} left-3`}>{beforeLabel}</span>
          </div>
        }
        itemTwo={
          <div className="relative h-full w-full">
            <ReactCompareSliderImage src={afterSrc} alt={afterAlt ?? afterLabel} />
            <span className={`${labelClass} right-3`}>{afterLabel}</span>
          </div>
        }
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};
