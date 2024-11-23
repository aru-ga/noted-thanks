import React from "react";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function Nav({ onSearch }: SearchBarProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center justify-between px-10 w-full py-3 border-b-2 border-violet-500 bg-zinc-900 shadow-lg">
      <h1 className="text-zinc-50">
        Noted<span className="text-violet-500">Thanks</span>
      </h1>
      <div></div>
      <div className="flex items-center">
        <Input
          type="text"
          placeholder="Search Notes"
          className="rounded m-0 border-none text-zinc-50"
          onChange={handleSearchChange}
        />
        <MagnifyingGlassIcon className="size-6 -ml-7 text-blue-500" />
      </div>
    </div>
  );
}
