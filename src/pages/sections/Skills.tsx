import {
  faCss3Alt,
  faGit,
  faHtml5,
  faJsSquare,
  faNode,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, HTMLAttributes } from 'react';
import IconC from '../../components/icons/C';
import IconCplusplus from '../../components/icons/Cplusplus';
import IconGraphQL from '../../components/icons/GraphQL';
import IconNextJs from '../../components/icons/NextJs';
import IconPostgreSql from '../../components/icons/PostgreSql';
import IconTailwind from '../../components/icons/Tailwind';
import { cn } from '../../lib/utils';

interface SkillsProps extends HTMLAttributes<HTMLDivElement> {}

// TODO: Start animation when in view
// TODO: randomize bouncing
// TODO: bounce once or twice
const Skills = forwardRef<HTMLDivElement, SkillsProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'bg-[#375785] min-h-screen flex justify-center items-start',
          'lg:p-40',
          className
        )}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            'items-center justify-center flex flex-col gap-3',
            'lg:max-w-[1000px]'
          )}
          style={{ borderWidth: 2, borderColor: 'red' }}
        >
          <div
            className="flex flex-row items-center justify-center gap-5"
            style={{ borderWidth: 2, borderColor: 'yellow' }}
          >
            <FontAwesomeIcon className={IconClassName} icon={faReact} />
            <IconNextJs className={IconClassName} />
            <IconTailwind className={IconClassName} />
            <FontAwesomeIcon className={IconClassName} icon={faHtml5} />
            <FontAwesomeIcon className={IconClassName} icon={faCss3Alt} />
            <IconGraphQL className={IconClassName} />
          </div>
          <div
            className="flex flex-row items-center justify-center gap-5"
            style={{ borderWidth: 2, borderColor: 'yellow' }}
          >
            <FontAwesomeIcon className={IconClassName} icon={faJsSquare} />
            <IconC className={IconClassName} />
            <IconCplusplus className={IconClassName} />
            <FontAwesomeIcon className={IconClassName} icon={faPython} />
          </div>
          <div
            className="flex flex-row items-center justify-center gap-5"
            style={{ borderWidth: 2, borderColor: 'yellow' }}
          >
            <FontAwesomeIcon className={IconClassName} icon={faNode} />
            <IconPostgreSql className={IconClassName} />
            <FontAwesomeIcon className={IconClassName} icon={faGit} />
          </div>
        </div>
      </div>
    );
  }
);

export default Skills;

const IconClassName = cn(
  'w-20 h-20 text-white animate-bounce-pulse hover:animate-pulse'
);
