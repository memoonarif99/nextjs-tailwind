"use client";
import { useState } from "react";
import type { ChangeEvent, FC, MouseEvent } from "react";
import numeral from "numeral";
import type { Customer } from "@app/types";
import { getInitials } from "@app/utils";

interface CustomerListTableProps {
  customers: Customer[];
}

type Sort = "updatedAt|desc" | "updatedAt|asc" | "orders|desc" | "orders|asc";

const tabs = [
  { label: "All", value: "all" },
  { label: "Accepts Marketing", value: "hasAcceptedMarketing" },
  { label: "Prospect", value: "isProspect" },
  { label: "Returning", value: "isReturning" },
];

const sortOptions = [
  { label: "Last update (newest)", value: "updatedAt|desc" },
  { label: "Last update (oldest)", value: "updatedAt|asc" },
  { label: "Total orders (highest)", value: "orders|desc" },
  { label: "Total orders (lowest)", value: "orders|asc" },
];

const applyFilters = (
  customers: Customer[],
  query: string,
  filters: any
): Customer[] =>
  customers.filter((customer: Customer | any) => {
    let matches = true;

    if (query) {
      const properties = ["email", "name"];
      let containsQuery = false;

      properties.forEach((property) => {
        if (customer[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && customer[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });

const applyPagination = (
  customers: Customer[],
  page: number,
  limit: number
): Customer[] => customers.slice(page * limit, page * limit + limit);

const descendingComparator = (
  a: Customer | any,
  b: Customer | any,
  orderBy: string
): number => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
};

const getComparator = (order: "asc" | "desc", orderBy: string) =>
  order === "desc"
    ? (a: Customer, b: Customer) => descendingComparator(a, b, orderBy)
    : (a: Customer, b: Customer) => -descendingComparator(a, b, orderBy);

const applySort = (customers: Customer[], sort: Sort): Customer[] => {
  const [orderBy, order] = sort.split("|") as [string, "asc" | "desc"];
  const comparator = getComparator(order, orderBy);
  const stabilizedThis = customers.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    // @ts-ignore
    const newOrder = comparator(a[0], b[0]);

    if (newOrder !== 0) {
      return newOrder;
    }

    // @ts-ignore
    return a[1] - b[1];
  });

  // @ts-ignore
  return stabilizedThis.map((el) => el[0]);
};

interface CustomerFilters {
  hasAcceptedMarketing: boolean | null;
  isProspect: boolean | null;
  isReturning: boolean | null;
  [key: string]: boolean | null; // Add index signature
}
const CustomerListTable: FC<CustomerListTableProps> = ({
  customers,
  ...other
}) => {
  const [currentTab, setCurrentTab] = useState<string>("all");
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [query, setQuery] = useState<string>("");
  const [sort, setSort] = useState<Sort>("updatedAt|desc");
  // const [filters, setFilters] = useState({
  //   hasAcceptedMarketing: null,
  //   isProspect: null,
  //   isReturning: null,
  // });
  const [filters, setFilters] = useState<CustomerFilters>({
    hasAcceptedMarketing: null,
    isProspect: null,
    isReturning: null,
  });

  const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
    const updatedFilters: CustomerFilters = {
      ...filters,
      hasAcceptedMarketing: null,
      isProspect: null,
      isReturning: null,
    };

    if (value !== "all") {
      updatedFilters[value] = true;
    }

    setFilters(updatedFilters);
    setSelectedCustomers([]);
    setCurrentTab(value);
  };
  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSort(event.target.value as Sort);
  };

  const handleSelectAllCustomers = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedCustomers(
      event.target.checked ? customers.map((customer) => customer.id) : []
    );
  };

  const handleSelectOneCustomer = (
    event: ChangeEvent<HTMLInputElement>,
    customerId: string
  ): void => {
    if (!selectedCustomers.includes(customerId)) {
      setSelectedCustomers((prevSelected) => [...prevSelected, customerId]);
    } else {
      setSelectedCustomers((prevSelected) =>
        prevSelected.filter((id) => id !== customerId)
      );
    }
  };

  const handlePageChange = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setLimit(parseInt(event.target.value, 10));
  };

  const filteredCustomers = applyFilters(customers, query, filters);
  const sortedCustomers = applySort(filteredCustomers, sort);
  const paginatedCustomers = applyPagination(sortedCustomers, page, limit);

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="border-b">
        <nav className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleTabsChange({} as any, tab.value)}
              className={`px-4 py-2 ${
                currentTab === tab.value
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-4 flex flex-wrap gap-4">
        <div className="flex-1 min-w-[300px]">
          <div className="relative">
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              placeholder="Search customers"
              value={query}
              onChange={handleQueryChange}
            />
            <span className="absolute left-3 top-2.5 text-gray-400">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>
        </div>

        <select
          className="border rounded-lg px-4 py-2"
          value={sort}
          onChange={handleSortChange}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {selectedCustomers.length > 0 && (
        <div className="bg-blue-50 p-2 flex items-center">
          <input
            type="checkbox"
            className="ml-4"
            checked={selectedCustomers.length === customers.length}
            onChange={handleSelectAllCustomers}
          />
          <button className="ml-4 px-4 py-1 bg-white rounded border hover:bg-gray-50">
            Delete
          </button>
          <button className="ml-2 px-4 py-1 bg-white rounded border hover:bg-gray-50">
            Edit
          </button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-4 text-left">
                <input
                  type="checkbox"
                  checked={selectedCustomers.length === customers.length}
                  onChange={handleSelectAllCustomers}
                />
              </th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Orders</th>
              <th className="p-4 text-left">Spent</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCustomers.map((customer) => (
              <tr key={customer.id} className="border-t hover:bg-gray-50">
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selectedCustomers.includes(customer.id)}
                    onChange={(e) => handleSelectOneCustomer(e, customer.id)}
                  />
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      {customer.avatar ? (
                        <img
                          src={customer.avatar}
                          alt={customer.name}
                          className="w-10 h-10 rounded-full"
                        />
                      ) : (
                        <span>{getInitials(customer.name)}</span>
                      )}
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-gray-500">
                        {customer.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4">{`${customer.city}, ${customer.state}, ${customer.country}`}</td>
                <td className="p-4">{customer.totalOrders}</td>
                <td className="p-4">
                  {numeral(customer.totalAmountSpent).format(
                    `${customer.currency}0,0.00`
                  )}
                </td>
                <td className="p-4 text-right">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t px-4 py-2 flex items-center justify-between">
        <select
          className="border rounded px-2 py-1"
          value={limit}
          onChange={handleLimitChange}
        >
          <option value={5}>5 per page</option>
          <option value={10}>10 per page</option>
          <option value={25}>25 per page</option>
        </select>

        <div className="flex items-center gap-2">
          <button
            onClick={(e) => handlePageChange(e, page - 1)}
            disabled={page === 0}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {page + 1} of {Math.ceil(filteredCustomers.length / limit)}
          </span>
          <button
            onClick={(e) => handlePageChange(e, page + 1)}
            disabled={page >= Math.ceil(filteredCustomers.length / limit) - 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerListTable;
