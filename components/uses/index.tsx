import { Workstation } from './workstation';
import { Personal } from './personal';
import { Software } from './software';
import { Browser } from './browser';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const groups = [
  {
    title: 'Workstation',
    key: 'workstation',
    content: <Workstation />,
  },
  {
    title: 'Personal',
    key: 'personal',
    content: <Personal />,
  },
  {
    title: 'Software',
    key: 'software',
    content: <Software />,
  },
  {
    title: 'Browser',
    key: 'browser',
    content: <Browser />,
  },
];

export const Uses = () => {
  return (
    <>
      <Tabs defaultValue={groups[0].key} className='space-y-8'>
        <TabsList>
          {groups.map((group) => (
            <TabsTrigger value={group.key} key={group.key}>
              {group.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {groups.map((group) => (
          <TabsContent value={group.key} key={group.key}>
            {group.content}
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};
