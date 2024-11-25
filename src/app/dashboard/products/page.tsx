// import { ChevronRight } from "@mui/icons-material";
import type { Product } from "@app/types";
import { ProductListTable } from "@app/views/products";
import { productApi } from "@app/__fake-api__";

const getProducts = async (): Promise<Product[]> => {
  const response = await productApi.getProducts();
  return response;
};

const ProductList = async (): Promise<JSX.Element> => {
  const products = await getProducts();
  return (
    <div className="min-h-full bg-gray-50 py-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-3 justify-between">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">Product List</h1>
            <nav className="mt-1 flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <span className="text-sm text-gray-500">Dashboard</span>
                </li>
                <li>
                  {/* <ChevronRight */}
                  arrowright
                </li>
                <li>
                  <span className="text-sm text-gray-500">Products</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="mt-6">
          <ProductListTable products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
