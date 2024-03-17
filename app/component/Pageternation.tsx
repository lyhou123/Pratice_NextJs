
'use client';
import { Pagination } from 'flowbite-react';
import { useState } from 'react';
export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  return (
    <div className="flex overflow-x-auto sm:justify-center mb-4">
      <Pagination currentPage={currentPage} totalPages={2} onPageChange={onPageChange}/>
    </div>
  );
}
