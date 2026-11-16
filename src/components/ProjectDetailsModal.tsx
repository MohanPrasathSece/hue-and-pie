import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowUpRight, Compass, Layers, Palette, ShieldCheck, Sparkles } from "lucide-react";

export interface ProjectDetail {
  id: string;
  number: string;
  name: string;
  category: string;
  scope: string;
  locationNote: string;
  description: string;
  designStory: string;
  spatialFeatures: string[];
  materialsUsed: string[];
  image: string;
  alt: string;
}

interface ProjectDetailsModalProps {
  project: ProjectDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onEnquire: (projectName: string) => void;
}

export function ProjectDetailsModal({
  project,
  open,
  onOpenChange,
  onEnquire,
}: ProjectDetailsModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 border border-[#E3D9C6] rounded-[26px] bg-[#FFFDE8] text-[#2B2230] shadow-2xl">
        <div className="relative">
          <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-[26px]">
            <img src={project.image} alt={project.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E1F2E]/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-[#FFFDE8]">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#FFFDE8]/20 backdrop-blur-md border border-[#FFFDE8]/30 text-[11px] font-medium tracking-wide uppercase">
                  {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif mt-2 font-normal">{project.name}</h3>
              </div>
              <span className="text-[#C9A97A] font-serif text-lg sm:text-xl">
                Project {project.number}
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B5F6B]">
              <span className="px-3 py-1 rounded-full bg-[#F3ECDD] text-[#664465] font-medium">
                Scope: {project.scope}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#EFE6EE] text-[#4F3150]">
                {project.locationNote}
              </span>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#6B5F6B]">
                Design Brief &amp; Concept
              </h4>
              <p className="text-sm sm:text-base text-[#2B2230] leading-relaxed font-sans">
                {project.designStory}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-4 rounded-[20px] bg-[#F3ECDD]/60 border border-[#E3D9C6]">
                <div className="flex items-center gap-2 mb-2 text-[#664465]">
                  <Compass className="w-4 h-4 text-[#C9A97A]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Spatial Interventions
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-[#2B2230] leading-relaxed">
                  {project.spatialFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#664465] font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-[20px] bg-[#EFE6EE]/60 border border-[#E3D9C6]">
                <div className="flex items-center gap-2 mb-2 text-[#664465]">
                  <Palette className="w-4 h-4 text-[#C9A97A]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Material &amp; Finish Palette
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-[#2B2230] leading-relaxed">
                  {project.materialsUsed.map((mat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#A9745B] font-bold">•</span>
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-[18px] bg-white border border-[#E3D9C6] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-xs text-[#6B5F6B]">
                <strong className="text-[#2B2230] block">
                  Interested in a similar spatial language?
                </strong>
                We adapt these design principles to your specific room dimensions and family
                routines.
              </div>
              <button
                type="button"
                onClick={() => {
                  onOpenChange(false);
                  onEnquire(project.name);
                }}
                className="btn-primary text-xs py-2.5 px-5 shrink-0 w-full sm:w-auto justify-center"
              >
                <span>Enquire About This Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
