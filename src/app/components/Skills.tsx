import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type SkillSet = string;
interface Skill {
  category: string;
  skillSets: readonly SkillSet[];
}

type Skills = readonly Skill[];

interface SkillsListProps {
  skills: Skills;
  className?: string;
}

/**
 * Renders a list of skills as badges
 */
function SkillsList({ skills, className }: SkillsListProps) {
  return (
    <>
      {skills.map((skill, index) => (
        <div key={index}>
          <span>{skill.category}</span>
          <ul
            className={cn("flex list-none flex-wrap gap-1 p-0", className)}
            aria-label="List of skills"
          >
            {skill.skillSets.map((skillSet, index) => (
              <li key={index}>
                <Badge className="print:text-[10px]" aria-label={`Skill: ${skillSet}`}>
                  {skillSet}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

interface SkillsProps {
  skills: Skills;
  className?: string;
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        Skills
      </h2>
      <SkillsList skills={skills} aria-labelledby="skills-section" />
    </Section>
  );
}
