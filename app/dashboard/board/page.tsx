"use client";

import { useOrganization } from "@clerk/nextjs";

import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";
import { Navbar } from "./_components/navbar";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
};

const DashboardPage = ({
  searchParams,
}: DashboardPageProps) => {
  const { organization } = useOrganization();

  return ( 
    <div className="flex-1 h-[calc(100%-80px)] p-6">
        <Navbar/>
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList
          orgId={organization.id}
          query={searchParams}
        />
      )}


    </div>
   );
};
 
export default DashboardPage;