"use client";
import { useState } from "react";
import type { ChangeEvent, FC, MouseEvent } from "react";
import numeral from "numeral";

import type { Product, InventoryType } from "@app/types";
import { Scrollbar, Label } from "@app/components";
import Image from "next/image";

interface ProductListTableProps {
  products: Product[];
}

interface Filters {
  availability?: "available" | "unavailable" | null;
  category?: string | null;
  inStock?: boolean | null;
  isShippable?: boolean | null;
}

const categoryOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Dress",
    value: "dress",
  },
  {
    label: "Jewelry",
    value: "jewelry",
  },
  {
    label: "Blouse",
    value: "blouse",
  },
  {
    label: "Beauty",
    value: "beauty",
  },
];

const availabilityOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Available",
    value: "available",
  },
  {
    label: "Unavailable",
    value: "unavailable",
  },
];

const sortOptions = [
  {
    label: "Last update (newest first)",
    value: "updatedAt|desc",
  },
  {
    label: "Last update (oldest first)",
    value: "updatedAt|asc",
  },
  {
    label: "Creation date (newest first)",
    value: "createdAt|desc",
  },
  {
    label: "Creation date (oldest first)",
    value: "createdAt|asc",
  },
];

const getInventoryLabel = (inventoryType: InventoryType): JSX.Element => {
  const map = {
    in_stock: {
      text: "In Stock",
      color: "success",
    },
    limited: {
      text: "Limited",
      color: "warning",
    },
    out_of_stock: {
      text: "Out of Stock",
      color: "error",
    },
  };

  const { text, color }: any = map[inventoryType];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (
  products: Product[],
  query: string,
  filters: Filters
): Product[] =>
  products.filter((product) => {
    let matches = true;

    if (query && !product.name.toLowerCase().includes(query.toLowerCase())) {
      matches = false;
    }

    if (filters.category && product.category !== filters.category) {
      matches = false;
    }

    if (filters.availability) {
      if (filters.availability === "available" && !product.isAvailable) {
        matches = false;
      }

      if (filters.availability === "unavailable" && product.isAvailable) {
        matches = false;
      }
    }

    if (
      filters.inStock &&
      !["in_stock", "limited"].includes(product.inventoryType)
    ) {
      matches = false;
    }

    if (filters.isShippable && !product.isShippable) {
      matches = false;
    }

    return matches;
  });

const applyPagination = (
  products: Product[],
  page: number,
  limit: number
): Product[] => products.slice(page * limit, page * limit + limit);

const ProductListTable: FC<ProductListTableProps> = (props) => {
  const { products, ...other } = props;
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [query, setQuery] = useState<string>("");
  const [sort, setSort] = useState<string>(sortOptions[0].value);
  const [filters, setFilters] = useState<Filters>({
    category: null,
    availability: null,
    inStock: null,
    isShippable: null,
  });

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  const handleCategoryChange = (event: any): void => {
    let value: any = null;

    if (event.target.value !== "all") {
      value = event.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      category: value,
    }));
  };

  const handleAvailabilityChange = (event: any): void => {
    let value: any = null;

    if (event.target.value !== "all") {
      value = event.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      availability: value,
    }));
  };

  const handleStockChange = (event: ChangeEvent<HTMLInputElement>): void => {
    let value: any = null;

    if (event.target.checked) {
      value = true;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      inStock: value,
    }));
  };

  const handleShippableChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    let value: any = null;

    if (event.target.checked) {
      value = true;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      isShippable: value,
    }));
  };

  const handleSortChange = (event: any): void => {
    setSort(event.target.value);
  };

  const handleSelectAllProducts = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedProducts(
      event.target.checked ? products.map((product) => product.id) : []
    );
  };

  const handleSelectOneProduct = (
    event: ChangeEvent<HTMLInputElement>,
    productId: string
  ): void => {
    if (!selectedProducts.includes(productId)) {
      setSelectedProducts((prevSelected) => [...prevSelected, productId]);
    } else {
      setSelectedProducts((prevSelected) =>
        prevSelected.filter((id) => id !== productId)
      );
    }
  };

  const handlePageChange = (event: any | null, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: any): void => {
    setLimit(parseInt(event.target.value, 10));
  };

  // Usually query is done on backend with indexing solutions
  const filteredProducts = applyFilters(products, query, filters);
  const paginatedProducts = applyPagination(filteredProducts, page, limit);
  const enableBulkActions = selectedProducts.length > 0;
  const selectedSomeProducts =
    selectedProducts.length > 0 && selectedProducts.length < products.length;
  const selectedAllProducts = selectedProducts.length === products.length;

  return (
    <div className="bg-white rounded-lg shadow" {...other}>
      <div className="flex flex-wrap items-center m-2 p-2">
        <div className="m-1 max-w-full w-500">
          <input
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Search products"
            onChange={handleQueryChange}
            value={query}
          />
        </div>
        <div className="m-1 max-w-full w-240">
          <select
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={handleSortChange}
            value={sort}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="m-1 max-w-full w-240">
          <select
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={handleCategoryChange}
            value={filters.category || "all"}
          >
            {categoryOptions.map((categoryOption) => (
              <option key={categoryOption.value} value={categoryOption.value}>
                {categoryOption.label}
              </option>
            ))}
          </select>
        </div>
        <div className="m-1 max-w-full w-240">
          <select
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            onChange={handleAvailabilityChange}
            value={filters.availability || "all"}
          >
            {availabilityOptions.map((availabilityOption) => (
              <option
                key={availabilityOption.value}
                value={availabilityOption.value}
              >
                {availabilityOption.label}
              </option>
            ))}
          </select>
        </div>
        <div className="m-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={!!filters.inStock}
              onChange={handleStockChange}
            />
            <span className="ml-2">In Stock</span>
          </label>
        </div>
        <div className="m-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={!!filters.isShippable}
              onChange={handleShippableChange}
            />
            <span className="ml-2">Shippable</span>
          </label>
        </div>
      </div>
      {enableBulkActions && (
        <div className="relative">
          <div className="absolute w-full bg-white mt-1.5 px-1 z-10">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={selectedAllProducts}
                onChange={handleSelectAllProducts}
                ref={(input) => {
                  if (input) {
                    input.indeterminate = selectedSomeProducts;
                  }
                }}
              />

              <button
                className="ml-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
                onClick={() => {
                  /* Delete handler */
                }}
              >
                Delete
              </button>

              <button
                className="ml-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
                onClick={() => {
                  /* Edit handler */
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                  checked={selectedAllProducts}
                  onChange={handleSelectAllProducts}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Inventory
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Attributes
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedProducts.map((product) => {
              const isProductSelected = selectedProducts.includes(product.id);

              return (
                <tr
                  key={product.id}
                  className={`${
                    isProductSelected ? "bg-blue-50" : "hover:bg-gray-50"
                  }`}
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300"
                      checked={isProductSelected}
                      onChange={(event) =>
                        handleSelectOneProduct(event, product.id)
                      }
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {product.image ? (
                        <div className="flex items-center justify-center w-24 h-24 bg-gray-100 overflow-hidden">
                          <Image
                            alt="product"
                            src={product.image}
                            width={35}
                            height={35}
                            className="w-full h-auto"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-24 h-24 bg-gray-100">
                          <span className="text-gray-400">No image</span>
                        </div>
                      )}
                      <span className="ml-4 text-sm font-medium text-gray-900">
                        {product.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full
                ${
                  product.inventoryType === "in_stock"
                    ? "bg-green-100 text-green-800"
                    : ""
                }
                ${
                  product.inventoryType === "limited"
                    ? "bg-yellow-100 text-yellow-800"
                    : ""
                }
                ${
                  product.inventoryType === "out_of_stock"
                    ? "bg-red-100 text-red-800"
                    : ""
                }
              `}
                    >
                      {product.inventoryType === "in_stock" && "In Stock"}
                      {product.inventoryType === "limited" && "Limited"}
                      {product.inventoryType === "out_of_stock" &&
                        "Out of Stock"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {product.quantity} in stock
                    {product.variants > 1 && ` in ${product.variants} variants`}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {product.attributes.join(", ")}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {numeral(product.price).format(`${product.currency}0,0.00`)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-gray-600 hover:text-gray-900">
                      <span className="sr-only">Edit</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-900">
                      <span className="sr-only">View</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-4 py-3 bg-white border-t">
          <div className="flex items-center">
            <select
              className="px-3 py-2 border rounded-md text-sm"
              value={limit}
              onChange={handleLimitChange}
            >
              <option value={5}>5 per page</option>
              <option value={10}>10 per page</option>
              <option value={25}>25 per page</option>
            </select>
            <span className="ml-4 text-sm text-gray-500">
              Showing {page * limit + 1} to{" "}
              {Math.min((page + 1) * limit, filteredProducts.length)} of{" "}
              {filteredProducts.length}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              className="px-3 py-2 border rounded-md text-sm disabled:opacity-50"
              onClick={(e) => handlePageChange(e, page - 1)}
              disabled={page === 0}
            >
              Previous
            </button>
            <button
              className="px-3 py-2 border rounded-md text-sm disabled:opacity-50"
              onClick={(e) => handlePageChange(e, page + 1)}
              disabled={page >= Math.ceil(filteredProducts.length / limit) - 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductListTable;
