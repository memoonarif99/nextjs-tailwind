// import { ChevronRight } from "@mui/icons-material";
import type { Customer } from "@app/types";
import { CustomerListTable } from "@app/views/customers";
import { customerApi } from "@app/__fake-api__";
import {
  DashbaordRecentActivity,
  DashboardButtons,
  DashboardStats,
} from "@app/components";

const getCustomers = async (): Promise<Customer[]> => {
  const response = await customerApi.getCustomers();
  return response;
};

const Page = async (): Promise<JSX.Element> => {
  const customers = await getCustomers();

  return (
    <div className="bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between gap-3">
          <div className="w-full">
            <h1 className="text-2xl font-medium text-gray-900">Dashboard</h1>
            <p className="text-sm text-[#99999B]">
              Welcome Back! Here&apos;s what&apos;s happening with your
              credentials.
            </p>
            <DashboardButtons />
            <DashboardStats />
            <p className="text-xl font-bold my-6">Recent Activity</p>
          </div>
        </div>
        <DashbaordRecentActivity />
      </div>
    </div>
  );
};

export default Page;
