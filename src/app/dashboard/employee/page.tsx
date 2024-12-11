import type { Product } from "@app/types";
import { productApi } from "@app/__fake-api__";
import { EmployeeList } from "@app/components";

const getProducts = async (): Promise<Product[]> => {
  const response = await productApi.getProducts();
  return response;
};

const page = async (): Promise<JSX.Element> => {
  const products = await getProducts();
  return (
    <div className="min-h-full bg-gray-50 py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-3 justify-between">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">
              Employees List
            </h1>
            <p className="text-sm text-[#99999B]">
              Welcome Back! Here&apos;s what&apos;s happening with your
              credentials.
            </p>
          </div>
        </div>

        <EmployeeList />
      </div>
    </div>
  );
};

export default page;
