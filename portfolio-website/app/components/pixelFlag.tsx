// Small pixel-art flag: a green take on the Save Point flag
const PixelFlag = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 10 12"
    shapeRendering="crispEdges"
    aria-hidden="true"
  >
    <rect x="0" y="0" width="1" height="12" fill="currentColor" />
    <rect x="1" y="1" width="4" height="4" fill="var(--green)" />
    <rect x="5" y="2" width="4" height="4" fill="var(--green)" />
    <rect x="2" y="5" width="3" height="1" fill="var(--green)" />
    <rect x="3" y="0" width="2" height="1" fill="var(--green)" />
  </svg>
);

export default PixelFlag;
