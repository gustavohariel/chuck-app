import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CategoriesDropdown from './categories-dropdown';
import { SearchJokeForm } from './search-joke-form';
import { PersonalizedJokeForm } from './personalized-joke-form';

export function CustomJokeTab() {
  return (
    <Tabs defaultValue="search" className="w-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="search">Search</TabsTrigger>
        <TabsTrigger value="personalized">Personalized</TabsTrigger>
      </TabsList>
      <TabsContent value="search">
        <Card>
          <CardContent className="space-y-2">
            <SearchJokeForm />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="personalized">
        <Card>
          <CardContent className="space-y-2">
            <PersonalizedJokeForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
