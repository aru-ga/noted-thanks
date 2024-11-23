import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { showFormattedDate } from "@/lib/initData";
import { Button } from "./ui/button";
import { ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

interface NotecardProps {
  id: any;
  title: string;
  body: string;
  createdAt: string;
  archived: boolean;
  onArchiveToggle: (id: any) => void;
  onDelete: (id: any) => void;
}

export default function Notecard({
  id,
  title,
  body,
  createdAt,
  archived,
  onArchiveToggle,
  onDelete,
}: NotecardProps) {
  return (
    <Card id={id} className="w-80">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{body}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row">
        {archived ? (
          <div>
            <Button
              variant={"outline"}
              className="flex items-center"
              onClick={() => onArchiveToggle(id)}
            >
              <ArchiveBoxXMarkIcon className="w-5 text-violet-500 h-5 mr-4" />
              <p>Unarchive</p>
            </Button>
          </div>
        ) : (
          <div>
            <Button
              variant={"outline"}
              className="flex items-center"
              onClick={() => onArchiveToggle(id)}
            >
              <ArchiveBoxArrowDownIcon className="w-5 text-violet-500 h-5 mr-4" />
              <p>Archive</p>
            </Button>
          </div>
        )}
        <Button
          variant={"outline"}
          className="flex items-center"
          onClick={() => onDelete(id)}
        >
          <TrashIcon className="w-5 text-red-500 h-5 mr-4" />
          <p>Delete</p>
        </Button>
      </CardContent>
      <CardFooter>
        <p>{showFormattedDate(createdAt)}</p>
      </CardFooter>
    </Card>
  );
}
