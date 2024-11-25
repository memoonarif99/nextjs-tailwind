// import { ChevronRight } from "@mui/icons-material";
import type { Customer } from "@app/types";
import { CustomerListTable } from "@app/views/customers";
import { customerApi } from "@app/__fake-api__";

const getCustomers = async (): Promise<Customer[]> => {
  const response = await customerApi.getCustomers();
  return response;
};

const Page = async (): Promise<JSX.Element> => {
  const customers = await getCustomers();
  return (
    <div className="min-h-full bg-gray-50 py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-between gap-3">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">
              Customer List
            </h1>
            <nav className="mt-1">
              <ol className="flex items-center space-x-2">
                <li className="text-sm font-medium text-gray-900">Dashboard</li>
                <li className="flex items-center">
                  arrowright
                  {/* <ChevronRight className="h-4 w-4 text-gray-400" /> */}
                  <span className="ml-2 text-sm text-gray-500">Customers</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="mt-6">
          <CustomerListTable customers={customers} />
        </div>
      </div>
    </div>
  );
};

export default Page;
