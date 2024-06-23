import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SearchJokeOption } from './search-joke-option';
import { PersonalizedJokeOptions } from './personalized-joke-options';

export function CustomJokeTab() {
  return (
    <Tabs defaultValue="search" className="w-[300px] md:w-[450px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="search">Search</TabsTrigger>
        <TabsTrigger value="personalized">Personalized</TabsTrigger>
      </TabsList>
      <TabsContent value="search">
        <Card>
          <CardContent className="space-y-2">
            <SearchJokeOption />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="personalized">
        <Card>
          <CardContent className="space-y-2">
            <PersonalizedJokeOptions />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
