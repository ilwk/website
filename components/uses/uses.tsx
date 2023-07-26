import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Browser, Personal, Software, Workstation } from '.';

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
      <Tabs defaultValue='account' className='space-y-8'>
        <TabsList defaultValue={groups[0].key}>
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
