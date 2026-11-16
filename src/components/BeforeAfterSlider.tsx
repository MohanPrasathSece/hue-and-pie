import { useState, useRef, useCallback } from "react";
import { Sparkles, MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  description?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before transformation",
  afterAlt = "After transformation",
  beforeLabel = "Before • Builder Shell",
  afterLabel = "After • Hue & Pie Curated",
  title,
  description,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="space-y-4">
      {title && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#2B2230] font-normal">{title}</h4>
            {description && <p className="text-xs text-[#6B5F6B] mt-1">{description}</p>}
          </div>
          <span className="text-[11px] text-[#A9745B] font-medium flex items-center gap-1.5 bg-[#FFFDE8] px-3 py-1 rounded-full border border-[#E3D9C6] w-fit">
            <MoveHorizontal className="w-3.5 h-3.5" /> Drag or tap slider to compare
          </span>
        </div>
      )}

      <div
        ref={containerRef}
        className="relative h-80 sm:h-[420px] w-full overflow-hidden rounded-[26px] select-none cursor-ew-resize border border-[#E3D9C6] shadow-lg bg-[#EFE6EE]"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* After Image (Full width background) */}
        <img
          src={afterImage}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Before Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none filter grayscale contrast-105"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%",
              maxWidth: "none",
            }}
          />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#2E1F2E]/80 backdrop-blur-md text-[#FFFDE8] text-[10px] font-semibold uppercase tracking-wider">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#664465]/90 backdrop-blur-md text-[#FFFDE8] text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#C9A97A]" />
          <span>{afterLabel}</span>
        </div>

        {/* Draggable Divider Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 w-0.5 bg-[#FFFDE8] shadow-[0_0_12px_rgba(0,0,0,0.5)] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#664465] border-2 border-[#FFFDE8] text-[#FFFDE8] flex items-center justify-center shadow-xl">
            <MoveHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
