import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProjectType } from '@/types/projec.type';
import { Fullscreen, SquareCode } from 'lucide-react';
import Link from 'next/link';

const Project = ({ project }: { project: ProjectType }) => {
  const { skills, github, title, demo, made_at, testimonial } = project;
  return (
    <Card className='group rounded-none border-none bg-accent/60 from-neutral-800/10 p-4 dark:bg-neutral-900 dark:hover:bg-gradient-to-bl sm:rounded-lg'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-start justify-between'>
          <div className='flex items-start gap-2'>
            {/*{image && (*/}
            {/*  <Image*/}
            {/*    src={image}*/}
            {/*    width={55}*/}
            {/*    height={55}*/}
            {/*    alt='fds'*/}
            {/*    className='h-12 shrink-0 transition-all object-cover object-center rounded-[2px]'*/}
            {/*  />*/}
            {/*)}*/}
            <div>
              <h3>{title}</h3>
              <p className='text-sm text-muted-foreground'>{made_at}</p>
            </div>
          </div>
          {demo && (
            <div className='flex'>
              {github && (
                <Button
                  asChild
                  size={'icon'}
                  variant={'ghost'}
                  className='shrink-0'
                >
                  <Link href={github} target='_blank' aria-label='Github'>
                    <SquareCode className='size-4' />
                  </Link>
                </Button>
              )}
              <Button
                asChild
                size={'icon'}
                variant={'ghost'}
                className='shrink-0'
              >
                <Link href={demo} target='_blank' aria-label='Visit Website'>
                  <Fullscreen className='size-4' />
                </Link>
              </Button>
            </div>
          )}
        </div>

        <div>
          {skills && (
            <ul className='mt-2 flex flex-wrap gap-1'>
              {skills.map((tag, idx) => {
                return (
                  <li key={idx} className='lowercase'>
                    <Badge variant={'outline'}>
                      <div
                        className={
                          'size-3 grid items-center project-icon mr-1.5 transition-all'
                        }
                      >
                        {tag.icon}
                      </div>
                      {tag.name}
                    </Badge>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        {testimonial && (
          <blockquote className='border-l-[3px] pl-4 text-sm text-card-foreground'>
            {testimonial}
          </blockquote>
        )}
      </div>
    </Card>
  );
};

export default Project;
